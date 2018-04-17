import { configureStore } from './configureStore';

let store = null;

export default function getStore() {
  if (!store) {
    store = configureStore();
  }

  return store;
}
