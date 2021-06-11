import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {ArticleType} from '@/constants/types';
import {textSize} from '@/utils/styles';
import {
  BORDER_COLOR,
  MARGIN_SIZE,
  PRIMARY_COLOR,
  MEDIUM_MARGIN_SIZE,
  BACKGROUNC_COLOR,
} from '@/constants';
import {useDispatch} from 'react-redux';
import {
  addSelectedTrafficRegulationAction,
  removeSelectedTrafficRegulationAction,
} from '@/store/TrafficRegulations/TrafficRegulationsActions';
import {Card} from '@/components';

interface Props {
  regulation: ArticleType;
}

const TrafficRegulationItem = ({
  regulation: {clave, articulo, descripcion, selected},
}: Props) => {
  const dispatch = useDispatch();

  const updateSelectedArticlesList = () =>
    dispatch(
      selected
        ? removeSelectedTrafficRegulationAction(clave)
        : addSelectedTrafficRegulationAction(clave),
    );

  return (
    <Card
      onPress={updateSelectedArticlesList}
      style={[styles.container, selected ? styles.selected : undefined]}>
      <Text style={styles.key}>{clave}</Text>
      <Text style={styles.article}>{articulo}</Text>
      <Text style={styles.descripcion}>{descripcion}</Text>
    </Card>
  );
};

export default React.memo(TrafficRegulationItem);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: MARGIN_SIZE,
    marginVertical: MEDIUM_MARGIN_SIZE,
    borderColor: BORDER_COLOR,
    borderWidth: 2,
    padding: MEDIUM_MARGIN_SIZE,
    borderRadius: 10,
  },
  key: {fontWeight: 'bold', fontSize: textSize.small.fontSize},
  article: {fontSize: textSize.mini.fontSize},
  descripcion: {
    fontSize: textSize.mini.fontSize,
    color: 'gray',
    fontStyle: 'italic',
  },
  selected: {borderColor: PRIMARY_COLOR},
});
