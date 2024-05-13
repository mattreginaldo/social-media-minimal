import { Roles } from '@/@types/role';
import api from '../api';
import endpoint from '../endpoint';
import { AxiosResponse } from 'axios'

export const getRoles = (): Promise<AxiosResponse<Roles>> => api.get(endpoint.roles);
