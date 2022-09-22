import { useState } from "react"

const Controls = () => {
  const [show, setShow] = useState(true)

  const controls = [
    {
      action: 'Movement',
      controls: 'W/S/D/A'
    },
    {
      action: 'Sprint',
      controls: 'LShift'
    },
    {
      action: 'Jump',
      controls: 'Space'
    },
    {
      action: 'Add Cube',
      controls: 'RClick'
    },
    {
      action: 'Remove Cube',
      controls: 'Alt + RClick'
    },
    {
      action: 'Change Material',
      controls: '1 - 5'
    },
  ]
  return (
    <div className={`absolute controls ${!show ? 'fixed-height' : ''}`}>
      <h3>Controls</h3>

      {controls.map(control => (
        <div className="control" key={control.action}>
          <p>{control.action}</p>
          <p>{control.controls}</p>
        </div>
      ))}

      <small className="hint">Hint: for better accuracy click on the centered cursor with the mouse exactly on it</small>

      <div className={`toggle ${show ? 'rotate' : ''}`} onClick={(e) => {
        e.stopPropagation();
        setShow(prev => !prev)
      }}>&darr;</div>
    </div>
  )
}

export default Controls