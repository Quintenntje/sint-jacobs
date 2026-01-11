import { create } from "zustand";

export const useDayNightStore = create((set) => ({
  isNight: false,
  setIsNight: () => set({ isNight: true }),

  setIsDay: () => set({ isNight: false }),
}));
