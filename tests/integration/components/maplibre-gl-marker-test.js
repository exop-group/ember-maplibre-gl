import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import setupMap from '../../helpers/create-map';

module('Integration | Component | maplibre gl marker', function (hooks) {
  setupMap(hooks);
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(0);

    this.set('lngLat', [0, 0]);

    await render(
      hbs`{{maplibre-gl-marker map=this.map lngLat=this.lngLat MaplibreGl=this.MaplibreGl}}`
    );
  });
});
