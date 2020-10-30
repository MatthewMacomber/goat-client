import React from 'react';
import Main from '../../components/Main/Main'
import './LandingPage.css';

const LandingPage = (props) => {
  const handleStart = () => {
    props.history.push('/register')
  }
  return (
    <div>
      <section className="landing">
      <Main handleStart={handleStart}/>
      </section>
      <div className="demo-info">
        <p>Demo account: 'admin'</p>
        <p>Password: 'pass'</p>
      </div>

    </div>
  );
}

export default LandingPage;
