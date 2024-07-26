import * as React from 'react';
import { Dimensions, View } from 'react-native';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const originalWidth = 350;
const originalHeight = 238;
const aspectRatio = originalWidth / originalHeight;

const HomeCardSvg = (props: SvgProps) => (
  <View style={{ width: '100%', aspectRatio }}>
    <Svg
      width="100%"
      height="100%"
      fill="none"
      viewBox={`0 0 ${originalWidth} ${originalHeight}`}
      {...props}
    >
      <Path
        fill="url(#a)"
        fillOpacity={0.6}
        d="M0 20C0 8.954 8.954 0 20 0h310c11.046 0 20 8.954 20 20v162.156c0 10.167-7.628 18.716-17.729 19.87l-310 35.429C10.403 238.811 0 229.529 0 217.584V20Z"
      />
      <Path
        stroke="url(#b)"
        strokeOpacity={0.2}
        strokeWidth={2}
        d="M1 20C1 9.507 9.507 1 20 1h310c10.493 0 19 8.507 19 19v162.156c0 9.658-7.246 17.78-16.843 18.877l-310 35.428C10.883 237.75 1 228.932 1 217.584V20Z"
      />
      <Defs>
        <LinearGradient
          id="a"
          x1={126.212}
          x2={144.149}
          y1={63.734}
          y2={211.851}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#353F54" />
          <Stop offset={1} stopColor="#222834" />
        </LinearGradient>
        <LinearGradient
          id="b"
          x1={39.242}
          x2={171.249}
          y1={8.963}
          y2={197.494}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} />
        </LinearGradient>
      </Defs>
    </Svg>
  </View>
);
export default HomeCardSvg;
