import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
  isDark: boolean;
  toggleTheme: () => void;
}

const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDark: true,
      toggleTheme: () =>
        set((state) => {
          const newIsDark = !state.isDark;
          // Apply class to <html> element for Tailwind darkMode compatibility
          if (typeof document !== "undefined") {
            document.documentElement.classList.toggle("light-mode", !newIsDark);
            document.body.classList.toggle("light-mode", !newIsDark);
          }
          return { isDark: newIsDark };
        }),
    }),
    {
      name: "theme-preference",
      onRehydrateStorage: () => (state) => {
        // Apply persisted theme on page load
        if (state && typeof document !== "undefined") {
          document.documentElement.classList.toggle("light-mode", !state.isDark);
          document.body.classList.toggle("light-mode", !state.isDark);
        }
      },
    }
  )
);

export default useThemeStore;
