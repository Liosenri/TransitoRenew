import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  NextBackButtonsView,
  TrafficRegulationsList,
  LoadingScreen,
  ErrorScreen,
} from '@/components';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTrafficRegulations} from '@/store/TrafficRegulations/TrafficRegulationsActions';
import {StoreStateType} from '@/store';

interface Props {
  onContinue: () => void;
  onBack: () => void;
}

const ArticlesList = ({onBack, onContinue}: Props) => {
  const {articles, error, loading} = useSelector(
    (state: StoreStateType) => state.TrafficRegulationsReducer,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!articles.length) {
      dispatch(fetchTrafficRegulations());
    }
  }, [dispatch, articles]);

  if (loading) {
    return <LoadingScreen message="Cargando Articulos" />;
  }

  if (error) {
    return (
      <ErrorScreen
        error={error}
        buttonAction={() => dispatch(fetchTrafficRegulations())}
        buttonTitle="Recargar"
      />
    );
  }

  return (
    <View style={styles.container}>
      <TrafficRegulationsList regulations={articles} />
      <NextBackButtonsView onBack={onBack} onContinue={onContinue} />
    </View>
  );
};

export default ArticlesList;

const styles = StyleSheet.create({
  container: {flex: 1},
});
