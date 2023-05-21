import { create } from 'zustand';

type State = {
  isLoading: boolean;
  user: {
    name: string;
    role: string;
  };
  token: string;
}

type Action = {
  logout: () => void;
  setUser: (user: { name: string; role: string }) => void;
  setToken: (token: string) => void;
}

const defaultState: State = {
  user: {
    name: '',
    role: '',
  },
  token: '',
  isLoading: true,
};

const useAuthStore = create<State & Action>((set) => ({
  ...defaultState,

  setUser: (user) => set(() => ({ user })),

  setToken: (token) => set(() => ({ token })),

  logout: () => {
    set(() => ({ user: { name: '', role: '' }, token: '' }));
  },
}));

export default useAuthStore;
