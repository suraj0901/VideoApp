import { useSyncExternalStore } from 'react';

export default function (initialValue) {
  const subscribers = new Set();
  const get = () => initialValue;
  const set = (newValue) => {
    if (typeof newValue === 'function')
      initialValue = newValue(structuredClone(newValue));
    else initialValue = newValue;
    subscribers.forEach((subscriber) => subscriber());
  };
  const subscribe = (subscriber) => subscribers.add(subscriber);
  return { get, set, subscribe };
}

export const useAtom = (atom) => useSyncExternalStore(atom.subscribe, atom.get);
