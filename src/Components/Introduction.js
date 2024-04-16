import React from 'react';
import './Introduction.css';
import weighingScaleImage from './weighing-scale.png';
import { Link } from 'react-router-dom';

export default function Introduction() {
    return (
        

            <div className="d-flex container1-style justify-center-y">
                <div className="w-50 h-100  white-text justify-center-x justify-column">
                   <div className='space-1'> <h1>"Search for new lawyers <br /> From the comfort <br /> of your home" <br /></h1></div>
                    <p className='p-intro'>"Embark on your legal journey with confidence as we offer<br /> <strong>tailored solutions to match your needs.</strong> <br /> At our platform, hiring a lawyer is not just a transaction; <br /> <strong>it's a partnership.</strong> <br /> Discover peace of mind knowing that your case is in the hands of <br /><strong>experienced professionals</strong> <br /> who prioritize your unique situation"</p>
                    <div className='btn-container'>
                    <Link className=" btn-startnow me-2" type="button" to={'/signup'}>Start-Now</Link>
                    </div>
                </div>
                <div className="w-50 h-100 white-text justify-center-x">
                    <img src={weighingScaleImage} alt="Weighing scale"  />
                </div>
            </div>

       
    );
}
