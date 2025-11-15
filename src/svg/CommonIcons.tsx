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
  size = config.spacing._20,
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
