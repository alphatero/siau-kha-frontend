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
    name: "A1",
    status: "閒置",
    time: 0,
  },

  setTable: (table) => set({ table }),
}))