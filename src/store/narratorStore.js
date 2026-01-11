import { create } from "zustand";

export const useNarratorStore = create((set) => ({
  isNarrator: false,
  setIsNarrator: (isNarrator) => set({ isNarrator: isNarrator }),
  toggleNarrator: () => set((state) => ({ isNarrator: !state.isNarrator })),
}));
