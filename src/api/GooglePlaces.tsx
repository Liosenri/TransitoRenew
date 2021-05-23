import axios, {AxiosError} from 'axios';

import {CoordinateType, ReverseReocodeResultType} from '@/constants/types';

export const googlePlacesReverseCoordinate = (
  coordinate: CoordinateType,
): Promise<ReverseReocodeResultType[]> => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinate.latitude},${coordinate.longitude}&languaje=es&region=mx&key=AIzaSyBaW7z5jUvarwdyKA7iawqMr5nQ3d_3v04`,
      )
      .then(({data}) => {
        const {error_message, results} = data;
        error_message
          ? reject(error_message)
          : resolve(results as ReverseReocodeResultType[]);
      })
      .catch(({message}: AxiosError) => reject(message));
  });
};
