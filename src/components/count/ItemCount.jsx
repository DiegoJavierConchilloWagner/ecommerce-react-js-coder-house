import React , {useState} from 'react';
import "./count.css";

const ItemCount = () => {

    const [contador, setContador] = useState(1);

    const aumentar = () => contador < 5 ? setContador(contador + 1) : setContador(contador);
    const disminuir = () => contador <= 0 ? setContador(contador) : setContador(contador - 1)
        

    return (
        <div>
            <div className="contador">
                <h1 className={contador <= 0 ? "menor" : "mayor"}>Contador: {contador}</h1>
                <br />

                <button onClick={disminuir}>Disminuir</button>
                <button onClick={aumentar}>Aumentar</button>
            </div>
        </div>
    )
}
export default ItemCount;