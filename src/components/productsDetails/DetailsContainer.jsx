import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'
import Details from './Details';

const DetailsContainer = () => {
    const url = "https://diegojavierconchillowagner.github.io/Json/js/data.json"
    let {search} = useLocation();
    let query = new URLSearchParams(search)
    let id = parseInt(query.get("id"))
    const [items, setItems] = useState([]);
    useEffect(() => {
            const getItems = async (url) => {
            let res = await fetch(url),
            json = await res.json(),
            data = json.dataProduct;
            // console.log(data);
            data.forEach(el => {
                if (el.id === id) {
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
                    setItems((items) => [...items,item],
                    console.log(item));
                }
                // console.log(el.id)
                
                // console.log(item)
                
            });     
        };
        getItems(url);   
    }, [id]);
    
    return (
        <>
            {items.length === 0 ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : (
                items.map((el) =>  (
                    <Details key={el.id} id={el.id} cat={el.cat} name={el.name} img={el.img} price={el.price} cantidad={el.cantidad} descripcion={el.descripcion} longDesc={el.longDesc}/>
                ))
            )}
        </>
    )
}

export default DetailsContainer
