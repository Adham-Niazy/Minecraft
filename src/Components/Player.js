import { useRef, useEffect } from 'react'
import { useSphere } from "@react-three/cannon"
import { useFrame, useThree } from "@react-three/fiber"
import { Vector3 } from 'three'
import { useKeyboard } from '../Hooks/useKeyboard'

const Player = () => {
  const actions = useKeyboard();
  console.log(actions);
  const { camera } = useThree()
  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: 'Dynamic',
    position: [0, 1, 0]
  }))

  // Keep tracking of the velocity
  const velocity = useRef([0, 0, 0])
  useEffect(() => {
    api.velocity.subscribe((v) => velocity.current = v)
  }, [api.velocity])

  // keep tracking of the position
  const position = useRef([0, 0, 0])
  useEffect(() => {
    api.position.subscribe((p) => position.current = p)
  }, [api.position])

  useFrame(() => {
    camera.position.copy(new Vector3(...position.current))
    api.velocity.set(0, 1, 0)
  })

  return (
    <mesh ref={ref}>

    </mesh>
  )
}

export default Player;