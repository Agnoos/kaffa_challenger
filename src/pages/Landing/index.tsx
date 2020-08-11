import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
function Landing() {

    return (
        <div className="navbar">
            <ul className="nav-itens">
                <li className="nav-iten"><Link to="/ValidateCnpj" className="Button">CNPJs</Link></li>
                <li className="nav-iten"><Link to="/RetangleIntersection" className="Button">Intersection</Link></li>
                <li className="nav-iten"><Link to="/RestClientService" className="Button">RestClient</Link></li>
                <li className="nav-iten"><Link to="/ValidateCnpj" className="Button">CNPJs</Link></li>
                <li className="nav-iten"><Link to="/RetangleIntersection" className="Button">CNPJs</Link></li>
                <li className="nav-iten"><Link to="/ValidateCnpj" className="Button">CNPJs</Link></li>
            </ul>
        </div>
    )
}

export default Landing