import {
  CarTypeUseOptions,
  CeroFilasResponseMultaType,
  DriverInfoType,
  InfractionDetailsType,
  UserCredentialsType,
  WarrantyOptions,
} from '@/constants/types';

export const createTicketHeader = (
  ticketDetails: InfractionDetailsType,
): string => {
  const fechaInfraccion = new Date(ticketDetails.dateTrafficTicket);
  var design = `

{H2}{C}{B}BOLETA DE INFRACCION
{C}Folio: ${ticketDetails.folio}
{C}${fechaInfraccion.toLocaleString()}
{C}${ticketDetails.placeTrafficTicket}

 
Con fundamento en lo dispuesto por los artículos 14, 16 párrafo primero, 115  fracciones I,II, III inciso h) de la Constitución Política de los Estados Unidos Mexicanos;  71 fracción I y XI, inciso h) de la Constitución Política para el Estado de Veracruz;  35 fracción II, XIV y XXV, inciso h) y j) de la Ley Orgánica del Municipio Libre;  1, 2, 3 fracciones IV, VII y XV,19 fracción II, III, V, IX y X, 146, 149, 150, 151, 152 y 155 de la Ley de Tránsito y Seguridad Vial para el Estado de Veracruz de Ignacio de la Llave;  7º del Código de Procedimientos Administrativos para el Estado de Veracruz de Ignacio de la Llave; 48, fracción IV, inciso u), 75 fracciones I, II, VI, VIII, X y XIV del Bando de Gobierno para el Municipio de Veracruz; 1, 13, fracción VII, 50 fracción VII, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196 y 197 del Reglamento de Tránsito del Municipio de Veracruz, Veracruz de Ignacio de la Llave. 
------------------------------------------
`;
  return design.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

export const createDriverSection = (driverDetails: DriverInfoType): string => {
  var design = `
{C}{B}DATOS DEL CONDUCTOR
{B}Nombre Completo:
${driverDetails.name} ${driverDetails.lastName} ${driverDetails.surName}
{B}Direccion:
${driverDetails.address}
{B}Colonia:
${driverDetails.suburb}
{B}Codigo Postal:
${driverDetails.zipCode}
{B}Municipio:
${driverDetails.town}
{B}No. Licencia/Permiso:
${driverDetails.licenseNumber}
------------------------------------------`;
  return design.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

export const createVehicleSection = (
  ticketDetails: InfractionDetailsType,
): string => {
  const typeUseValue = CarTypeUseOptions.filter(
    t => t.value === ticketDetails.carInfo.typeUse.toLowerCase(),
  ).pop();

  var design = `
{C}{B}DATOS DEL VEHICULO
{B}Marca:{<>}Modelo:
${ticketDetails.carInfo.brand}{<>}${ticketDetails.carInfo.model}
{B}Tipo:{<>}Linea:
${ticketDetails.carInfo.type}{<>}${ticketDetails.carInfo.line}
{B}Color:{<>}Placas:
${ticketDetails.carInfo.color}{<>}${ticketDetails.carInfo.plates}
{B}No. serie del vehiculo:
${ticketDetails.carInfo.serialNumber}
{B}Compania aseguradora:
${ticketDetails.carInfo.insuranceCompany}
{B}Tipo de uso:{<>}No. de poliza:
${typeUseValue?.label}{<>}${ticketDetails.carInfo.insurancePolicyNumber}
{B}Verificación:{<>}Arrastre:
${ticketDetails.carInfo.environmentalVerification}{<>}${
    ticketDetails.craneDrag ? 'SI' : 'NO'
  }
{B}Empresa Grua:
${ticketDetails.craneDragCompany}
------------------------------------------`;
  return design.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

export const createInfractionDetailSection = (
  ticketDetails: InfractionDetailsType,
): string => {
  const warrantyDescription = WarrantyOptions.filter(
    w => w.value === ticketDetails.warranty.toString(),
  ).pop()?.label;
  var design = `
{C}{B}FALTA COMETIDA
{B}Nivel:{<>}Agravante:
${ticketDetails.levelTrafficTicket}{<>}${
    ticketDetails.aggravating ? 'SI' : 'NO'
  }
    
{B}Articulos;
${
  ticketDetails.trafficTicketDetailInfo
    ? ticketDetails.trafficTicketDetailInfo
        .map(item => {
          return `${item.article}
${item.articleDescription}
`;
        })
        .join('')
    : 'Sin articulos'
}




       
{B}Observaciones del transito:
${ticketDetails.observations}
{B}Observaciones del ciudadano:
${ticketDetails.citizenObservations}
{B}Se procede a retener como garantia su:
${warrantyDescription}
------------------------------------------`;
  return design.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

export const createPaymentSection = (
  multa: CeroFilasResponseMultaType,
  credentials: UserCredentialsType,
): string => {
  var design = `
{B}{C}CANTIDAD A PAGAR
Subtotal:{<>}${multa.subtotal}
Descuento:{<>}${multa.descuento}
{R}_____________
Total:{<>}${multa.total}
------------------------------------------
{B}{C}ID DE USUARIO
{C}${credentials.name}`;
  return design.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

export const creatrQRSection = (folio: string) => {
  var design = `
{C}{QR[Where are the aliens?]}
{B}{C}PAGA CON CODI
  
 
{C}{QR[https://tesoreriavirtual.veracruzmunicipio.gob.mx/2021/infraccion/folio/?folio=${folio}]}
{B}{C}PAGA TU MULTA
------------------------------------------
`;
  return design;
};

export const driverSignatureDesign = `
{C}_________________________
{C}Infractor
{C}Nombre y firma 
------------------------------------------
`;

export const disclosureDesign = `{C}De acuerdo con el artículo 187 del Reglamento de Tránsito del Municipio de Veracruz, Estado de Veracruz de Ignacio de la Llave, el pago de la multa dentro de los cinco días siguientes a su imposición, dará lugar a un descuento correspondiente al 50% de su total. (Cuando un conductor maneje a velocidad temeraria o en segunda o tercera etapa de intoxicación etílica, o en estado de ebriedad, bajo los influjos de drogas, estupefacientes o psicotrópicos u otras sustancias que produzcan efectos similares, no se aplicará descuento alguno en la multa).
 
{C}La presente boleta de infracción, ampara la falta del documento retenido en garantía por cinco días hábiles.
  
{C}Con fundamento en los dispuesto por los artículos 208, 209, 210, 211, 212, 213, 214 y 215 del Reglamento de Tránsito del Municipio de Veracruz, Estado de Veracruz de Ignacio De la Llave, cuenta con un término de tres días hábiles contados a partir del día hábil siguiente a aquel en que surta efectos la notificación del mismo, para interponer el recurso de reconsideración en contra de la sanción impuesta en la presente infracción. Dicho recurso deberá interponerlo ante la Dirección de Tránsito y Vialidad del Municipio de Veracruz, ubicada en calle José Montesinos número 320, Col. Centro. Veracruz, Ver. C.P. 91700; o bien, promover el juicio contencioso ante el Tribunal Estatal de Justicia Administrati- va de Veracruz, de conformidad con lo dispuesto por los artículos 278, y 279 del Código Número 14 de Procedimietos Administrativos para el Estado de Veracruz de Ignacio De la Llave.
 
{C}El H. Ayuntamiento Constitucional de Veracruz, Ver, le informa que en términos de lo dispuesto por los artículos 1, 2, 3, y 14 de la Ley Número 581 para la Tutela de Datos Personales en el Estado de Veracruz de Ignacio De la Llave, los datos personales recabados en la presente boleta de infracción, serán protegidos, incorporados y tratados en el sistema de datos personales correspondiente.`;
