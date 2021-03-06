import React from "react";
import Svg from "react-native-svg";
import { VictoryContainer } from "victory-core/src";
import { NativeHelpers } from "../index";
import { Portal } from "../index";

export default class extends VictoryContainer {

  renderContainer(props, svgProps, style) {
    const { children } = props;
    const nativeStyle = NativeHelpers.getStyle(style);
    return (
      <Svg {...nativeStyle} {...svgProps}>
        {children}
        <Portal ref={this.savePortalRef}/>
      </Svg>
    );
  }
}
