import create from 'zustand'

export const useServer = create((set) => ({
  server: null,
  setServer: (item: any) => set(() => ({ server: item })),
}))
