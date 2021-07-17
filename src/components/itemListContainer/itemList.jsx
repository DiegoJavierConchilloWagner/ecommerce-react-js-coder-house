import React  from "react";
import Item from "./Item/Item";
function ItemList({ items }) {

    return (
        items.map((el) => (
            <Item key={el.id} id={el.id} cat={el.cat} name={el.name} img={el.img} price={el.price} cantidad={el.cantidad} descripcion={el.descripcion} longDesc={el.longDesc}/>
        ))
    );
}


export default ItemList;
