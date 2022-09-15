import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
	const[click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeBurger = () => setClick(false); 


  return (
    <>
		<div className='navigation'>
      <nav className='navbar'>
				<div className='navbar-container'>
					<Link to="/" className='navbar-logo' onClick={closeBurger}>
						<img src="Icons/logo.svg" alt='Logo'></img>
					</Link>
					<div className='menu-icon' onClick={handleClick}>
					<i className= {click ? 'fas fa-times': 'fas fa-bars'}/>
					</div>
				</div>
				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
					<li className='nav-item'>
						<Link to="/Sustainability" className={click ? 'nav-links active' : 'nav-links'} onClick={closeBurger}>
						<p>Sustainability</p>
						</Link>
					</li>
					<li className='nav-item'>
						<Link to="/Material" className={click ? 'nav-links active' : 'nav-links'} onClick={closeBurger}>
						<p>Material</p>
						</Link>
					</li>
					<li className='nav-item'>
						<Link to="/EndApplication" className={click ? 'nav-links active' : 'nav-links'} onClick={closeBurger}>
						<p>End application</p>
						</Link>
					</li>
					<li className='nav-item'>
						<Link to="/Cost" className={click ? 'nav-links active' : 'nav-links'} onClick={closeBurger}>
						<p>Cost</p>
						</Link>
					</li>
					<li className='nav-item'>
						<Link to="/About" className={click ? 'nav-links active' : 'nav-links'} onClick={closeBurger}>
						<p>About</p>
						</Link>
					</li>
					<li className='nav-item'>
						<Link to="/FAQ" className={click ? 'nav-links active' : 'nav-links'} onClick={closeBurger}>
						<p>FAQ</p>
						</Link>
					</li>
					<li className='nav-item'>
						<Link to="/Contact" className={click ? 'nav-links active' : 'nav-links'} onClick={closeBurger}>
						<p>Contact</p>
						</Link>
					</li>
				</ul>
			</nav> 
			</div>
    </>
  )
}

export default Navbar