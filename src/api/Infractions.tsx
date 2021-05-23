import axios, {AxiosError} from 'axios';
import {InfractionDetailsType, InfractionType} from '@/constants/types';

export const fetchInfractions = (
  bearerToken: string,
  uuIdUser: string,
): Promise<InfractionType[]> => {
  return new Promise((resolve, reject) => {
    axios
      .get('http://201.116.64.13:8091/api/v1/TrafficTicket/Ticket', {
        params: {pUser: uuIdUser},
        headers: {Authorization: `Bearer ${bearerToken}`},
      })
      .then(({data}) => {
        resolve(data as [InfractionType]);
      })
      .catch(({response, request, message}: AxiosError) => {
        if (response) {
          reject(response.status);
        } else if (request) {
          reject(message);
        } else {
          reject('unknown error');
        }
      });
  });
};

export const fetchInfractionDetails = (
  bearerToken: string,
  folio: any,
): Promise<InfractionDetailsType> =>
  new Promise((resolve, reject) => {
    axios
      .post(
        'http://201.116.64.13:8091/api/v1/TrafficTicket/TrtafficTicketSearch',
        {folio},
        {headers: {Authorization: `Bearer ${bearerToken}`}},
      )
      .then(({data}) => {
        resolve(data as InfractionDetailsType);
      })
      .catch(({response, request, message}: AxiosError) => {
        if (response) {
          reject(response.status);
        } else if (request) {
          reject(message);
        } else {
          reject('unknown error');
        }
      });
  });
