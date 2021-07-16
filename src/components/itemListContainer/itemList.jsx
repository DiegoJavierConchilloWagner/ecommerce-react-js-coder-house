import React  from "react";
import { Link } from "react-router-dom";
import "./productItems.css"
function ItemList({ id,cat,name,img,price,cantidad }) {
  // const [state, setState] = useState("");

  // const url = "https://diegojavierconchillowagner.github.io/dataJson/js/data.json";

  // fetch(url)
  // .then((res) => res.json())
  // .then((data) => console.log(data[0].dataProduct))

    return (
            <div className={`columna-4 ${cat}`}>
                <div className="tarjetaPC">
                    <div className="imgBxPc">
                        <img src={img} alt={name} />
                    </div>
                    <div className="contenidoBxPc">
                        <h2>{name}</h2>
                        <div className="ranking">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <h2 className="precioPc">{price}</h2>
                        <Link to={`/productos-detalle?id=${id}`}><small>Ver Detalle</small></Link>
                        
                        <a className="comprarPc" href="#?">Comprar!</a>
                    </div>
                </div>
            </div>
    );
}


export default ItemList;
