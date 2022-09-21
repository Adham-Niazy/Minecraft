import { usePlane } from "@react-three/cannon";
import { groundTexture } from '../images/Textures'

const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0]
  }))
  const groundSize = [100, 100];

  groundTexture.repeat.set(...groundSize);

  return (
    <mesh ref={ref}>
      <planeBufferGeometry attach="geometry" args={groundSize} />
      <meshStandardMaterial attach="material" map={groundTexture} />
    </mesh>
  )
}

export default Ground;