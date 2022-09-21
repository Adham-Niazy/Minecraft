import { useRef, useEffect } from 'react'
import { useSphere } from "@react-three/cannon"
import { useFrame, useThree } from "@react-three/fiber"
import { Vector3 } from 'three'
import { useKeyboard } from '../Hooks/useKeyboard'

const JUMP_FORCE = 5;
const MOVEMENT_SPEED = 5;

const Player = () => {
  const { jump, moveBackward, moveForward, moveRight, moveLeft } = useKeyboard();
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

    // Adjust Movement
    const Direction = new Vector3()
    const frontVector = new Vector3(
      0,
      0,
      (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
    )
    const sideVector = new Vector3(
      (moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
      0,
      0,
    )
    Direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(MOVEMENT_SPEED)
      .applyEuler(camera.rotation)
    api.velocity.set(Direction.x, velocity.current[1], Direction.z)

    // Adjust JUMP Movement
    if (jump && Math.abs(velocity.current[1]) < 0.05) {
      api.velocity.set(velocity.current[0], JUMP_FORCE, velocity.current[2])
    }
  })

  return (
    <mesh ref={ref}>

    </mesh>
  )
}

export default Player;