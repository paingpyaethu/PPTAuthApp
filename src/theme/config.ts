import { TextStyle } from "react-native";
import { moderateScale, scaledSize } from "./metrics";

export enum FONT_FAMILY {
  REGULAR = "Nunito-Regular",
  MEDIUM = "Nunito-Medium",
  SEMI_BOLD = "Nunito-SemiBold",
  BOLD = "Nunito-Bold",
}

/**
 * Metrics Sizes
 */
const metricSizes = {
  _1: moderateScale(1),
  _2: scaledSize(2),
  _3: scaledSize(3),
  _4: scaledSize(4),
  _6: scaledSize(6),
  _8: scaledSize(8),
  _10: scaledSize(10),
  _12: scaledSize(12),
  _14: scaledSize(14),
  _15: scaledSize(15),
  _16: scaledSize(16),
  _18: scaledSize(18),
  _20: scaledSize(20),
  _22: scaledSize(22),
  _23: scaledSize(23),
  _24: scaledSize(24),
  _25: scaledSize(25),
  _28: scaledSize(28),
  _30: scaledSize(30),
  _35: scaledSize(35),
  _40: scaledSize(40),
  _45: scaledSize(45),
  _50: scaledSize(50),
  _55: scaledSize(55),
  _60: scaledSize(61),
  _65: scaledSize(66),
  _70: scaledSize(71),
  _75: scaledSize(76),
  _80: scaledSize(81),
  _90: scaledSize(90),
  _100: scaledSize(100),
  _110: scaledSize(110),
  _120: scaledSize(120),
  _150: scaledSize(150),
  _200: scaledSize(200),
};

const themeFontStyles = {
  fs_12: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: metricSizes._12,
    lineHeight: metricSizes._18,
  } as TextStyle,
  fs_16: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: metricSizes._16,
    lineHeight: metricSizes._22,
  } as TextStyle,
  fs_18: {
    fontFamily: FONT_FAMILY.MEDIUM,
    fontSize: metricSizes._18,
    lineHeight: metricSizes._24,
  } as TextStyle,
  fs_28: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: metricSizes._28,
    lineHeight: metricSizes._35,
  } as TextStyle,
};

const shadows = {
  extraLight: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.0,
    elevation: 1,
  },
  light: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 1.51,
    elevation: 2,
  },
  normal: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  dark: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 8,
  },
};

export const config = {
  fonts: themeFontStyles,
  shadows,
  spacing: metricSizes,
};
