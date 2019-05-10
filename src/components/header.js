import React from 'react';
import ReactDOM from 'react-dom';
import './header.css';
import search_logo from '../assets/icons8-search-filled-20.png';
import location_logo from '../assets/icons8-marker-26.png';
import user_logo from '../assets/icons8-user-filled-30.png';

class Header extends React.Component {
    render() {
        return ( 
            <header>
                <div className='headerContainer'>
                    <a className='title' href='#'>Aplikacja<br/>kinowa</a>
                    <div>
                        <label id='labelNav' htmlFor='toggleNav'>
                            <img src={location_logo} alt='location'/>
                            <img src={user_logo} alt='location'/>
                            <img src={search_logo} alt='search'/>
                        </label>
                        <input type='checkbox' id='toggleNav'></input>
                        <div className='innerNav'>
                            <ul className='location'>
                                <img src={location_logo} alt='location' />
                                <label className='text'>Kino</label>
                                <div className='border'>
                                    <select>
                                        <option></option>
                                        <option>Gdańsk</option>
                                        <option>Kraków</option>
                                        <option>Poznań</option>
                                        <option>Warszawa</option>
                                        <option>Wrocław</option>
                                    </select>
                                   </div>
                            </ul>
                            <ul>
                                <a className='logging text'>
                                    <img src={user_logo} alt='location'/>
                                Logowanie</a>
                            </ul>
                            <ul>
                                <form id='form'>
                                    <input type='text' placeholder='Szukaj...' maxLength='20'></input>
                                    <button type = "submit"><img src={search_logo} alt='search'/></button>
                                </form>
                            </ul>
                        </div>
                    </div>
                </div>
        </header>
        );
    }
}

export default Header;

