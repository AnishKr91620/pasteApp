import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <NavLink to={"/"} className={"flex flex-row gap-4 place-content-evenly"}>
        Home
      </NavLink>
      <NavLink to={"/pastes"}>
        Pastes
      </NavLink>
    </div>
  )
}

export default Navbar
