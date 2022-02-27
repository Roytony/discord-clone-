import create from 'zustand'

export const useServer = create((set) => ({
  server: null,
  setServer: (id: String, item: {}) =>
    set(() => ({
      server: {
        id,
        item,
      },
    })),
}))

export const useTopics = create((set) => ({
  topis: null,
  setTopics: (id: String, name: String) =>
    set(() => ({
      topis: {
        id,
        name,
      },
    })),
}))
