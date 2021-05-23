import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type PostLoginStackParamList = {
  Infractions: undefined;
  InfractionDetails: {folio: string};
};

export type InfractionScreenNavigationProp = StackNavigationProp<
  PostLoginStackParamList,
  'Infractions'
>;

export type InfractionDetailsScreenRouteProp = RouteProp<
  PostLoginStackParamList,
  'InfractionDetails'
>;

export type InfractionDetailsNavigationProp = StackNavigationProp<
  PostLoginStackParamList,
  'Infractions'
>;
