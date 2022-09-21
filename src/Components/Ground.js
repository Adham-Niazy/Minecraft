import { usePlane } from "@react-three/cannon";

import { groundTexture } from '../images/Textures';
import { useStore } from '../Hooks/useStore';

const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0]
  }))
  const [addCube] = useStore((state) => [state.addCube])

  const groundSize = [100, 100];
  groundTexture.repeat.set(...groundSize);

  return (
    <mesh
      onClick={(e) => {
        e.stopPropagation();
        const [x, y, z] = Object.values(e.point).map(val => Math.ceil(val));
        addCube(x, y, z)
      }}
      ref={ref}>
      <planeBufferGeometry attach="geometry" args={groundSize} />
      <meshStandardMaterial attach="material" map={groundTexture} />
    </mesh>
  )
}

export default Ground;