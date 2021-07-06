import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {FloatingButton, LoadingScreen, ErrorScreen} from '@/components';
import InfractionsList from './components/InfractionsList';
import {StoreStateType} from '@/store';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUserInfractionsAction} from '@/store/Infractions/InfractionsActions';
import {BACKGROUND_GRAY_COLOR, MARGIN_SIZE} from '@/constants';
import {InfractionScreenNavigationProp} from '@/navigation/types';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Infractions = () => {
  const {infractions, loading, errorDescription} = useSelector(
    (state: StoreStateType) => state.InfractionsReducer,
  );
  const navigation = useNavigation<InfractionScreenNavigationProp>();

  const dispatch = useDispatch();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          onPress={() => dispatch(fetchUserInfractionsAction())}
          name="reload"
          color="white"
          size={24}
          style={styles.reloadButton}
        />
      ),
    });
  }, [navigation, dispatch]);

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
      <FloatingButton onPress={() => navigation.navigate('CreateInfraction')} />
    </View>
  );
};

export default Infractions;

const styles = StyleSheet.create({
  coontainer: {flex: 1, backgroundColor: BACKGROUND_GRAY_COLOR},
  reloadButton: {marginRight: MARGIN_SIZE},
});
