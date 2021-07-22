import React , {useContext} from 'react';
import "./count.css";
import { CartContext } from '../../context/CartContext';
const ItemCount = ({cantidad}) => {
    const {aumentar,disminuir,contador} = useContext(CartContext)
    // const [contador, setContador] = useState(1);

    // const aumentar = () => contador < cantidad && setContador(contador + 1) 
    // const disminuir = () => contador > 1 && setContador(contador -1) 
        

    return (
        <div className="addAndRemoveButton">
            <button className="removeButton" onClick={disminuir}>-</button><p>{contador}</p><button className="addButton" onClick={aumentar}>+</button>
        </div>
    )
}
export default ItemCount;