import React from 'react';
import ReactDOM from 'react-dom';
import './navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <div className='navbar'>
                <label id='labelMenu' htmlFor='toggleMenu'>&#9776;</label>
                <input type='checkbox' id='toggleMenu'></input>
                    <div className='menu'>
                        <a href='#'>REPERTUAR</a>
                        <a href='#'>OFERTY</a>
                        <a href='#'>3D</a>
                        <a href='#'>IMAX</a>
                    </div>
            </div> 
        );
    }
}

export default Navbar;
