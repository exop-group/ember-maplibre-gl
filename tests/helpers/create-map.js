import { Promise } from 'rsvp';
import Config from '../../config/environment';
import QUnit from 'qunit';

const ALLOWED_ERRORS = ['The operation was aborted', 'Failed to fetch'];

export default function setupMap(hooks) {
  hooks.before(async function () {
    const MaplibreGl = await import('maplibre-gl');
    this.MaplibreGl = MaplibreGl.default;

    await new Promise((resolve) => {
      this._mapContainer = document
        .querySelector(Config.APP.rootElement)
        .appendChild(document.createElement('div'));

      this.map = new this.MaplibreGl.Map({
        container: this._mapContainer,
        style: Config['maplibre-gl'].map.style,
      });

      this.map.style.once('data', () => resolve());

      const onErr = (ev) => {
        const err = {
          message: ev.error?.message || 'unknown maplibre error',
          event: ev,
          stack: ev.error?.stack,
        };

        if (ALLOWED_ERRORS.includes(err.message)) {
          // eslint-disable-next-line no-console
          console.error(err.message, ev.error);
        } else {
          QUnit.onUnhandledRejection(err);
        }
      };

      this.map.style.on('error', onErr);
      this.map.on('error', onErr);
    });
  });

  hooks.after(function () {
    this.map.remove();
    this._mapContainer.parentElement.removeChild(this._mapContainer);
  });
}
