import { create } from "zustand";

type State = {
  user: {
    email: string;
    password: string;
  }
  setUser: (user: State["user"]) => void;
};

export const useStore = create<State>((set, get) => ({
  user: {
    email: "",
    password: "",
  },
  setUser: (user) => set({ user }),
}));