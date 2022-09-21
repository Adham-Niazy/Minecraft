import create from "zustand";
import { nanoid } from 'nanoid'

export const useStore = create((set) => ({
  texture: "dirt",
  cubes: [],
  addCube: (x, y, z) => {
    set((prev) => ({
      cubes: [
        ...prev.cubes,
        {
          key: nanoid(),
          position: [x, y, z],
          texture: prev.texture
        }
      ]
    }))
  },
  removeCube: () => { },
  setTexture: () => { },
  saveWorld: () => { },
  resetWorld: () => { },
}))