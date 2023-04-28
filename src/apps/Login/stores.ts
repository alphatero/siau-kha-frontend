import { create } from "zustand";

type State = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

export const useStore = create<State>((set, get) => ({
  isLoading: false,

  setIsLoading: (isLoading) => set({ isLoading }),
}));