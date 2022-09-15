/* eslint-disable @typescript-eslint/no-var-requires */
// You may need to disable tslint for this require
// Notice that cesiumSource is the alias we defined in
// webpack.config.common.js resolve.alias
const cesium: any = require('cesiumSource/Cesium');
// Import @types/cesium to use along with CesiumJS
import { Viewer } from 'cesium';
// Import Cesium CSS if not yet added at root component
// import 'cesiumSource/Widgets/widgets.css';
import { Component, createRef, ReactNode, RefObject } from 'react';

export interface Props {
  value?: any;
}

/**
 * Project page
 */
export class CesiumPage extends Component<Props> {
  private cesiumContainer: RefObject<HTMLDivElement>;

  public constructor(props: Props) {
    super(props);
    this.cesiumContainer = createRef();
  }

  public componentDidMount(): void {
    if (this.cesiumContainer.current) {
      // type Viewer is from @types/cesium
      // whereas, new cesium.Viewer is from the module cesium
      const viewer: Viewer = new cesium.Viewer(this.cesiumContainer.current);
      console.log('cesium viewer = ', viewer);
    }
  }

  public render(): ReactNode {
    return (
      <div>
        <div id='cesiumContainer' ref={this.cesiumContainer} />
      </div>
    );
  }
}
