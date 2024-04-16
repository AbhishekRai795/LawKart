import React, { useState } from 'react';
import { useEffect } from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar(props) {

    const [login, setLogin] = useState(false);
    const loginActive = () => {
        setLogin(true);
    };

    const [toggle, settoggle] = useState(false);

   


    const toggleActive = () => {
        settoggle(!toggle);
    };

    const hamMenu = {
        position: toggle ? 'sticky': ''
    }

   
    
    const menuStyle = {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#070F2B',
        width: '100%',
        maxWidth: '500px',
        height: '100vh',
        marginLeft: '67vw',
        zIndex: 999,
        position: 'fixed',
        top: 0,
        right: toggle ? '0px': '-500px',
        transition: '0.3s ease'

}



return (
    <div >
       
        <nav className="navbar navbar-dark custom-navbar-color">

            <form className="container-fluid justify-content-space-between no-width">
                <div>
                    <Link className=" btn-outline-success1 me-2" type="button" onClick={loginActive} to='/login' >{props.su}</Link>
                    <Link className="btn-outline-success1" style={{ border: "0px", borderRadius: "0px" }} type="button" to={'/signup'} >{props.lo}</Link>
                </div>
                <div >

                    <a className="navbar-brand" href="/">
                        <span className="fs-3 mx-1"> .</span>
                        <span className="fs-2 mx-2">  .</span>
                        <span className="fs-1 mx-2">  .</span>
                        LawKart
                        <span className="fs-1 mx-2">  .</span>
                        <span className="fs-2 mx-2">  .</span>
                        <span className="fs-3 mx-1">  .</span>
                    </a>
                </div>
                <div>
                    <button class="navbar-toggler" style={hamMenu}  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" onClick={toggleActive}>
                        <span class="navbar-toggler-icon"></span>
                    </button>

                </div>




            </form>

        </nav>
        <div className="navbar-items " style={menuStyle}>
            <a className='menu-links' id='dashboard' href="#">Dashboard</a>
            <a className='menu-links' href="#">About</a>
            <a className='menu-links' href="#">Contact-us</a>
        </div>

    </div>

);
}
