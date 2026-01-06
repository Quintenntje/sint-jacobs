import { create } from "zustand";

export const useActivePointOfInterestStore = create((set) => ({
  activePointOfInterest: null,
  openInfoPanel: false,
  setOpenInfoPanel: (open) => set({ openInfoPanel: open }),
  setActivePointOfInterest: (pointOfInterest) =>
    set({ activePointOfInterest: pointOfInterest }),
  
  reset: () => set({ activePointOfInterest: null, openInfoPanel: false }),
}));
