import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {ErrorScreen, InfractionsList, LoadingScreen} from '@/components';
import {StoreStateType} from '@/store';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUserInfractionsAction} from '@/store/Infractions/InfractionsActions';
import {BACKGROUND_GRAY_COLOR} from '@/constants';

const Infractions = () => {
  const {infractions, loading, errorDescription} = useSelector(
    (state: StoreStateType) => state.InfractionsReducer,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!infractions.length) {
      dispatch(fetchUserInfractionsAction());
    }
  }, [dispatch, infractions]);

  if (loading) {
    return <LoadingScreen message="Cargando infracciones" />;
  }

  if (errorDescription) {
    return (
      <ErrorScreen
        buttonTitle="Reintentar"
        error={errorDescription}
        buttonAction={() => dispatch(fetchUserInfractionsAction())}
      />
    );
  }

  return (
    <View style={styles.coontainer}>
      <InfractionsList infractions={infractions} />
    </View>
  );
};

export default Infractions;

const styles = StyleSheet.create({
  coontainer: {flex: 1, backgroundColor: BACKGROUND_GRAY_COLOR},
});
