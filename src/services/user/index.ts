import { Profile } from '@/@types/profile';
import api from '../api';
import endpoint from '../endpoint';
import { AxiosResponse } from 'axios'

export const getUser = (): Promise<AxiosResponse<Profile>> => api.get(endpoint.user);

export const updateUser = (params: Profile): Promise<AxiosResponse<Profile>> => api.put(endpoint.user, {
  ...params,
});
