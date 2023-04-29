import { create } from "zustand";

type State = {
  table: {
    id: string;
    name: string;
    status: string;
    time: number;
  }

  setTable: (table: State["table"]) => void;
}

export const useStore = create<State>((set, get) => ({
  table: {
    id: "",
    name: "",
    status: "",
    time: 0,
  },

  setTable: (table) => set({ table }),
}))