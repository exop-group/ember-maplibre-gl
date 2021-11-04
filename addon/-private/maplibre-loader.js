import { bind, next } from '@ember/runloop';
import EmberObject, { set } from '@ember/object';
import { Promise as RsvpPromise } from 'rsvp';

class MaplibreLoaderCancelledError extends Error {}
class MaplibreSupportError extends Error {
  isMaplibreSupportError = true;
}
class MaplibreError extends Error {
  constructor(ev) {
    super(ev.error?.message ?? 'unknown maplibre error');

    this.event = ev;
  }
}

export default EmberObject.extend({
  map: null,
  error: null,
  MaplibreGl: null,
  isLoaded: false,

  _mapOptions: null,
  _extOnMapLoaded: null,
  _isCancelled: false,
  _isLoading: false,

  load(options, onMapLoaded) {
    if (this.isLoaded || this._isLoading || this._isCancelled) {
      return;
    }

    this._isLoading = true;
    this._mapOptions = options;
    this._extOnMapLoaded = onMapLoaded;

    import('maplibre-gl')
      .then(bind(this, this._onModule))
      .then(bind(this, this._onMapLoaded))
      .then(bind(this, this._onComplete))
      .catch(bind(this, this._onError));
  },

  cancel() {
    this._isCancelled = true;

    if (this.map !== null) {
      // some map users may be late doing cleanup (seen with maplibre-draw-gl),
      // so don't remove the map until the next tick
      next(this.map, this.map.remove);
    }
  },

  _onModule(MaplibreGl) {
    if (this._isCancelled) {
      throw new MaplibreLoaderCancelledError();
    }

    this.MaplibreGl = MaplibreGl.default;

    if (!this.MaplibreGl.supported()) {
      throw new MaplibreSupportError(
        'maplibre-gl not supported in current browser'
      );
    }

    const map = (this.map = new this.MaplibreGl.Map(this._mapOptions));

    return new RsvpPromise((resolve, reject) => {
      const listeners = {
        onLoad() {
          map.off('load', listeners.onLoad);
          map.off('error', listeners.onError);
          resolve();
        },
        onError(ev) {
          map.off('load', listeners.onLoad);
          map.off('error', listeners.onError);

          reject(new MaplibreError(ev));
        },
      };

      map.on('load', listeners.onLoad);
      map.on('error', listeners.onError);
    });
  },

  _onMapLoaded() {
    if (this._isCancelled) {
      throw new MaplibreLoaderCancelledError();
    }

    if (typeof this._extOnMapLoaded === 'function') {
      return this._extOnMapLoaded(this.map);
    }

    return null;
  },

  _onComplete() {
    this._isLoading = false;

    if (this._isCancelled) {
      return;
    }

    set(this, 'isLoaded', true);
  },

  _onError(err) {
    this._isLoading = false;

    if (err instanceof MaplibreLoaderCancelledError) {
      return;
    }

    if (this._isCancelled) {
      console.error(err); // eslint-disable-line no-console
      return;
    }

    set(this, 'error', err);
  },
});
