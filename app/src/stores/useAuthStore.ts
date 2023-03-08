import { create } from 'zustand';

type useAuthStoreProps = {
  isAuthenticated: boolean;
};

export const useAuthStore = create<useAuthStoreProps>((set) => ({
  isAuthenticated: false,
}));
