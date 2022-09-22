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
  removeCube: (id) => {
    set((prev) => ({
      cubes: prev.cubes.filter(cube => cube.key !== id)
    }))
  },
  setTexture: (texture) => { 
    set(() => ({
      texture
    }))
  },
  saveWorld: () => { },
  resetWorld: () => { },
}))