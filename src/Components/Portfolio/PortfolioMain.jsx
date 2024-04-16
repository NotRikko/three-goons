import NavBar from '../Navbar/NavBar'
import CategorySelect from './CategorySelect'
import { Outlet } from 'react-router-dom'
import './Portfolio.css'

function PortfolioMain() {
    return (
        <div id="portfolioMain">
            <NavBar />
            <Outlet />
        </div>
    )
}

export default PortfolioMain