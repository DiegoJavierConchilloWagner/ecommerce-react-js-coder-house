import React , {useContext} from 'react';
import "./count.css";
import { CartContext } from '../../context/CartContext';
const ItemCount = () => {
    // const [contador, setContador] = useState(1);
    const {aumentar, disminuir,contador} = useContext(CartContext)
        
    return (
        <div className="addAndRemoveButton">
            <button className="removeButton" onClick={disminuir}>-</button><p>{contador}</p><button className="addButton" onClick={aumentar}>+</button>
        </div>
    )
}
export default ItemCount;