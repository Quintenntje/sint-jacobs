import { create } from "zustand";

export const useTourPlayingStore = create((set) => ({
  tourPlaying: false,
  startTour: () => set({ tourPlaying: true }),
}));