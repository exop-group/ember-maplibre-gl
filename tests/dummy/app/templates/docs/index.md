# Introduction

Ember integration with [`maplibre-gl-js`](https://maplibre.org/maplibre-gl-js-docs/api/).

## Installation

```sh
ember install ember-maplibre-gl
```

Then, add your MapLibre configuration to `config/environment.js`:
```javascript
module.exports = function(environment) {
  let ENV = {
    'maplibre-gl': {},
}
```

## Static Build

By default, `ember-maplibre-gl` will load the `maplibre-gl` library dynamically via [`ember-auto-import`'s dynamic import support](https://github.com/ef4/ember-auto-import#dynamic-import). If you would prefer for `maplibre-gl-js` to not be loaded dynamically, include an `import 'maplibre-gl';` somewhere in your app and `ember-auto-import` will include it in your vendor bundle.
