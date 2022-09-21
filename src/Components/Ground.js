import { usePlane } from "@react-three/cannon";
import { NearestFilter, RepeatWrapping } from "three";
import { groundTexture } from '../images/Textures'

export const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 4,0,0],
    position: [0,0,0]
  }))
  const groundSize = [100, 100];

  // Adjusting Ground Texture
  groundTexture.magFilter = NearestFilter
  groundTexture.wrapS = RepeatWrapping
  groundTexture.wrapT = RepeatWrapping
  groundTexture.repeat.set(...groundSize)

  return (
    <mesh ref={ref}>
      <planeBufferGeometry attach="geometry" args={groundSize} />
      <meshStandardMaterial attach="material" map={groundTexture}/>
    </mesh>
  )
}