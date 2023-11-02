import React from 'react'
import Item from '../Item/Item'
import '../Item/Item.css'
import data_product from '../Assets/data'

const Items = () => {
  return (
    <div className='main'>
      {data_product.map((item, i)=>{
        return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
    })}</div>
  )
}

export default Items