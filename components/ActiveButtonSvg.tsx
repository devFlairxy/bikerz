import * as React from "react"
import Svg, {
  SvgProps,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const ActiveButtonSvg = (props: SvgProps) => (
  <Svg {...props} fill="none">
    <G filter="url(#a)">
      <Path
        fill="url(#b)"
        d="M17 28.198a10 10 0 0 1 8.039-9.806l40-8C71.227 9.155 77 13.888 77 20.198v27.604a10 10 0 0 1-8.039 9.806l-40 8C22.773 66.845 17 62.112 17 55.802V28.198Z"
      />
      <Path
        stroke="url(#c)"
        strokeOpacity={0.6}
        d="M17.5 28.198a9.5 9.5 0 0 1 7.637-9.316l40-8C71.015 9.707 76.5 14.204 76.5 20.199v27.604a9.5 9.5 0 0 1-7.637 9.316l-40 8C22.985 66.293 17.5 61.797 17.5 55.802V28.198Z"
       
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={20}
        x2={61.791}
        y1={8}
        y2={89.043}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#34C8E8" />
        <Stop offset={1} stopColor="#4E4AF2" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={17}
        x2={51.075}
        y1={8}
        y2={80.23}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default ActiveButtonSvg
