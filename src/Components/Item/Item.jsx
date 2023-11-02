import React from 'react'
import './Item.css'


const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt="" />
        <h2 className='item-name'>{props.name}</h2>
        <p className='item-prices'>{props.price}$</p>

    </div>
  )
}

export default Item