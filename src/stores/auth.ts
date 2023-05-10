import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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

const useAuthStore = create(
  persist<AuthStore>(
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
    {
      name: 'auth-storage',
    },
  ),
);

export default useAuthStore;
