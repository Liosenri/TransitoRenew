import React from 'react';
import {FormFieldType} from '@/constants/types';
import {CustomTextInput} from '@/components';
import {StyleProp, TextStyle} from 'react-native';
import {StoreStateType} from '@/store';
import _ from 'lodash';
import {
  DEFAULT_LATITUDE,
  DEFAULT_LONGITUDE,
  TOWN_HALL_ADDRESS,
} from '@/constants';

export function generateFormInput<T>(
  fields: FormFieldType<T>[],
  formStateObject: any,
  onInputChangeText: (text: string, propertyName: T) => void,
  customStyle?: StyleProp<TextStyle>,
) {
  return fields.map(({label, propertyName, multiline}, index) => (
    <CustomTextInput
      multiline={multiline}
      key={`${propertyName}-${index}`}
      label={label}
      value={formStateObject[propertyName]}
      onChangeText={text => onInputChangeText(text, propertyName)}
      placeholder={label}
      style={customStyle}
    />
  ));
}

export function validateFormRequiredValues<T>(
  fields: FormFieldType<T>[],
  compareObject: any,
) {
  return fields
    .map(field => {
      if (!compareObject[field.propertyName].length && field.required) {
        return field.label;
      }
    })
    .filter(Boolean);
}

export const createRequestPayLoadFromState = (
  state: StoreStateType,
  creationDate: Date,
) => {
  let nullifiedJson = JSON.stringify(state, function (key, value) {
    return value === '' ? undefined : value;
  });
  const nullifiedState: StoreStateType = JSON.parse(nullifiedJson);

  const {
    AuthReducer: {credentials},
    DeviceLocationReducer: {region},
    InfractionFormReducer: {carForm, driverForm, warrantyObservationsForm},
    TrafficRegulationsReducer: {articles},
  } = nullifiedState;

  let articlesPayload = articles
    .filter(({selected}) => selected)
    .map(({articulo, clave, descripcion}) => ({
      ArticleId: clave,
      Article: articulo,
      ArticleDescription: descripcion,
      TrafficTicketDetaiId: '',
      TrafficTicketId: '',
    }));

  const body = {
    IdUser: credentials?.uuIdUser,
    DateTrafficTicket: creationDate.toISOString(),
    PlaceTrafficTicket: _.get(driverForm, 'place', TOWN_HALL_ADDRESS),
    Lat: _.get(region, 'latitude', DEFAULT_LATITUDE),
    Long: _.get(region, 'longitude', DEFAULT_LONGITUDE),
    LevelTrafficTicket: _.get(
      warrantyObservationsForm,
      'levelTrafficTicket',
      'A',
    ),
    Aggravating: _.get(warrantyObservationsForm, 'aggravating', false),
    DriverInfo: {
      LicenseNumber: _.get(driverForm, 'licenseNumber', 'Sin licencia'),
      LastName: _.get(driverForm, 'lastName', 'N/A'),
      SurName: _.get(driverForm, 'surName', 'N/A'),
      Name: _.get(driverForm, 'name', 'N/A'),
      Address: _.get(driverForm, 'address', 'N/A'),
      Suburb: _.get(driverForm, 'suburb', 'N/A'),
      ZipCode: _.get(driverForm, 'zipCode', 'N/A'),
      Town: _.get(driverForm, 'town', 'N/A'),
    },
    CarInfo: {
      Plates: _.get(carForm, 'plates', 'Sin placas'),
      Model: _.get(carForm, 'model', 'N/A'),
      Brand: _.get(carForm, 'brand', 'N/A'),
      Type: _.get(carForm, 'type', 'N/A'),
      Line: _.get(carForm, 'line', 'N/A'),
      Color: _.get(carForm, 'color', 'N/A'),
      SerialNumber: _.get(carForm, 'serialNumber', 'N/A'),
      TypeUse: _.get(carForm, 'typeUse', 'N/A'),
      InsurancePolicyNumber: _.get(
        carForm,
        'insurancePolicyNumber',
        'Sin número de póliza',
      ),
      InsuranceCompany: _.get(carForm, 'insuranceCompany', 'Sin asegurar'),
      EnvironmentalVerification: _.get(
        carForm?.environmentalVerification,
        'environmentalVerification',
        'Sin número de verificación',
      ),
    },
    citizenObservations: _.get(
      warrantyObservationsForm,
      'citizenObservations',
      'Sin observaciones',
    ),
    CraneDrag: _.get(carForm, 'craneDrag', false),
    CraneDragCompany: _.get(
      carForm,
      'craneDragCompany',
      'Sin compañia de seguros',
    ),
    StockNumber: _.get(carForm, 'stockNumber', 'N/A'),
    TrafficOfficerInfo: {
      TrafficOfficerUuId: _.get(credentials, 'uuIdUser', '0'),
    },
    TrafficTicketDetailInfo: articlesPayload,
    Warranty: parseInt(_.get(warrantyObservationsForm, 'warranty', 'A'), 10),
    Observations: _.get(
      warrantyObservationsForm,
      'observations',
      'Sin observaciones',
    ),
  };
  return body;
};
