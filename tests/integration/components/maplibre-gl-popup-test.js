import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import setupMap from '../../helpers/create-map';

module('Integration | Component | maplibre gl popup', function (hooks) {
  setupMap(hooks);
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(0);

    await render(hbs`{{maplibre-gl-popup map=map MaplibreGl=MaplibreGl}}`);
  });

  test('popup events can be subscribed to from the template', async function (assert) {
    this.onClose = () => {
      assert.step('onClose');
    };

    await render(hbs`
      {{#maplibre-gl-popup map=map MaplibreGl=MaplibreGl as |popup|}}
        {{popup.on 'close' onClose}}
      {{/maplibre-gl-popup}}
    `);

    // popups close when the map is clicked
    this.map.fire('click');

    assert.verifySteps(['onClose']);
  });

  test('it handles re-renders on map clicks after closing', async function (assert) {
    this.set('clicked', { lngLat: { lng: -93.9688, lat: 37.1314 } });

    await render(hbs`
      {{#maplibre-gl-popup lngLat=(array this.clicked.lngLat.lng this.clicked.lngLat.lat) map=map MaplibreGl=MaplibreGl}}
        Hi
      {{/maplibre-gl-popup}}
    `);

    await click('.maplibregl-popup-close-button');

    this.set('clicked', { lngLat: { lng: -30.9688, lat: 36.1314 } });

    assert.dom('.maplibregl-popup-content').containsText('Hi');
  });
});
