import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MEDIUM_MARGIN_SIZE} from '@/constants';
import {textSize} from '@/utils/styles';

interface Props {
  detail?: string;
  title: string;
}

const DetailRow = ({title, detail}: Props) => {
  if (!detail) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{detail}</Text>
    </View>
  );
};

export default DetailRow;

const styles = StyleSheet.create({
  text: {
    fontSize: textSize.xmini.fontSize,
    color: 'gray',
    fontStyle: 'italic',
  },
  container: {
    marginTop: MEDIUM_MARGIN_SIZE / 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
