import Atom, { useAtom } from './Atom';

const store = Atom({
  userName: '',
  peer: null,
});

export const useStore = useAtom(store);

export const handleName = (name) => {
  store.set((prev) => (prev.userName = name));
};

export const handlePeer = (peer) => {
  store.set((prev) => (prev.peer = peer));
};
