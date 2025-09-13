import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Navbar() {
    return (
        <div>
            <h2>Navbar</h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>    
                    <navLink to="/about" className={({isActive}) => (isActive ? 'active-link' : '')}  >About</navLink>
                </li>

                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                
            </ul>
        </div>
    )
}

export default Navbar