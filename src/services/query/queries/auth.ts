import * as api from '../api/auth';

export const schema = {
  signOut: {
    queryKey: ['signOut'],
    queryFn: api.signOut,
  },
};

export default schema;
