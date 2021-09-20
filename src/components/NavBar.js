import React from 'react'
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src="https://machaand.com/wp-content/uploads/2020/12/Machaand-Website-Colour-e1625466348868-210x35.png" alt="..."/></Link>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <ul className="nav justify-content-end">
    <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/men" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: 'black' , textDecoration: 'none'}}>
            Men
            </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/men">Plain T-Shirt</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/women" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: 'black' , textDecoration: 'none'}}>
            Women
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/women">Plain T-Shirt</Link></li>
          </ul>
        </li>
      <li className="nav-item">
        <Link className="nav-link" to="/myAccount" style={{color: 'black' , textDecoration: 'none'}}>My Account</Link>
      </li>
    </ul>
    </div>
</nav>  
        </>
    )
}

export default NavBar
