import { create } from 'zustand';
import { ModalCategory } from '@/types/order';

type State = {
  isOpen: boolean;
  triggerModal: ModalCategory;
  setIsOpen: (isOpen: State['isOpen']) => void;
  setTriggerModal: (triggerModal: State['triggerModal']) => void;
}

export const useModalStore = create<State>((set) => ({
  isOpen: false,
  triggerModal: null,
  setIsOpen: (isOpen) => set({ isOpen }),
  setTriggerModal: (triggerModal) => set({ triggerModal }),
}));

export default useModalStore;
