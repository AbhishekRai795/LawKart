import React from 'react';
import "./Forclients.css"
import { Link } from 'react-router-dom';

export default function Forclients() {
    
    // const hiddenElements = document.querySelectorAll('.hidden');

    return (
        <div className="d-flex container-design">
            <div className=" w-50 dot-lawkart-design animation">
                <h1>.</h1>
                <h2>.</h2>
                <h3>.</h3>
                <h1>L</h1>
                <h1>a</h1>
                <h1>w</h1>
                <h1>K</h1>
                <h1>a</h1>
                <h1>r</h1>
                <h1>t</h1>
                <h3>.</h3>
                <h2>.</h2>
                <h1>.</h1>
            </div>
            <div className="w-50 empower-quote-design">
                <h1 className='heading-font-size animation'><div className='empower-font-size'><strong > Empower </strong></div><br /><div className='yourcase-design'>Your Case</div></h1>
               <div className='paragraph-design animation'> <p>"Hiering a lawyer is not<br /> just a transaction <br /> <strong>Its a partnership"</strong></p></div>
               <div className= "btn-hier-now animation"><Link className=' btn-hier-now-design' to={'/login'}>Hier-Now</Link></div>

            </div>
        </div>
    );
}
