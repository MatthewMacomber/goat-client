import React from 'react'
import './LandingPage.css'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'


const LandingPage = (props) => {
  // const handleStart = () => {
  //   const {history} = props 
  //   history.push('./create-student')
  // }

  return (
    <div>
      <Header />
      <section className="landing">
      <Main />
       {/* <button className="here-button" onClick={() => handleStart()}>HERE</button> */}
       </section>
    </div>
    )
  }


export default LandingPage