import {
  FormFieldType,
  DriverFormType,
  CarFormType,
  WarrantyObservationsFormType,
} from './types';

export const DriverFormFields: Record<
  keyof DriverFormType,
  FormFieldType<keyof DriverFormType>
> = {
  hasLicense: {
    label: 'Cuenta con licencia?',
    required: false,
    propertyName: 'hasLicense',
    keyboardType: 'default',
  },
  licenseNumber: {
    label: 'No. licencia',
    required: false,
    propertyName: 'licenseNumber',
    keyboardType: 'default',
  },
  lastName: {
    label: 'Apellido Paterno',
    required: true,
    propertyName: 'lastName',
    keyboardType: 'default',
  },
  surName: {
    label: 'Apellido Materno',
    required: true,
    propertyName: 'surName',
    keyboardType: 'default',
  },
  name: {
    label: 'Nombre',
    required: true,
    propertyName: 'name',
    keyboardType: 'default',
  },
  address: {
    label: 'Dirección',
    required: false,
    propertyName: 'address',
    keyboardType: 'default',
  },
  zipCode: {
    label: 'Código Postal',
    required: false,
    propertyName: 'zipCode',
    keyboardType: 'default',
  },
  suburb: {
    label: 'Colonia',
    required: false,
    propertyName: 'suburb',
    keyboardType: 'default',
  },
  town: {
    label: 'Municipio',
    required: false,
    propertyName: 'town',
    keyboardType: 'default',
  },
  place: {
    label: 'Lugar de la infracción',
    required: true,
    propertyName: 'place',
    keyboardType: 'default',
  },
};

export const CarFormFields: Record<
  keyof CarFormType,
  FormFieldType<keyof CarFormType>
> = {
  plates: {
    propertyName: 'plates',
    required: true,
    label: 'Placas',
    keyboardType: 'default',
  },
  brand: {
    propertyName: 'brand',
    required: true,
    label: 'Marca',
    keyboardType: 'default',
  },
  model: {
    propertyName: 'model',
    required: true,
    label: 'Modelo',
    keyboardType: 'default',
  },
  type: {
    propertyName: 'type',
    required: true,
    label: 'Tipo',
    keyboardType: 'default',
  },
  line: {
    propertyName: 'line',
    required: true,
    label: 'Linea',
    keyboardType: 'default',
  },
  color: {
    propertyName: 'color',
    required: true,
    label: 'Color',
    keyboardType: 'default',
  },
  serialNumber: {
    propertyName: 'serialNumber',
    required: true,
    label: 'No. serie',
    keyboardType: 'default',
  },
  insurancePolicyNumber: {
    propertyName: 'insurancePolicyNumber',
    required: false,
    label: 'No. póliza',
    keyboardType: 'default',
  },
  insuranceCompany: {
    propertyName: 'insuranceCompany',
    required: false,
    label: 'Compañia de seguros',
    keyboardType: 'default',
  },
  environmentalVerification: {
    propertyName: 'environmentalVerification',
    required: false,
    label: 'No. verificacion',
    keyboardType: 'default',
  },
  typeUse: {
    propertyName: 'typeUse',
    required: true,
    label: 'Uso del vehículo',
    keyboardType: 'default',
  },
  craneDrag: {
    propertyName: 'craneDrag',
    required: false,
    label: 'Arrastre',
    keyboardType: 'default',
  },
  craneDragCompany: {
    propertyName: 'craneDragCompany',
    required: false,
    label: 'Empresa de la grua',
    keyboardType: 'default',
  },
  stockNumber: {
    propertyName: 'stockNumber',
    required: false,
    label: 'No. de inventario',
    keyboardType: 'default',
  },
  hasInsuranceCompany: {
    propertyName: 'hasInsuranceCompany',
    required: false,
    label: 'Cuenta con seguro?',
    keyboardType: 'default',
  },
  hastEnvironmentalVerification: {
    propertyName: 'hastEnvironmentalVerification',
    required: false,
    label: 'Cuenta con verificación?',
    keyboardType: 'default',
  },
};

export const WarrantyObservationsFormFields: Record<
  keyof WarrantyObservationsFormType,
  FormFieldType<keyof WarrantyObservationsFormType>
> = {
  citizenObservations: {
    propertyName: 'citizenObservations',
    required: false,
    label: 'Observación del ciudadano',
    keyboardType: 'default',
    multiline: true,
  },
  observations: {
    propertyName: 'observations',
    required: false,
    label: 'Motivo de a multa',
    keyboardType: 'default',
    multiline: true,
  },
  warranty: {
    propertyName: 'warranty',
    required: true,
    label: 'Por lo que se procede a retener como garantía',
    keyboardType: 'default',
  },
  aggravating: {
    propertyName: 'aggravating',
    required: false,
    label: 'Agravante',
    keyboardType: 'default',
    multiline: true,
  },
  levelTrafficTicket: {
    propertyName: 'levelTrafficTicket',
    required: false,
    label: 'Nivel',
    keyboardType: 'default',
    multiline: true,
  },
};
