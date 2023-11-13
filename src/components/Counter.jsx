import { useState } from "react"

function Counter() {
  // useState
  const [count, setCount] = useState(0)


  // Functions onClick
  const handleSub = () => {
    if(count > 0) {
      setCount(count - 1)
    }
  }

  const handleAdd = () => {
    setCount(count + 1)
  }

  const handleReboot = () => setCount(0)

  return (
    <main>
      <h2>{ count }</h2>

      <div className="countControler">
        <button onClick={ handleSub }>-</button>
        <button onClick={ handleAdd }>+</button>
      </div>

      <button className="restart" onClick={ handleReboot }>Reiniciar</button>
    </main>
  )
}

export default Counter