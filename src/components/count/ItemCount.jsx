import React , {useState} from 'react';
import "./count.css";

const ItemCount = ({cantidad}) => {

    const [contador, setContador] = useState(1);

    const aumentar = () => contador < cantidad && setContador(contador + 1) 
    const disminuir = () => contador > 1 && setContador(contador -1) 
        

    return (
        <div className="addAndRemoveButton">
            <button className="removeButton" onClick={disminuir}>-</button><p>{contador}</p><button className="addButton" onClick={aumentar}>+</button>
        </div>
    )
}
export default ItemCount;