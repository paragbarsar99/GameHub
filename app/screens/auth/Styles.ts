import {StyleSheet} from 'react-native';
import {hp, wp} from 'styles/Dimensions';
import {lightTheme} from 'styles/FontsAndColor';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(6),
    gap: hp(2),
    paddingTop: hp(3),
  },
  input: {
    height: hp(7),
  },
  heading: {
    fontFamily: lightTheme.fonts.txt_semibold,
    color: lightTheme.colors.btn_black,
    fontSize: wp(6),
  },
  subHeading: {
    fontFamily: lightTheme.fonts.txt_medium,
    color: lightTheme.colors.btn_black,
    fontSize: wp(3.8),
  },
  align_center: {
    alignSelf: 'center',
  },
  googleSign: {
    maxHeight: hp(7),
    backgroundColor: lightTheme.colors.btn_black,
  },
});
