import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgRight(props) {
  return (
    <Svg
      width={17}
      height={23}
      scaleY={1.11}
      scaleX={1.11}
      viewBox="0 0 17 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M15.745 13.84l-.001.002-9.349 7.715s0 0 0 0a3.725 3.725 0 01-3.92.461h0l-.003-.001a3.101 3.101 0 01-1.85-2.8V3.783a3.1 3.1 0 011.85-2.8h0l.003-.002a3.726 3.726 0 013.92.46s0 0 0 0l9.349 7.717h.001a3.028 3.028 0 011.127 2.341 3.027 3.027 0 01-1.127 2.34h0z"
        fill="#68C0EE"
        stroke="#172B42"
        strokeWidth={0.25}
      />
    </Svg>
  );
}

export default SvgRight;
