import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgLeft(props) {
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
        d="M1.252 9.16h0v-.001L10.6 1.443s0 0 0 0A3.724 3.724 0 0114.52.981h0l.003.001a3.1 3.1 0 011.85 2.8v15.433a3.1 3.1 0 01-1.85 2.8h0l-.003.002a3.724 3.724 0 01-3.919-.46s0 0 0 0l-9.347-7.716h0l-.001-.001A3.028 3.028 0 01.125 11.5a3.028 3.028 0 011.127-2.34z"
        fill="#68C0EE"
        stroke="#172B42"
        strokeWidth={0.25}
      />
    </Svg>
  );
}

export default SvgLeft;
