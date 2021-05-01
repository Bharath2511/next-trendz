import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="nav-header">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
        className="nav-logout"
      />
      <ul className="nav-links-container">
        <Link to="/" className="nav-link-item">
          <li>Home</li>
        </Link>
        <Link to="/products" className="nav-link-item">
          <li>Products</li>
        </Link>
        <Link to="/cart" className="nav-link-item">
          <li>Cart</li>
        </Link>
        <Link to="/logout" className="logout nav-link-item">
          <li>Logout</li>
        </Link>
      </ul>
    </div>
    <div className="nav-icons-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="nav home"
        className="nav-home nav-link"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="nav products"
        className="nav-products nav-link"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
        className="nav-cart nav-link"
      />
    </div>
  </nav>
)

export default Header
