import React from 'react'
import '../styles/pageNotFound.css'
import { Link } from 'react-router-dom'


const PageNotFound = () => {
  return (
    <div>
        <div className="page-not-found">
            <div >
                <span>404</span>
                <p>Page Not Found</p>
            </div>
            <div className="message">
                <p>We're sorry the page you requested could not be found</p>
                <p>Please go back to the homepage</p>
                <Link to={'/'}><button>Homepage</button></Link>
            </div>
        </div>
    </div>
  )
}

export default PageNotFound