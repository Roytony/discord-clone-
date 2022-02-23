import create from 'zustand'

export const useServer = create((set) => ({
  server: {},
  setServer: (item: any) => set(() => ({ server: item })),
}))
