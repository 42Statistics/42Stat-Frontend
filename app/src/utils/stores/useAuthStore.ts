import { create } from 'zustand';

type Auth = {
  isAuthenticated: boolean;
};

export const useAuthStore = create<Auth>((set) => ({
  isAuthenticated: false,
}));
