import { create } from "zustand";
import { Theme } from "../interfaces/game-themes.interfarce";

interface ThemeSelected {
  themeSelected: Theme | null;
  selectTheme: (theme: Theme) => void;
}

export const useThemeSelected = create<ThemeSelected>((set) => ({
  themeSelected: null,
  selectTheme: (value: Theme) => {
    set(() => ({ themeSelected: value }));
  },
}));
