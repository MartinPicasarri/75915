import { useAppContext } from "../../context/context"
import "./Contador.css"

function Contador({ stock = 12 }) {
  const { contador, setContador } = useAppContext()

  const stockNum = Number(stock)

  return (
    <div className="contador-container">
      <div className="buttons-container">
        <button disabled={contador <= 1} className="btn-modify" onClick={() => setContador(contador - 1)}>
          -
        </button>
        <p id="numero">{contador}</p>
        <button disabled={contador >= stockNum} className="btn-modifym" onClick={() => setContador(contador + 1)}>
          +
        </button>
      </div>
    </div>
  )
}

export default Contador
