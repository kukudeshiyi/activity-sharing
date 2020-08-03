import { Dimensions, StatusBar, Platform, PixelRatio } from 'react-native';

const designWidth = 320;
const designHeight = 570;

export const width: number = Dimensions.get('window').width;
export const height: number = Dimensions.get('window').height;

export const statusBarHeight = getStatusBarHeight();

// alert(`${statusBarHeight}`);

export const unitWidth = width / designWidth;
export const unitHeight = height / designHeight;

// export const safeAreaViewHeight = isIphoneX() ? 34 : 0

// export const titleHeight = unitWidth * 100 + statusBarHeight;

export const fontscale = PixelRatio.getFontScale()

/**
 * 判断是否为iphoneX
 * @returns {boolean}
 */
export function isIphoneX() {
  const X_WIDTH = 375;
  const X_HEIGHT = 812;
  return Platform.OS == 'ios' && (height == X_HEIGHT && width == X_WIDTH)
}

//状态栏的高度
export function getStatusBarHeight(): number {
  if (Platform.OS == 'android') return StatusBar.currentHeight as number;
  if (isIphoneX()) {
    return 44
  }
  return 20
}

