import { create } from "zustand";

interface State {
  userId: string | undefined;
}

interface Actions {
  setUserId: (userId: string) => void;
}

const userIdInitialState: State = {
  userId: undefined,
};

export const useUserIdStore = create<State & Actions>()((set) => ({
  ...userIdInitialState,

  setUserId: (userId: string) => {
    set({ userId });
  },
}));
