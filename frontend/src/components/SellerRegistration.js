import React, { useState } from 'react'

const SellerRegistration = () => {

  const [sellerRegisterData, setSellerRegisterData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    street: '',
    city: '',
    pincode: '',
    state: '',
    country: '',
    holderName: '',
    bankName: '',
    accountNumber: '',
    ifscCode: '',
  })
  return (
    <div>
      <div className="seller-form">
        <div className="container">
          <form >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SellerRegistration