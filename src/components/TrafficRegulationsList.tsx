import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet, View} from 'react-native';
import {CustomSearchBar, TrafficRegulationItem} from '@/components';
import {ArticleType} from '@/constants/types';
import {BACKGROUNC_COLOR} from '../constants';

interface Props {
  regulations: ArticleType[];
}

const TrafficRegulationsList = ({regulations}: Props) => {
  const renderItem = ({item}: ListRenderItemInfo<ArticleType>) => (
    <TrafficRegulationItem regulation={item} />
  );

  const [query, setQuery] = useState('');
  const [filteredRegulations, setFilteredRegulations] = useState<ArticleType[]>(
    [],
  );

  useEffect(() => {
    if (regulations) {
      const result = regulations?.filter(regulation => {
        const containsDescription = regulation.descripcion
          .toLowerCase()
          .includes(query.toLocaleLowerCase());

        const containsArticleKey = regulation.clave
          .toLowerCase()
          .includes(query.toLocaleLowerCase());

        return containsArticleKey || containsDescription;
      });
      setFilteredRegulations(result);
    }
  }, [query, regulations]);

  return (
    <View style={styles.container}>
      <CustomSearchBar
        value={query}
        onChangeText={setQuery}
        placeholder={'Buscar un artículo por clave o descripción'}
      />
      <FlatList
        style={styles.container}
        data={filteredRegulations.length ? filteredRegulations : regulations}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.clave}${index}`}
      />
    </View>
  );
};

export default TrafficRegulationsList;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: BACKGROUNC_COLOR},
});
