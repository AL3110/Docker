import Cookies from 'js-cookie'
import {Redirect, Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">Be the spotlight</h1>
          <img
            src="https://imgs.search.brave.com/LLVHb3IS6upwwrneulcjb9StqU6a4-hpAaK4gBl85ZI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzE0/NzUvOTU0OC9maWxl/cy9wcmVwcHktc3R5/bGUtY2xvdGhlcy1i/b29nemVsLWFwcGFy/ZWxfODAweC5qcGc_/dj0xNjU2MzM2OTI4"
            alt="clothes that get you noticed"
            className="home-mobile-img"
          />
          <p className="home-description">
            "Step into a world of limitless possibilities, where the latest
            trends, timeless classics, and everything in between are just a
            click away. At ClickMart, we're dedicated to bringing you the
            hottest looks from top brands, emerging designers, and exclusive
            labels, all in one seamless shopping experience"
          </p>
          <Link to="/products">
            <button type="button" className="shop-now-button">
              Shop Now
            </button>
          </Link>
        </div>
        <img
          src="https://imgs.search.brave.com/LLVHb3IS6upwwrneulcjb9StqU6a4-hpAaK4gBl85ZI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzE0/NzUvOTU0OC9maWxl/cy9wcmVwcHktc3R5/bGUtY2xvdGhlcy1i/b29nemVsLWFwcGFy/ZWxfODAweC5qcGc_/dj0xNjU2MzM2OTI4"
          alt="be the spotlight"
          className="home-desktop-img"
        />
      </div>
    </>
  )
}

export default Home
