import { create } from 'zustand';

interface EmpanadaStore {
  empanadaMode: boolean;
  toggleEmpanadaMode: () => void;
}

export const useEmpanadaStore = create<EmpanadaStore>((set) => ({
  empanadaMode: false,
  toggleEmpanadaMode: () => set((state) => ({ empanadaMode: !state.empanadaMode })),
}));
