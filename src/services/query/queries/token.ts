import * as api from '../api/token';

export const schema = {
  checkToken: (token: string) => ({
    queryKey: ['token', token],
    queryFn: () => api.checkToken(token),
  }),
};

export default schema;
