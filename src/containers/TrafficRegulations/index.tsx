import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {NextBackButtonsView, LoadingScreen, ErrorScreen} from '@/components';
import TrafficRegulationsList from './components/TrafficRegulationsList';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTrafficRegulations} from '@/store/TrafficRegulations/TrafficRegulationsActions';
import {StoreStateType} from '@/store';
import {createErrorAlert} from '@/utils/Alerts';

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

  const handleOnContinueButtonPress = () => {
    const selectedArticles = articles.filter(({selected}) => selected);
    selectedArticles.length
      ? onContinue()
      : createErrorAlert(
          'Error',
          'Para continuar debe seleccionar al menos un artículo',
        );
  };

  if (loading) {
    return <LoadingScreen message="Cargando Artículos" />;
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
      <NextBackButtonsView
        onBack={onBack}
        onContinue={handleOnContinueButtonPress}
      />
    </View>
  );
};

export default ArticlesList;

const styles = StyleSheet.create({
  container: {flex: 1},
});
