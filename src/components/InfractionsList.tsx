import React from 'react';
import {FlatList, StyleSheet, ListRenderItemInfo} from 'react-native';
import {InfractionType} from '@/constants/types';
import {InfractionItem} from '@/components';
import {MARGIN_SIZE} from '@/constants';

interface Props {
  infractions: InfractionType[];
}

const InfractionsList = ({infractions}: Props) => {
  const renderItem = ({item}: ListRenderItemInfo<InfractionType>) => (
    <InfractionItem infraction={item} />
  );

  return (
    <FlatList
      data={infractions}
      renderItem={renderItem}
      keyExtractor={(item, index) => `${item.folio}${index}`}
      contentContainerStyle={styles.list}
    />
  );
};

export default InfractionsList;

const styles = StyleSheet.create({list: {margin: MARGIN_SIZE}});
