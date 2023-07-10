import { Link } from "react-router-dom";
import './navbar.scss'
import logo from '../../images/travel-blog-logoebited.jpg';
import bimg from '../../images/travel.jpg'
export const Navbar = () => {
    return (
        <>
            <body>
                <div>
                    <ul className="navbar">
                        <li class="navbar-logo">
                            <a>
                             Logo
                            </a>
                        </li>
                        <li><Link to="/">TBlog</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Sign In</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                    </ul>
                </div>
            </body>
        </>
    )
}