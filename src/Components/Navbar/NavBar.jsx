import { NavLink } from 'react-router-dom'
import logoImage from '../../assets/image.png'
import './NavBarStyle.css'

function NavBar() {
    return (
        <nav>
            <div>
                <img id="logo" src={logoImage}></img>
                <h2 id="logoText">Three Goons Studio</h2>
            </div>
            <ul>
                <NavLink exact to="/">Home</NavLink>
                <li>
                    <NavLink exact to="/portfolio">Portfolio</NavLink>
                </li>
                <li>
                    <NavLink exact to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar