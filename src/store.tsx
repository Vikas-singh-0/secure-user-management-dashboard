import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    isAuthenticated: false,
    user: null,
  }),
  actions: {
    login() {
      // Implement login logic here
    },
    logout() {
      // Implement logout logic here
    },
  },
});
