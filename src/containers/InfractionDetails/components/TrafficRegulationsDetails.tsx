import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, CustomText} from '@/components';
import {TrafficTicketDetailInfo} from '@/constants/types';

interface Props {
  regulations: TrafficTicketDetailInfo[] | null;
}

const TrafficRegulationsDetails = ({regulations}: Props) => {
  const renderArticleItem = (item: TrafficTicketDetailInfo) => (
    <View key={item.articleId} style={styles.item}>
      <CustomText textSize="small" text={item.article} />
      <CustomText
        textSize="small"
        style={styles.description}
        text={item.articleDescription}
      />
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
  },
  item: {paddingVertical: 8},
});
