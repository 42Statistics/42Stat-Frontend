import { create } from 'zustand';

type Session = {
  isNavBarOpen: boolean;
  setIsNavBarOpen: (isNavBarOpen: boolean) => void;
  toggleIsNavBarOpen: () => void;
};

export const useSessionStore = create<Session>((set, get) => ({
  isNavBarOpen: false,
  setIsNavBarOpen: (isNavBarOpen: boolean) => set(() => ({ isNavBarOpen })),
  toggleIsNavBarOpen: () => get().setIsNavBarOpen(!get().isNavBarOpen),
}));
