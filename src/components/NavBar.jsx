import './navBar.css'
import CardWidget from './CardWidget'

export default function Navbar() {
    return (
        <div className="nav-bar">
            <div className="logo"><a href="../../public/index.html">LOGO</a></div>
            <div className="navegation">
                <ul className="navegation-ul">
                    <a href="#"><li>Vinos</li></a>
                    <a href="#"><li>Energizantes</li></a>
                    <a href="#"><li>Vodka</li></a>
                    <a href="#"><li>Gaseosas</li></a>
                    <a href="#"><li><CardWidget/></li></a>
                </ul>
            </div>
        </div>

    )
}