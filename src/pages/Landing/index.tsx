import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import kaffa from '../../assets/imagens/kaffa.png'

function Landing() {

    return (
        <div className="navbar">
            <ul className="nav-itens logo-align">
                <li><img className="logo" src={kaffa} alt="" /></li>
            </ul>
            <ul className="nav-itens">
                <li className="nav-iten"><Link to="/ValidateCnpj" className="Button">CNPJs</Link></li>
                <li className="nav-iten"><Link to="/RetangleIntersection" className="Button">Intersection</Link></li>
                <li className="nav-iten"><Link to="/RestClientService" className="Button">RestClient</Link></li>
                <li className="nav-iten"><Link to="/Mer" className="Button">MER</Link></li>
                <li className="nav-iten"><Link to="/Ux" className="Button">UX</Link></li>
            </ul>

        </div>
    )
}

export default Landing