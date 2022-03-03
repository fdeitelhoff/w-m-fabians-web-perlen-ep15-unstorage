import { defineStore } from 'pinia';
import { defineStoreStorage } from 'unstorage-pinia-plugin';
import localStorageDriver from 'unstorage/drivers/localstorage';

export const useLocalStore = defineStore('local', {
  state: () => {
    return { name: '' };
  },
  actions: {
    setName(name = '') {
      this.name = name;
    },
  },
});

defineStoreStorage('local', {
  driver: localStorageDriver(),
});
