import React from 'react'
import Details from './Details/Details'

const DetailsList = ({ items }) => {
    return (
        items.map((el) =>  (
            <Details key={el.id} id={el.id} cat={el.cat} name={el.name} img={el.img} price={el.price} cantidad={el.cantidad} descripcion={el.descripcion} longDesc={el.longDesc}/>
        ))
    )
}

export default DetailsList
