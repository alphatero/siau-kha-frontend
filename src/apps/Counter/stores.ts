import { create } from 'zustand';

type State = {
  triggerModal: string | null;
}

type Action = {
  setTriggerModal: (triggerModal: State['triggerModal']) => void;
}

const defaultState: State = {
  triggerModal: null,
};

export const useStore = create<State & Action>((set, get) => ({
  ...defaultState,

  setTriggerModal: (triggerModal) => {
    set({ triggerModal });
  },

}));

export default useStore;
