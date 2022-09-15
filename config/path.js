/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
// path.js
'use strict';

const path = require('path');
const process = require('process');

const pathBuilder = (subpath) => path.join(process.cwd(), subpath);

module.exports = {
  // Your current defined paths

  // The path to the CesiumJS source code
  cesiumSource: pathBuilder('node_modules/cesium/Source'),
  cesiumSourceAssets: pathBuilder('node_modules/cesium/Source/Assets'),
  cesiumSourceWidgets: pathBuilder('node_modules/cesium/Source/Widgets'),
  cesiumWorkers: pathBuilder('node_modules/cesium/Build/Cesium/Workers')
};
