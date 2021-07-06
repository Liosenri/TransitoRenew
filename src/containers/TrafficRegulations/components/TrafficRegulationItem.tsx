import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {ArticleType} from '@/constants/types';
import {textSize} from '@/utils/styles';
import {
  BORDER_COLOR,
  MARGIN_SIZE,
  PRIMARY_COLOR,
  MEDIUM_MARGIN_SIZE,
} from '@/constants';
import {useDispatch} from 'react-redux';
import {
  addSelectedTrafficRegulationAction,
  removeSelectedTrafficRegulationAction,
} from '@/store/TrafficRegulations/TrafficRegulationsActions';
import {Card, CustomText} from '@/components';

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
      <CustomText textType="bold" text={clave} />
      <CustomText textSize="small" text={articulo} />
      <CustomText textSize="small" textType="light" text={descripcion} />
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
  selected: {borderColor: PRIMARY_COLOR},
});
