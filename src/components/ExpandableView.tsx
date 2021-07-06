import React from 'react';
import {
  View,
  Switch,
  StyleProp,
  ViewStyle,
  StyleSheet,
  LayoutAnimation,
} from 'react-native';
import {BORDER_COLOR, MEDIUM_MARGIN_SIZE} from '@/constants';
import {Card} from '@/components';
import CustomText from './CustomText';

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
    <Card style={[style]}>
      <View style={styles.labelContainer}>
        <CustomText textType="bold" text={title} />
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
    </Card>
  );
};

export default ExpandableView;

const styles = StyleSheet.create({
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
