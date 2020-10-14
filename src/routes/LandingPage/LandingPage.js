import React from 'react';
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import './LandingPage.css';

const LandingPage = (props) => {
  return (
    <div>
      <Header />
      <section className="landing">
      <Main />
       </section>
    </div>
  );
}

export default LandingPage;
