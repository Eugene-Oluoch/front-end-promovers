/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState,useContext} from 'react';
import { NavLink } from 'react-router-dom';
import '../../static/css/nav.css';
import AuthContext from '../context/AuthContext';

let Nav = ()=>{

    let {user} = useContext(AuthContext)

    let [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

    return(
        <>
            <section className="header">
                <nav className="header-nav">
                    <article className="header-nav-container">
                        <div className="header-nav-logo">
                            <h1>Pro movers</h1>
                            <div  className={isActive ? 'active header-nav-logo-hamburger hamburger': 'header-nav-logo-hamburger hamburger'} onClick={toggleClass}>
                                <span className="header-nav-logo-hamburger-bar bar"></span>
                                <span className="header-nav-logo-hamburger-bar bar"></span>
                                <span className="header-nav-logo-hamburger-bar bar"></span>
                            </div>
                        </div>
                        <div  className={isActive ? 'active header-nav-links': 'header-nav-links'}>
                            <ul className="header-nav-links-ul">
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/services">Services</NavLink></li>
                                <li><NavLink to="movers">Movers</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                                {user?<li><NavLink to="/contact">{user.username}</NavLink></li>:<li><NavLink to="/login" >LOGIN</NavLink></li>}
                            </ul>
                        </div>
                    </article>
                </nav>
            </section>
        </>
    ) 

};




export default Nav;



