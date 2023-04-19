import React from 'react';
import './Portfolio.css';

const Menu = () => {
  return (
    <>
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a className="navbar-item" href="/">
                <h1>
                    <p>Karim Amzert</p>
                    
                </h1>
            </a>

        </div>

        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
                
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                
                    <div className="buttons">
                    <a className="navbar-item" href="/">
                    Home
                </a>
                <a className="navbar-item" href="/">
                    Home
                </a>
                <a className="navbar-item" href="/">
                    Home
                </a>
                <a className="navbar-item" href="/">
                    Home
                </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    </>
  );
};

export default Menu;
