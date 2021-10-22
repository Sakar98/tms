import React from 'react'
// import {ReactComponent as BrandLogo} from '../../assets/images/logo-paytm.svg';
import style from './styles.scss';


const Navbar=() => {
    return (
        <div className="navbar-container grid-container">
        <div className="left">
             <div className='logo-wrap' />
             <div className="logo-tagline">For Business</div>
        </div>
        <div className="right">
        <div className="serch-input">
        <input type="text" placeholder="Set MID for all view"/>
            <button className='button' type="submit">Apply</button>
        </div>
        <div className="user-info">J</div>
        </div>
        </div>
        // <div className="navbar-container grid-container test">
        //     <div className="left-navbar logo">
        //             <div className='logo-wrap' /></div>
        //     <div className="mid-navbar ">
        //         <nav>
        //             <ul className= "navbar-link-container">
        //                 <li className="navLink"> <a className="active  " href="/">Home</a></li>
        //                 <li className="navLink"> <a href="/">About Us</a></li>
        //                 <li className="navLink"> <a href="/">Fitness Calculator</a></li>
        //                 <li className="navLink"> <a href="/">Contact Us</a> </li>
        //             </ul>
        //         </nav>
        //     </div>
        //     <div className="right-navbar">
        //         <button className="btn">Call Us</button>
        //         <button className="btn">Email Us</button>
        //     </div>
        // </div>
    )
}

export default Navbar
