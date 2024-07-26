import * as React from 'react';
import { View } from 'react-native';
import Svg, {
  SvgProps,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

const originalWidth = 245;
const originalHeight = 376;
const aspectRatio = originalWidth / originalHeight;
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const ItemCardSvg = (props: SvgProps) => (
  <View style={{ width: '100%', aspectRatio }}>
    <Svg
      style={{ flex: 1 }}
      {...props}
      fill="none"
      width={265}
      height={376}
      viewBox={`0 0 ${originalWidth} ${originalHeight}`}
    >
      <G filter="url(#a)">
        <Path
          fill="url(#b)"
          d="M20 95.722c0-10.115 7.552-18.637 17.593-19.854l125-15.152C174.506 59.272 185 68.571 185 80.571v179.707c0 10.115-7.552 18.637-17.593 19.855l-125 15.151C30.494 296.728 20 287.429 20 275.429V95.722Z"
        />
        <Path
          stroke="url(#c)"
          strokeOpacity={0.2}
          strokeWidth={2}
          d="M21 95.722c0-9.609 7.174-17.706 16.714-18.862l125-15.151C174.031 60.337 184 69.17 184 80.57v179.707c0 9.609-7.174 17.706-16.714 18.862l-125 15.151C30.97 295.663 21 286.829 21 275.429V95.722Z"
        />
      </G>
      <Defs>
        <LinearGradient
          id="b"
          x1={79.5}
          x2={115.716}
          y1={121.734}
          y2={262.72}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#353F54" />
          <Stop offset={1} stopColor="#222834" />
        </LinearGradient>
        <LinearGradient
          id="c"
          x1={38.5}
          x2={168.663}
          y1={66.963}
          y2={154.6}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={0.845} />
          <Stop offset={1} />
        </LinearGradient>
      </Defs>
    </Svg>
  </View>
);
export default ItemCardSvg;
