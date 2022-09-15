/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// webpack.config.common.js
// Your current imports
const CopywebpackPlugin = require('copy-webpack-plugin');
const { DefinePlugin } = require('webpack');

// Common configs
const path = require('./path');

// Everything belongs to cesium is isolated in an object like this
const cesiumConfig = {
  resolve: {
    alias: {
      // CesiumJS module name
      cesiumSource: path.cesiumSource
    }
  },
  amd: {
    // Enable webpack-friendly use of require in Cesium
    toUrlUndefined: true
  },
  output: {
    // Needed to compile multiline strings in Cesium
    sourcePrefix: ''
  },
  plugins: [
    // Copy Cesium Assets, Widgets, and Workers to a static directory
    new CopywebpackPlugin([{ from: path.cesiumWorkers, to: 'Workers' }]),
    new CopywebpackPlugin([{ from: path.cesiumSourceAssets, to: 'Assets' }]),
    new CopywebpackPlugin([{ from: path.cesiumSourceWidgets, to: 'Widgets' }]),
    new DefinePlugin({
      // Define relative base path in cesium for loading assets
      CESIUM_BASE_URL: JSON.stringify('')
    })
  ]
};
// Now, using the cesiumConfig in your real configuration
const config = {
  ...cesiumConfig,
  module: {
    unknownContextCritical: false,
    rules: [
      // Make sure you have below rules as default
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
        use: ['url-loader']
      }
    ]
  },

  resolve: {
    alias: {
      ...cesiumConfig.resolve.alias
    }
  },

  plugins: [
    // your current plugins
    ...cesiumConfig.plugins
  ]
};

module.exports = config;
