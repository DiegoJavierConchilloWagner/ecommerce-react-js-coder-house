import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.css';
import DetailsList from './DetailsList';

const DetailsContainer = () => {
    let {search} = useLocation();
    let query = new URLSearchParams(search);
    let id = parseInt(query.get("id"));
    const url = "https://diegojavierconchillowagner.github.io/Json/js/data.json";
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
                <DetailsList items={items} />
            )}
        </>
    )
}

export default DetailsContainer
