import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {


  return (
    <footer className='footer'>
        <div className=' footerContainer '>
            <div className='content container'>
                <div className='contactInfo'>
                    <img src='/Icons/Logo.svg' alt='Logo' className='logo'></img>
                    <div className='contact'>
                        <img src='/Icons/phone.svg' alt='Phone'></img>
                        <p> +45 50 80 20 99</p>
                    </div>
                    <div className='contact'>
                        <img src='/Icons/mail.svg' alt='Mail'></img>
                        <p>info@refour</p>
                    </div>
                    <div className='contact'>
                        <img src='/Icons/adress.svg' alt='Address'></img>
                        <p>Nikolay Plads 15 <br/>
                            1067 København K <br/>
                            CVR: 54786214
                        </p>
                    </div>
                </div>
                <div className='shortcuts'>
                    <h2>Genveje</h2>
                    <div className='links'>
                        <Link to={"/Sutainability"} className='links'>
                            <p>Sutainability</p>
                        </Link>
                        <Link to={"/Material"} className='links'>
                            <p>MAterial</p>
                        </Link>
                        <Link to={"/Costs"} className='links'>
                            <p>Costs</p>
                        </Link>
                        <Link to={"/About"} className='links'>
                            <p>About</p>
                        </Link>
                        <Link to={"/FAQ"} className='links'>
                            <p>FAQ</p>
                        </Link>
                        <Link to={"/Contact"} className='links'>
                            <p>Contact</p>
                        </Link>
                    </div>
                </div>
                <div className='others'>
                    <h2>Andre links</h2>
                    <div className='links'>
                        <Link to={"/howMuchCountry"} className='links'>
                            <p>How much can your country save?</p>
                        </Link>
                        <Link to={"/howMuchCompany"} className='links'>
                            <p>How much can your company save?</p>
                        </Link>
                        <Link to={"/Press"} className='links'>
                            <p>Press releases</p>
                        </Link>
                        <Link to={"/Docs"} className='links'>
                            <p>Documentation</p>
                        </Link>
                        <Link to={"/StyleSheet"} className='links'>
                            <p>Style sheet</p>
                        </Link>
                    </div>
                </div>
                <div className='some'>
                    <h2>Find os</h2>
                    <div className='someIcons'>
                        <Link to={{ pathname:`https://www.facebook.com/Refour.packaging/`}} target="_blank">
                            <img src='/Icons/some-fb.svg' alt='facebook'></img>
                        </Link>
                        <Link to={{ pathname:`https://www.linkedin.com/company/refour-packaging/`}} target="_blank">
                            <img src='/Icons/some-tw.svg' alt='Twitter'></img>
                        </Link>
                        <Link to={{ pathname:`https://www.instagram.com/refour.packaging//`}} target="_blank">
                            <img src='/Icons/some-ig.svg' alt='instagram'></img>
                        </Link>
                        <Link to={{ pathname:`https://www.linkedin.com/company/refour-packaging//`}} target="_blank">
                            <img src='/Icons/some-yt.svg' alt='youTube'></img>
                        </Link>
                    </div>
                </div>

            </div>
            <div className='cookies'>
                <Link to={"/cookies"} className='links'>
                    <p >
                        Persondata &amp; cookies
                    </p>
                </Link>

                
            </div>
        </div>
    </footer>
  )
}

export default Footer