import axios, {AxiosError} from 'axios';

import {UserCredentialsType} from '@/constants/types';

export const signinUsingEmailPassword = (
  email: string,
  password: string,
): Promise<UserCredentialsType> => {
  return new Promise((resolve, reject) => {
    axios
      .get('http://201.116.64.13:8091/api/v1/login/login', {
        params: {email, password},
      })
      .then(({data}) => {
        const {error, description} = data as UserCredentialsType;
        if (error) {
          reject(description);
        } else {
          resolve(data);
        }
      })
      .catch(({message}: AxiosError) => reject(message));
  });
};
