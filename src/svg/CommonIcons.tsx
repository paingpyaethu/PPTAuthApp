import React from "react";
import Svg, { Circle, Path, Rect } from "react-native-svg";
import { config } from "@/theme/config";

type IconProps = { size?: number; color?: string };

type EyeIconProps = {
  size?: number;
  color?: string;
  closed?: boolean;
};

export const EyeIcon = ({
  size = config.spacing._24,
  color = "#9CA3AF",
  closed = false,
}: EyeIconProps) => {
  if (closed) {
    return (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          d="M3 3l18 18M10.585 10.586A2 2 0 0113.414 13.414M5.1 8.53C6.829 6.63 8.94 5.5 12 5.5c3.06 0 5.17 1.13 6.9 3.03a9.5 9.5 0 011.57 2.47 9.64 9.64 0 01-1.009 1.77"
          stroke={color}
          strokeWidth={config.spacing._1}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  }

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M2.458 12.042C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7.042a.997.997 0 010 .632C20.268 16.057 16.477 19 12 19c-4.477 0-8.268-2.943-9.542-7.042a.997.997 0 010-.916z"
        stroke={color}
        strokeWidth={config.spacing._1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        stroke={color}
        strokeWidth={config.spacing._1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const MailIcon = ({
  size = config.spacing._20,
  color = "#9CA3AF",
}: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Rect
      x="3"
      y="5"
      width="18"
      height="14"
      rx="2"
      stroke={color}
      strokeWidth={config.spacing._1}
    />
    <Path
      d="M5 7l7 6 7-6"
      stroke={color}
      strokeWidth={config.spacing._1}
      strokeLinecap="round"
    />
  </Svg>
);

export const UserIcon = ({
  size = config.spacing._22,
  color = "#9CA3AF",
}: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle
      cx="12"
      cy="8"
      r="3.2"
      stroke={color}
      strokeWidth={config.spacing._1}
    />
    <Path
      d="M6 18c1.2-2.3 3.1-3.5 6-3.5S16.8 15.7 18 18"
      stroke={color}
      strokeWidth={config.spacing._1}
      strokeLinecap="round"
    />
  </Svg>
);

export const LockIcon = ({
  size = config.spacing._22,
  color = "#9CA3AF",
}: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Rect
      x="5"
      y="10"
      width="14"
      height="10"
      rx="2"
      stroke={color}
      strokeWidth={config.spacing._1}
    />
    <Path
      d="M9 10V8a3 3 0 016 0v2"
      stroke={color}
      strokeWidth={config.spacing._1}
      strokeLinecap="round"
    />
  </Svg>
);

export const MoonIcon = ({
  size = config.spacing._35,
  color = "#9CA3AF",
}: IconProps) => (
  <Svg fill="none" viewBox="0 0 24 24" width={size} height={size}>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={config.spacing._1}
      d="M13 6V3m5.5 9V7m-4-2.5h-3m9.5 5h-5m-.445 7.315a8.34 8.34 0 0 0 3.445-.74A8.37 8.37 0 1 1 7.925 5a8.37 8.37 0 0 0 7.63 11.815Z"
    />
  </Svg>
);

export const SunIcon = ({
  size = config.spacing._35,
  color = "#9CA3AF",
}: IconProps) => (
  <Svg fill="none" viewBox="0 0 24 24" width={size} height={size}>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={config.spacing._1}
      d="M7.455 2v1m3.889.61-.707.708m-6.364 6.364-.707.707M1.956 7.5h1m.61-3.89.708.708M6.5 9.213a2.004 2.004 0 0 1-1.045-1.758A2 2 0 0 1 9.403 7M9.8 21C7.149 21 5 18.947 5 16.414c0-2.1 1.6-4.039 4-4.414a5.057 5.057 0 0 1 4.613-3c2.662 0 4.837 1.99 4.987 4.5 1.413.596 2.4 2.057 2.4 3.64 0 2.132-1.79 3.86-4 3.86H9.8Z"
    />
  </Svg>
);
