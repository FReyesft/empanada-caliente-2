import { create } from 'zustand';

interface EmpanadaStore {
  empanadaMode: boolean;
  toggleEmpanadaMode: () => void;
}

export const useEmpanadaStore = create<EmpanadaStore>((set) => ({
  empanadaMode: false,
  toggleEmpanadaMode: () => set((state) => {
    console.log('Estado anterior:', state.empanadaMode);
    const newState = { empanadaMode: !state.empanadaMode };
    console.log('Nuevo estado:', newState.empanadaMode);
    return newState;
  }),
}));
