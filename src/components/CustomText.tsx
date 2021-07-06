import React from 'react';
import {View, Text, TextStyle, StyleSheet} from 'react-native';
import {scale} from '@/utils/ui';

interface Props {
  style?: TextStyle | TextStyle[];
  textType?: 'regular' | 'bold' | 'light';
  textSize?: 'small' | 'medium' | 'large';
  text: string | number;
}

const CustomText = ({
  style,
  textType = 'regular',
  textSize = 'medium',
  text,
}: Props) => {
  let textStyle = {...styles[textType], ...styles[textSize]};
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  return (
    <View>
      <Text style={[textStyle, {...passedStyles}]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  regular: {
    fontFamily: 'NeoSansPro-Regular',
  },
  bold: {
    fontFamily: 'NeoSansPro-Bold',
  },
  light: {
    fontFamily: 'NeoSansPro-Light',
  },
  small: {
    fontSize: scale(12),
  },
  medium: {
    fontSize: scale(15),
  },
  large: {
    fontSize: scale(17),
  },
});
export default CustomText;
