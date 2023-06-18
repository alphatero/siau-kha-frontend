import { create } from 'zustand';

type State = {
  isOpen: boolean;
}

type Action = {
  setIsOpen: (isOpen: State['isOpen']) => void;
}

const defaultState: State = {
  isOpen: false,
};

export const useModalStore = create<State & Action>((set) => ({
  ...defaultState,

  setIsOpen: (isOpen) => set({ isOpen }),
}));

export default useModalStore;
