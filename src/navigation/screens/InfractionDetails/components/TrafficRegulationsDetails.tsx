import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Card} from '@/components';
import {TrafficTicketDetailInfo} from '@/constants/types';

interface Props {
  regulations?: TrafficTicketDetailInfo[];
}

const TrafficRegulationsDetails = ({regulations}: Props) => {
  const renderArticleItem = (item: TrafficTicketDetailInfo) => (
    <View key={item.articleId} style={styles.item}>
      <Text>{item.article}</Text>
      <Text style={styles.description}>{item.articleDescription}</Text>
    </View>
  );

  return (
    <Card style={styles.container} title="Artículos">
      {regulations && regulations.map(item => renderArticleItem(item))}
    </Card>
  );
};

export default TrafficRegulationsDetails;

const styles = StyleSheet.create({
  container: {marginBottom: 16},
  description: {
    flex: 1,
    color: 'gray',
    fontStyle: 'italic',
  },
  item: {paddingVertical: 8},
});
