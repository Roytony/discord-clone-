import create from 'zustand'

export const useServer = create((set) => ({
  server: null,
  setServer: (id, item) =>
    set(() => ({
      server: {
        id,
        item,
      },
    })),
}))

export const useTopics = create((set) => ({
  topis: null,
  setTopics: (item: any) => set(() => ({ topis: item })),
}))
