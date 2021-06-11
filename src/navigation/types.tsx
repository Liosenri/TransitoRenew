import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {InfractionDetailsType} from '@/constants/types';

export type PostLoginStackParamList = {
  Infractions: undefined;
  InfractionDetails: {folio: string};
  PrintInfraction: {infractionDetails: InfractionDetailsType};
  CreateInfraction: undefined;
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

export type CreateInfractionNavigationProp = StackNavigationProp<
  PostLoginStackParamList,
  'CreateInfraction'
>;

export type PrintInfractionNavigationProp = StackNavigationProp<
  PostLoginStackParamList,
  'PrintInfraction'
>;

export type PrintInfractionRouteProp = RouteProp<
  PostLoginStackParamList,
  'PrintInfraction'
>;
