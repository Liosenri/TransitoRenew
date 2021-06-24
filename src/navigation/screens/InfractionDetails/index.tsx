import React, {useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {BACKGROUND_GRAY_COLOR, MARGIN_SIZE} from '@/constants';
import {
  InfractionDetailsNavigationProp,
  InfractionDetailsScreenRouteProp,
} from '@/navigation/types';
import {StoreStateType} from '@/store';
import {useDispatch, useSelector} from 'react-redux';
import {fetchInfractionDetailsAction} from '@/store/InfractionDetails/InfractionDetailsActions';
import {
  CarDetails,
  CraneDragDetails,
  Driverdetails,
  GeneralDetails,
  LocationDetails,
  PaymentDetails,
  TrafficRegulationsDetails,
} from './components';
import {ErrorScreen, FloatingButton, LoadingScreen} from '@/components';
import {useNavigation} from '@react-navigation/native';

type Props = {
  route: InfractionDetailsScreenRouteProp;
  navigation: InfractionDetailsScreenRouteProp;
};

const InfractionDetails = ({
  route: {
    params: {folio},
  },
}: Props) => {
  const {navigate} = useNavigation<InfractionDetailsNavigationProp>();

  const {details, loading, errorDescription} = useSelector(
    ({InfractionDetailsReducer}: StoreStateType) => InfractionDetailsReducer,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInfractionDetailsAction(folio));
  }, [dispatch, folio]);

  if (loading) {
    return <LoadingScreen message="Cargando detalles" />;
  }

  if (errorDescription) {
    return (
      <ErrorScreen
        buttonTitle="Reintentar"
        error={errorDescription}
        buttonAction={() => dispatch(fetchInfractionDetailsAction(folio))}
      />
    );
  }

  return (
    <View>
      <ScrollView>
        {details && (
          <View style={styles.container}>
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
            <TrafficRegulationsDetails
              regulations={details.trafficTicketDetailInfo}
            />
            <CraneDragDetails
              company={details.craneDragCompany}
              stockNumber={details.stockNumber}
              craneDrag={details.craneDrag}
            />
            {details.ceroFilasResponse?.multa && (
              <PaymentDetails paymentInfo={details.ceroFilasResponse.multa} />
            )}
          </View>
        )}
      </ScrollView>
      {details && (
        <FloatingButton
          iconName="printer"
          onPress={() =>
            navigate('PrintInfraction', {infractionDetails: details})
          }
        />
      )}
    </View>
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
