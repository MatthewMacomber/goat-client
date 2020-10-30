import React from 'react';
import {Link} from 'react-router-dom';
import './Main.css';



const LandingPage = (props) => {
    const handleStart = () => {
        props.handleStart();
    }

    return (
        <div>
             <section className='main'>
                 <p>
                     Goat is a free goal tracking app that allows you to create new goals, earn points for goals completed, and redeem those points for rewards. Move your goat to the top of the mountain by completing all of the goals that you've set, but if you don't complete them by the date set, you lose points.
                 </p>
             </section> 
             <br/>
             <section className="signup">
                 <button className='signup-button' onClick={() => handleStart()}>
                     Sign Up
                 </button>
             </section> 
             <br/>
             <section className="login">
                 <Link to="/login" className='Already'>Already have an account?
                 </Link>
             </section>
        </div>
    )
}

export default LandingPage;
