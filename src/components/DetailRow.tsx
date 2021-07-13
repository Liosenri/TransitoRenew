import React from 'react';
import {View, StyleSheet} from 'react-native';
import {MEDIUM_MARGIN_SIZE} from '@/constants';
import {CustomText} from '@/components/';

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
      <CustomText textSize="small" style={styles.text} text={title} />
      <View style={styles.detailsContainer}>
        <CustomText textSize="small" style={styles.text} text={detail} />
      </View>
    </View>
  );
};

export default DetailRow;

const styles = StyleSheet.create({
  text: {
    color: 'gray',
  },
  container: {
    marginTop: MEDIUM_MARGIN_SIZE / 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
