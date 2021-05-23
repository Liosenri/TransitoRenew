import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {BACKGROUND_GRAY_COLOR, MARGIN_SIZE} from '@/constants';
import {InfractionDetailsScreenRouteProp} from '@/navigation/types';
import {StoreStateType} from '@/store';
import {useDispatch, useSelector} from 'react-redux';
import {fetchInfractionDetailsAction} from '@/store/InfractionDetails/InfractionDetailsActions';
import {
  CarDetails,
  Driverdetails,
  GeneralDetails,
  LocationDetails,
} from '@/containers';
import {ScrollView} from 'react-native-gesture-handler';

type Props = {
  route: InfractionDetailsScreenRouteProp;
  navigation: InfractionDetailsScreenRouteProp;
};

const InfractionDetails = ({
  route: {
    params: {folio},
  },
}: Props) => {
  const {details, loading, errorDescription} = useSelector(
    ({InfractionDetailsReducer}: StoreStateType) => InfractionDetailsReducer,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInfractionDetailsAction(folio));
  }, [dispatch, folio]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {details && (
        <View>
          <GeneralDetails
            aggravating={details.aggravating}
            citicenObservations={details.citizenObservations}
            level={details.levelTrafficTicket}
            observations={details.observations}
            warranty={details.warranty}
          />
          <LocationDetails
            date={details.dateTrafficTicket}
            address={details.placeTrafficTicket}
          />
          <CarDetails carDetails={details.carInfo} />
          <Driverdetails driverDetails={details.driverInfo} />
        </View>
      )}
    </ScrollView>
  );
};

export default InfractionDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_GRAY_COLOR,
    margin: MARGIN_SIZE,
  },
});
