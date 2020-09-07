import React from "react"
import { NavLink } from "react-router-dom"

import "./Header.css"

export default function Header() {
  return (
    <nav className="Header">
      <NavLink to="/updown" activeClassName="selected">
        Up Down
      </NavLink>
      <NavLink to="/growshrink" activeClassName="selected">
        Grow Shrink
      </NavLink>
    </nav>
  )
}
