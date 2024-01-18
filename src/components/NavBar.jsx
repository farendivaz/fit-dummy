import { Link, useNavigate } from "react-router-dom";
import "../styles/swiper.css";

function NavBar() {
  return (
    <>
      <header>
        <nav className="navbar bg-neutral-500">
          <img src="/public/logo.jpg" className="logo" alt="Logo"></img>
          <ul>
            <Link to="/">
              <li className="text-primary-200" id="home">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="text-primary-200" id="about">
                About
              </li>
            </Link>
            <Link to="/">
              <li className="text-primary-200" id="product">
                Product
              </li>
            </Link>
            <Link to="/news">
              <li className="text-primary-200" id="news">
                News
              </li>
            </Link>
            <Link to="/contact-us">
              <li className="text-primary-200" id="contact">
                Contact Us
              </li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
