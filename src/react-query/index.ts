const queryKeys = {
  posts: 'posts',
  user: 'user',
  roles: 'roles',
} as const;


export type QueryKey = keyof typeof queryKeys;
export default queryKeys;
