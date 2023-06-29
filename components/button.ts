import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {moderateScale, scale} from 'react-native-size-matters';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';

import {ButtonProps} from 'types/components';
import {useAppSelector} from 'store/hooks';
import {formSelector} from 'store/slices/formsSlice';
import colors from 'theme/colors';

import RightArrow from 'assets/arrow-right.svg';

import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {
  ImageSourcePropType,
  StyleProp,
  TextStyle,
  ViewStyle,
  ImageStyle,
} from 'react-native';

export interface ButtonProps {
  variant?: 'contained' | 'outlined';
  label?: string;
  onPress?: () => void;
  labelStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  icon?: React.FC<SvgProps>;
  iconStyle?: StyleProp<ViewStyle>;
  form?: string;
  fields?: string[];
  disabled?: boolean;
  rightArrow?: boolean;
  rightValue?: string | number;
}

const Button = ({
  variant = 'contained',
  form = '',
  fields,
  label,
  style,
  icon,
  labelStyle,
  iconStyle,
  disabled,
  onPress,
  rightArrow,
  rightValue,
}: ButtonProps) => {
  const formData = useAppSelector(formSelector)?.[form];
  let errors =
    fields &&
    (fields?.filter(field => formData?.data?.[field]?.err)?.length ?? 1) > 0;

  const buttonStyle = [
    styles.button,
    disabled || errors
      ? styles.disabled
      : variant === 'contained'
      ? styles.containedButton
      : styles.outlinedButton,
    style,
  ];
  const defaultLabelStyle = [
    styles.label,
    variant === 'contained' ? styles.containedLabel : styles.outlinedLabel,
    labelStyle,
  ];

  const Icon = icon;

  const handleOnPress = () => {
    if (!disabled && !errors) {
      onPress?.();
    }
  };

  const activeOpacity = disabled || errors ? 1 : 0.9;

  return (
    <TouchableOpacity
      style={buttonStyle}
      activeOpacity={activeOpacity}
      onPress={handleOnPress}>
      {!rightArrow && (
        <>
          {Icon && (
            <Icon width={scale(20)} height={scale(20)} style={iconStyle} />
          )}
          <Text style={defaultLabelStyle}>{label}</Text>
        </>
      )}
      {rightArrow && (
        <>
          <View style={styles.side}>
            {Icon && (
              <Icon width={scale(20)} height={scale(20)} style={iconStyle} />
            )}
            <Text style={defaultLabelStyle}>{label}</Text>
          </View>
          <View style={styles.side}>
            {rightValue && (
              <View style={styles.rightValueWrapper}>
                <Text style={defaultLabelStyle}>{rightValue}</Text>
              </View>
            )}
            {rightArrow && <RightArrow width={6} height={10} />}
          </View>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  disabled: {
    backgroundColor: colors.disabledPrimary,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: scale(48),
    borderRadius: moderateScale(10),
    marginVertical: moderateScale(8),
  },
  label: {
    fontSize: RFValue(20),
    fontWeight: '600',
  },
  containedButton: {
    backgroundColor: colors.primary,
  },

  containedLabel: {
    color: colors.black,
  },
  outlinedButton: {
    backgroundColor: colors.secondary,
    borderWidth: moderateScale(1.5),
    borderColor: colors.primary,
  },
  outlinedLabel: {
    color: colors.primary,
  },
  side: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(13),
  },
  rightValueWrapper: {
    backgroundColor: colors.gray,
    padding: moderateScale(5),
    borderRadius: moderateScale(10),
    minWidth: moderateScale(39),
    alignItems: 'center',
  },
});

export default Button;
