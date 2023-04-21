import React from "react";
import { Label, Logo, Svg } from "./Logo.styled";
import { LogoProps } from "./Logo.types";

export const LogoComponent: React.FC<LogoProps> = ({ url, label }) => {
  return (
    <Logo>
      <a href={url} aria-label="logo link">
        <Svg
          id="logo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-5 -5 210 210"
          version="1.1"
          width="100"
          height="100"
        >
          <defs>
            <linearGradient
              id="gradient"
              gradientTransform="translate(10,100)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="rgba(255, 0, 0, 1)" />
              <stop offset="10%" stopColor="rgba(255, 154, 0, 1)" />
              <stop offset="20%" stopColor="rgba(208, 222, 33, 1)" />
              <stop offset="30%" stopColor="rgba(79, 220, 74, 1)" />
              <stop offset="40%" stopColor="rgba(63, 218, 216, 1)" />
              <stop offset="50%" stopColor="rgba(47, 201, 226, 1)" />
              <stop offset="60%" stopColor="rgba(28, 127, 238, 1)" />
              <stop offset="70%" stopColor="rgba(95, 21, 242, 1)" />
              <stop offset="80%" stopColor="rgba(186, 12, 248, 1)" />
              <stop offset="90%" stopColor="rgba(251, 7, 217, 1)" />
              <stop offset="100%" stopColor="rgba(255, 0, 0, 1)" />
            </linearGradient>
          </defs>

          <polygon
            className="hex"
            points="52,16.8615612366939 148,16.8615612366939 196,100 148,183.138438763306 52,183.138438763306 4,100"
            strokeWidth={10}
          ></polygon>
          <path
            id="text"
            transform="translate(58, 55)"
            d="M 11.7 91 L 0 91 L 0 0 L 17.29 0 L 42.51 57.59 L 67.34 0 L 85.02 0 L 85.02 91 L 72.67 91 L 72.67 15.73 L 48.36 70.46 L 36.14 70.46 L 11.7 15.73 L 11.7 91 Z"
          />
        </Svg>
      </a>
      <Label aria-label="App name">{label}</Label>
    </Logo>
  );
};
