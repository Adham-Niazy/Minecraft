import create from "zustand";
import { nanoid } from 'nanoid'

function getLocalStorage(key) {
  return JSON.parse(window.localStorage.getItem(key));
}

function setLocalStorage(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))

}

export const useStore = create((set) => ({
  texture: getLocalStorage('texture') || "dirt",
  cubes: getLocalStorage('cubes') || [],
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
  saveWorld: () => {
    set(prev => {
      setLocalStorage('cubes', prev.cubes)
      setLocalStorage('texture', prev.texture)
    })
  },
  resetWorld: () => {
    set(() => ({
      cubes: [],
      texture: 'dirt'
    }))
    setLocalStorage('cubes', [])
    setLocalStorage('texture', "")
  },
}))