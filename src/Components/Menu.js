import { useStore } from "../Hooks/useStore"

const Menu = () => {
  const [saveWorld, resetWorld] = useStore((state) => [state.saveWorld, state.resetWorld])

  return (<div className="menu absolute">
    <button
      onClick={(e) => {
        e.stopPropagation()
        saveWorld()
      }}
    >Save</button>
    <button
      onClick={(e) => {
        e.stopPropagation()
        resetWorld()
      }}
    >Reset</button>
  </div>)
}

export default Menu