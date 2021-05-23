import React from 'react';
import {
  View,
  Text,
  Switch,
  StyleProp,
  ViewStyle,
  StyleSheet,
  LayoutAnimation,
} from 'react-native';
import {BORDER_COLOR, MEDIUM_MARGIN_SIZE} from '@/constants';
import {textSize} from '@/utils/styles';

interface Props {
  title: string;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onExpand: (expanded: boolean) => void;
  expanded: boolean;
}

const ExpandableView = ({
  title,
  children,
  style,
  expanded,
  onExpand,
}: Props) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{title}</Text>
        <Switch
          value={expanded}
          onValueChange={value => {
            LayoutAnimation.configureNext(
              LayoutAnimation.Presets.easeInEaseOut,
            );
            onExpand(value);
          }}
        />
      </View>
      {expanded && children}
    </View>
  );
};

export default ExpandableView;

const styles = StyleSheet.create({
  label: {
    fontSize: textSize.small.fontSize,
    fontWeight: 'bold',
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 5,
    paddingVertical: MEDIUM_MARGIN_SIZE,
  },
});
