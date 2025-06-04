import { create } from "zustand";
import { devtools } from "zustand/middleware";

type State = {
  fullName: string;
  email: string;
  headerHeight: number;
  user: {
    id: number;
    username: string;
    email: string;
    role: string;
    profile_url: string | null;
  } | null;
};

type Action = {
  updateUser: (user: State["user"]) => void;
  updateFullName: (fullName: State["fullName"]) => void;
  updateHeaderHeight: (headerHeight: State["headerHeight"]) => void;
};

export const useGlobalStore = create<State & Action>()(
  devtools((set) => ({
    headerHeight: 0,
    fullName: "",
    email: "",
    user: null,
    // user: {
    //   id: 0,
    //   username: "",
    //   email: "",
    //   role: "",
    //   profile_url: "",
    // },

    updateUser: (user) => set(() => ({ user })),
    updateFullName: (fullName) => set({ fullName }),
    updateHeaderHeight: (headerHeight) => set({ headerHeight }),
  }))
);
