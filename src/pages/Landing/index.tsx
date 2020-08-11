import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
function Landing() {

    return (
        <div id="#Landing">
            <div className="button-container">
                <Link to="/ValidateCnpj" className="Button">1 - 2 </Link>
                <Link to="/RetangleIntersection" className="Button">3 - 4</Link>
            </div>
        </div>
    )
}

export default Landing