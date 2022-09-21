import { useStore } from "../Hooks/useStore";
import { Cube } from "./Cube";

const Cubes = () => {
  const [cubes] = useStore(state => [state.cubes]);

  return (
    cubes.map(cube => <Cube key={cube.key} cubeProps={cube}/>)
  )
}

export default Cubes;