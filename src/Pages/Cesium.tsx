import React, { useEffect } from 'react';
import * as Cesium from 'cesium';

const CesiumContent = () => {
  useEffect(() => {
    const viewer = new Cesium.Viewer('cesiumContainer', {
      terrainProvider: Cesium.createWorldTerrain()
    });
  }, []);

  return <div id='cesiumContainer'></div>;
};

export default CesiumContent;
