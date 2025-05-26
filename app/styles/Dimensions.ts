import {Dimensions, Platform, PlatformIOSStatic} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const IS_IOS = Platform.OS === 'ios' ? true : false;
export const IS_IPAD = () => {
  if (Platform.OS === 'ios') {
    const platformIOS = Platform as PlatformIOSStatic;
    // console.log(platformIOS.isPad, ' platformIOS.isPad');
    return platformIOS.isPad;
  }
  return false;
};
export const IOS_VERSION = () => {
  if (Platform.OS === 'ios') {
    const platformIOS = Platform as PlatformIOSStatic;
    // console.log(platformIOS.isPad, ' platformIOS.isPad');
    return platformIOS.Version;
  }
};
const {width, height} = Dimensions.get('window');
const {width: screenWidht, height: screenHeight} = Dimensions.get('screen');
export {
  wp,
  hp,
  width as WINDOW_WIDTH,
  height as WINDOW_HEIGHT,
  screenWidht as SCREEN_WIDTH,
  screenHeight as SCREEN_HEIGHT,
  IS_IOS,
};
