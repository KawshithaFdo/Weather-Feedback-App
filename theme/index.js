import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import colors from './colors';
import {moderateScale} from 'react-native-size-matters';

const theme = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  menuContainer: {
    flex: 1,
    width: 300,
    backgroundColor: colors.black,
  },
  flexBox: {
    flex: 1,
  },
  transparent: {backgroundColor: 'transparent'},
  keyboardScreen: {
    flex: 1,
    margin: moderateScale(15),
    backgroundColor: colors.black,
  },
  noKeyboardScreen: {
    flex: 1,
    margin: moderateScale(15),
  },
  whiteColor: {color: '#fff'},
  activeBorderColor: {
    borderColor: colors.white,
  },
  disabledBorderColor: {
    borderColor: colors.white,
  },
  errorBorderColor: {
    borderColor: colors.error,
  },
  activeColor: {
    color: colors.white,
  },
  disabledColor: {
    color: colors.disabledBlack,
  },
  errorColor: {
    color: colors.error,
  },
  activeShadowColor: {
    shadowColor: colors.primary,
  },
  disabledShadowColor: {
    shadowColor: colors.disabledBlack,
  },
  errorShadowColor: {
    shadowColor: colors.error,
  },
  textBox: {fontSize: RFValue(14), textAlign: 'center', color: colors.white},
  mapContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  menuScreen: {
    flex: 1,
    margin: moderateScale(15),
    backgroundColor: colors.gray,
  },
});

export default theme;
