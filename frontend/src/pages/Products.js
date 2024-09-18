import React from 'react'
import AddProducts from '../components/AddProducts'
import '../styles/product.css'

const Products = () => {
  return (
    <div>
        <div className="product-container">
          <div className="side-nav">
            
          </div>
          <div className="main-section">
            <AddProducts/>
          </div>
        </div>
    </div>
  )
}

export default Products