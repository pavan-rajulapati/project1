import React, { useState } from 'react'
import '../styles/seller.css'
import SellerSidenav from '../components/SellerSidenav'
import AddProduct from '../components/AddProducts.js'
import SellerReg  from '../components/SellerRegistration.js'

const Seller = () => {

  const [showSection, setShowSection] = useState('addProduct')


  return (
    <div>
      <div className="seller">
        <div className="container">
          <div className="sideNav">
            <SellerSidenav setShowSection={setShowSection}/>
          </div>
          <div className='sections'>
            {showSection === 'orders' && <SellerReg/>}
            {showSection === 'addProduct' && <AddProduct/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Seller