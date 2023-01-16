import './navBar.css'
import CardWidget from './CardWidget'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="nav-bar">
            <div className="logo"><Link to="/">LOGO</Link></div>
            <div className="navegation">
                <ul className="navegation-ul">
                    <Link to="category/ropaHombre"><li>Ropa Hombre</li></Link>
                    <Link to="category/ropaMujer"><li>Ropa Mujer</li></Link>
                    <Link to="category/electronica"><li>Electronica</li></Link>
                    <Link to="category/joyeria"><li>Joyeria</li></Link>
                    <Link to="category/carrito"><li><CardWidget/></li></Link>
                </ul>
            </div>
        </div>
    )
}