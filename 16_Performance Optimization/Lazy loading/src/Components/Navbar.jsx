import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const linkStyle = ({ isActive }) => ({
    textDecoration: 'none',
    color: isActive ? '#1d4ed8' : '#111827',
    fontWeight: isActive ? 700 : 500,
    padding: '8px 10px',
    borderRadius: 8,
    background: isActive ? 'rgba(29,78,216,0.08)' : 'transparent',
  })

  return (
    <nav
      aria-label="Main Navigation"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        padding: '10px 16px',
        background: '#ffffff',
        borderBottom: '1px solid #e5e7eb',
      }}
    >
      <div style={{ fontWeight: 800, color: '#0f172a' }}>Navbar</div>
      <ul style={{ display: 'flex', gap: 8, listStyle: 'none', margin: 0, padding: 0 }}>
        <li>
          <NavLink to="/home" style={linkStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" style={linkStyle}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" style={linkStyle}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar