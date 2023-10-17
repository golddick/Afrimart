import React, { useState } from "react"
import Logo from '../../../Assest /logo.png'
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"

const Header = () => {
  const [navList, setNavList] = useState(false)

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <img src={Logo} alt='' />
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex' style={{gap:'20px'}}>
          
          <a href="https://afrimart.com/en/users/login" target="_blank" rel="noopener noreferrer">
          <button className='btn1'>
            <i className="login"></i> Login
            </button>
          </a>
            
            <a href="https://afrimart.com/en/users/registration" target="_blank" rel="noopener noreferrer">
            <button className='btn1'>
              <i className='fa fa-sign-out'></i> Sign In
            </button>
            </a>
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
