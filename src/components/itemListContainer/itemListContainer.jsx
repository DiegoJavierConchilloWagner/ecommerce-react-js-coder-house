import React, {useState, useEffect, } from 'react'
import ItemList from "./itemList"
import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.css';
// import { CartContext } from '../../context/CartContext';

export const ItemListContainer = () => {


    
    const [items, setItems] = useState([]);
    useEffect(() => {
        // setTimeout(function(){ 
            const getItems = async (url) => {
            let res = await fetch(url),
            json = await res.json(),
            data = json.dataProduct;
            // console.log(data);
            data.forEach(el => {
                // console.log(el.id)
                let item = {
                    id: el.id,
                    cat: el.cat,
                    name: el.name,
                    img: el.img,
                    price: el.price,
                    cantidad: el.cantidad,
                    descripcion: el.descripcion,
                    longDesc: el.longDesc
                };
                // console.log(item)
                setItems((items) => [...items,item],
                console.log(item));
            });
        };
        getItems("https://diegojavierconchillowagner.github.io/Json/js/data.json");
        
    }, []);
    
    return (
        <>
            {items.length === 0 ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                // <h3>Cargando...</h3>
            ) : (
                <ItemList items={items} />
            )}
        </>
    )
}

export default ItemListContainer