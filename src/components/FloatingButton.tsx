import React from 'react';
import {TouchableOpacity, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {MARGIN_SIZE, PRIMARY_COLOR} from '../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {} from 'react-native-gesture-handler';

interface Props {
  iconName?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const FloatingButton = ({iconName = 'plus', onPress, style}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Icon name={iconName} color="white" size={25} />
    </TouchableOpacity>
  );
};

export default FloatingButton;
const styles = StyleSheet.create({
  container: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: PRIMARY_COLOR,
    position: 'absolute',
    bottom: MARGIN_SIZE,
    right: MARGIN_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
