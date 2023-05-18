import { create } from 'zustand';

type AuthStore = {
  isLoading: boolean;
  user: {
    name: string;
    role: string;
  };
  token: string;
  logout: () => void;
  setUser: (user: { name: string; role: string }) => void;
  setToken: (token: string) => void;
}

const useAuthStore = create<AuthStore>(

  (set) => ({
    user: {
      name: '',
      role: '',
    },
    token: '',
    isLoading: true,

    setUser: (user) => set(() => ({ user })),

    setToken: (token) => set(() => ({ token })),

    logout: () => {
      set(() => ({ user: { name: '', role: '' }, token: '' }));
    },
  }),

);

export default useAuthStore;
