import { create, StoreApi, UseBoundStore } from "zustand";

export interface ModalState {
  landId: string;
  setLandId: (id: string) => void;
}

export const useModalStore: UseBoundStore<StoreApi<ModalState>> = create((set) => ({
  landId: "",
  setLandId: (id: string) => set((state: ModalState): ModalState => ({ ...state, landId: id })),
}));
