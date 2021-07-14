import React, {useState, useEffect} from 'react'
import ItemList from "./itemList"
export const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setTimeout(function(){ const getItems = async (url) => {
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
                // setPokemons((pokemons) => [...pokemons, pokemon]);
            
        };
    
        getItems("https://diegojavierconchillowagner.github.io/Json/js/data.json");
        }, 2000);
        
    }, []);

    return (
   
        <div>
            {items.length === 0 ? (
                <h3>Cargando...</h3>
            ) : (
                items.map((el) => (
                <ItemList id={el.id} cat={el.cat} name={el.name} image={el.img} price={el.price} cantidad={el.cantidad} />
                ))
            )}
        </div>
      
    )
}

export default ItemListContainer