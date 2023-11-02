import React, { useContext } from 'react'
import './CSS/Catalog.css';
import all_product from '../Components/Assets/all_product.js'
import Item from '../Components/Item/Item'
const Catalog = () => {
  
  return (
    <div className='catalog'>
      
      <div className="catalog-left">
      <input type="text" id="search_section" placeholder="Search..."/>
      <a href="#" class="search_button" id="search_button">Search</a>
      
       <select id="type">
          <option value="" disabled selected>Sort by</option>
          <option value="Sedan">Sedan</option>
          <option value="Crossover">Crossover</option>
          <option value="Cabriolet">Cabriolet</option>
        </select>
      </div>
      <div className="catalog-right">
      {all_product.map((item, i) =>{
        return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>;
      }

      )}
      </div>
      </div>

    
  )
}

export default Catalog