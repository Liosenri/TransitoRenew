import React, {useState} from 'react';
import {View, Text, Switch, StyleProp, ViewStyle} from 'react-native';

import styles from './styles';

interface Props {
  title: string;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Index = ({title, children, style}: Props) => {
  const [on, setOn] = useState(false);

  const renderInputs = () => {
    if (!on) {
      return null;
    }
    return children;
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{title}</Text>
        <Switch value={on} onValueChange={setOn} />
      </View>
      {renderInputs()}
    </View>
  );
};

export default Index;
