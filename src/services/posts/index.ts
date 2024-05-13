import { Post } from '@/@types/post';
import api from '../api';
import endpoint from '../endpoint';
import { AxiosResponse } from 'axios'

export const getPosts = (): Promise<AxiosResponse<Post[]>> => api.get(`${endpoint.posts}/?_sort=publishedAt&_order=desc`);

export const createPost = (params: Post): Promise<AxiosResponse<Post>> => api.post(endpoint.posts, {
  ...params
});

export const deletePost = (postId: number): Promise<AxiosResponse<unknown>> => api.delete(`${endpoint.posts}/${postId}`);
