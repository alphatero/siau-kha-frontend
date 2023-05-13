import { create } from 'zustand';

type State = {
  isOpen: boolean;
  setIsOpen: (isOpen: State['isOpen']) => void;
}

export const useModalStore = create<State>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));

export default useModalStore;
