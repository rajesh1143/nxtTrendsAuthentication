import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <>
    <nav className="nav-header">
      <div className="nav-content">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="website-logo"
          alt="website logo"
        />
        <ul className="nav-menu">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link">
              cart
            </Link>
          </li>
        </ul>
        <button type="button" className="logout-desktop-btn">
          Logout
        </button>
        <button type="button" className="logout-mobile-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="logout-icon"
          />
        </button>
      </div>
    </nav>
  </>
)

export default Header
