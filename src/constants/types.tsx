export interface SceneItemType {
  iconName: string;
  identifier: string;
  title: string;
}

export type KeyboardType = 'number-pad' | 'default';

export type FormFieldType<T> = {
  label: string;
  required: boolean;
  propertyName: T;
  keyboardType: KeyboardType;
  multiline?: boolean;
};

export type DriverFormType = {
  hasLicense: boolean;
  licenseNumber: string;
  lastName: string;
  surName: string;
  name: string;
  address: string;
  suburb: string;
  zipCode: string;
  town: string;
  place: string;
};

export type CarTypeUseType = 'public' | 'oficial' | 'particular';

export const CarTypeUseOptions: {value: CarTypeUseType; label: string}[] = [
  {value: 'oficial', label: 'Oficial'},
  {value: 'public', label: 'Público'},
  {value: 'particular', label: 'Particular'},
];

export type CarFormType = {
  plates: string;
  brand: string;
  model: string;
  type: string;
  line: string;
  color: string;
  serialNumber: string;
  hasInsuranceCompany: boolean;
  insurancePolicyNumber: string;
  insuranceCompany: string;
  hastEnvironmentalVerification: boolean;
  environmentalVerification: string;
  typeUse: CarTypeUseType;
  craneDrag: boolean;
  craneDragCompany: string;
  stockNumber: string;
};

export const WarrantyOptions: {value: string; label: string}[] = [
  {value: '1', label: 'Licencia de conducir'},
  {value: '2', label: 'Tarjeta de circulación'},
  {value: '3', label: 'Unidad'},
];

export const LevelTrafficTicketOptions: {value: string; label: string}[] = [
  {value: 'A', label: 'A'},
  {value: 'B', label: 'B'},
  {value: 'C', label: 'C'},
  {value: 'D', label: 'D'},
];

export type WarrantyObservationsFormType = {
  observations: string;
  citizenObservations: string;
  warranty: string;
  aggravating: boolean;
  levelTrafficTicket: string;
};

export interface ArticleType {
  clave: string;
  articulo: string;
  descripcion: string;
  selected: boolean;
}

export interface ArticlesResponseType {
  error: boolean;
  description: string;
  multas: ArticleType[];
}

export interface CoordinateType {
  latitude: number;
  longitude: number;
}

export interface AddressComponentType {
  long_name: string;
  short_name: string;
  types: string[];
}

export interface ReverseReocodeResultType {
  address_components: AddressComponentType[];
  formatted_address: string;
}

export interface UserCredentialsType {
  dueDate: string;
  email: string;
  name: string;
  password: string;
  token: string;
  uuIdUser: string;
  error?: string;
  description?: string;
}

export interface InfractionType {
  uuIdTicket: string;
  folio: string;
  dateTrafficTicket: string;
  name: string;
  plates: string;
  model: string;
  brand: string;
  color: string;
  serialNumber: string;
  deliveryStatus: string;
  deliveryDate: string;
  isPayment: boolean;
}

export interface CarInfoType {
  brand: string;
  color: string;
  environmentalVerification: string;
  insuranceCompany: string;
  insurancePolicyNumber: string;
  line: string;
  model: string;
  plates: string;
  serialNumber: string;
  type: string;
  typeUse: string;
}

export interface CeroFilasResponseType {
  description: string;
  error: string;
  multa: CeroFilasResponseMultaType;
}

export interface CeroFilasResponseMultaType {
  articulo: string;
  clave: string;
  descripcion: string;
  descuento: string;
  labelDescuento: string;
  subtotal: string;
  total: string;
}

export interface DriverInfoType {
  address: string;
  lastName: string;
  licenseNumber: string;
  name: string;
  suburb: string;
  surName: string;
  town: string;
  zipCode: string;
}

export interface PaymentInfoType {
  idPaymentOdoo: string | null;
  paymentDate: string | null;
  uuIdPayment: string | null;
}

export interface InfractionDetailsType {
  aggravating: boolean;
  carInfo: CarInfoType;
  ceroFilasResponse: CeroFilasResponseType | null;
  craneDrag: boolean;
  craneDragCompany: string;
  dateTrafficTicket: string;
  driverInfo: DriverInfoType;
  folio: string;
  idTicket: string;
  idUser: string;
  lat: number;
  levelTrafficTicket: string;
  long: number;
  observations: string;
  paymentInfo: PaymentInfoType | null;
  placeTrafficTicket: string;
  stockNumber: string | null;
  citizenObservations: string;
  trafficOfficerInfo: string | null;
  trafficTicketDetailInfo: ArticleType[];
  uuIdTicket: string;
  warranty: number;
}
