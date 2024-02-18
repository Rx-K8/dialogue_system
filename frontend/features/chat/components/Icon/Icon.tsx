import * as React from "react";
import { SVGProps } from "react";
const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      width: 24,
      height: 24,
      opacity: 1,
    }}
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      d="M512 52.535 459.467.002l-203.465 203.46L52.538.002 0 52.535l203.47 203.47L0 459.465l52.533 52.533 203.469-203.471 203.465 203.471L512 459.475l-203.464-203.47z"
      style={{
        fill: "#ffffff",
      }}
    />
  </svg>
);
export default CloseIcon;
