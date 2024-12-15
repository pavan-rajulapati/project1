import React from 'react'
import '../styles/sellerenterpage.css'

const SellerEnterPage = () => {
  return (
    <div>
        <div className="seller-page">
            <div className="container">
                <div className="info">
                    <div>
                        <span>Begin your selling Business on</span>
                        <h1>Shopvibe</h1>
                    </div>
                    <div>
                        <button>Start</button>
                    </div>
                </div>
                <div className="image-section">
                    <img src="\photos\seller-homepage-img.png" alt="seller page img" />
                </div>
            </div>
            <div className="wave">

            </div>
        </div>
    </div>
  )
}

export default SellerEnterPage