import axios, {AxiosError} from 'axios';
import {ArticleType, ArticlesResponseType} from '../constants/types';

export const fetchTrafficRegulationsService = (): Promise<ArticleType[]> => {
  return new Promise((resolve, reject) => {
    axios
      .get('https://cerofilas.veracruzmunicipio.gob.mx/multas/articulos-multa')
      .then(({data}) => {
        const response = data as ArticlesResponseType;
        return response.error
          ? resolve(response.multas)
          : reject(response.description);
      })
      .catch(({response, request, message}: AxiosError) => {
        if (response) {
          reject({code: response.status});
        } else if (request) {
          reject({errorDescription: message});
        } else {
          reject({errorDescription: 'unknown error'});
        }
      });
  });
};
