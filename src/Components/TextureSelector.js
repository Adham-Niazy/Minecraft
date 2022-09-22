import { useEffect } from "react";

import { useStore } from '../Hooks/useStore';
import { useKeyboard } from '../Hooks/useKeyboard';

import { dirtImg, grassImg, glassImg, logImg, woodImg } from '../images/images';
const images = {
  dirt: dirtImg,
  grass: grassImg,
  glass: glassImg,
  wood: woodImg,
  log: logImg,
}

const TextureSelector = () => {
  const [activeTexture, setTexture] = useStore(state => [state.texture, state.setTexture]);
  const {
    dirt,
    grass,
    glass,
    wood,
    log
  } = useKeyboard();

  useEffect(() => {
    const textures = {
      dirt,
      grass,
      glass,
      wood,
      log
    }
    const pressedTexture = Object.entries(textures).find(([k, v]) => v);
    if (pressedTexture) {
      setTexture(pressedTexture[0])
    }
  }, [setTexture, dirt, grass, glass, wood, log])

  return (
    <div className='absolute texture-selector'>
      {Object.entries(images).map(([k, src]) => {
        return (<img
          key={k}
          src={src}
          alt={k}
          className={`${k === activeTexture ? 'active' : ''}`}
        />)
      })}
    </div>
  )
}

export default TextureSelector