import React from 'react';
import * as Cesium from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';
import CesiumContent from './Pages/Cesium';

declare global {
  interface Window {
    CESIUM_BASE_URL: string;
  }
}

// The URL on your server where CesiumJS's static files are hosted.
window.CESIUM_BASE_URL = '/';
// Cesium.Ion.defaultAccessToken =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyMzBjZDM1Yy04OGVmLTRjNzEtYTYzMS1kYjdjMGM4OWJmNzAiLCJpZCI6MTA3Njk5LCJpYXQiOjE2NjI5NTk1NzR9.gL4j3GgzbkQPW68nYV49_vVFFOBNxnGd1jX7b9-ioO0';

function App() {
  return (
    <div className='App'>
      <img src='static/logo.svg' />
      {/* <CesiumContent /> */}
    </div>
  );
}

export default App;
