import React from "react"
import { NavLink } from "react-router-dom"

import "./Header.css"

export default function Header() {
  return (
    <nav className="Header">
      <NavLink to="/updown" activeClassName="active">
        Up Down
      </NavLink>
      <NavLink to="/growshrink" activeClassName="active">
        Grow Shrink
      </NavLink>
      {/* <NavLink to="/circles" activeClassName="active">
        Circles
      </NavLink> */}
    </nav>
  )
}
