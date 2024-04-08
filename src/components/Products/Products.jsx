import React from 'react'
import './Products.css'
import product1 from '../../assets/watertank.jpeg'
import product2 from '../../assets/pipes.jpeg'
import product3 from '../../assets/pipes1.jpeg'


const Products = () => {
  return (
    <div className='Products'>
        <div className="Product">
            <img src={product1} alt="" />
            <div className="caption">
                <h3>Water Tanks</h3>
                <p>Water Tanks with the capacity of 500,1000 liters with strong quality</p>
            </div>
        </div>
        <div className="Product">
            <img src={product2} alt="" />
            <div className="caption">
            <h3>Water Tanks</h3>
                <p>Pipes Tanks</p>
            </div>
        </div>
        <div className="Product">
            <img src={product3} alt="" />
            <div className="caption">
            <h3>Water Tanks</h3>
                <p>Water Tanks</p>
            </div>
        </div>
      
    </div>
  )
}

export default Products
