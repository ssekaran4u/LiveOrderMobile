import React from 'react'
import siteLogo from "../../../assets/mobImages/main_logo.svg";
import Illustrate from "../../../assets/images/illustration_splash.svg"

/**
* @author
* @function SplashScreenPage
**/
const style ={
    
     display: 'block',
     marginLeft: 'auto',
     marginRight: 'auto',
     width: '50%',
     marginTop: '80%',
     marginBottom: '0%'
}

const IllustrateImg ={
  width: '100%',
  marginTop: '120px'
}

const SplashScreenPage = (props) => {
  return(
    <div >
        {/* <img src={'IMAGE-URL'} style={style}/> */}
       
          {/* <img src={siteLogo} alt="onBoarding" className="mob-home-logo" /> */}
          <img src={siteLogo} alt="onBoarding"  style={style}  />
          <img src={Illustrate} alt="illustrate-img" style={IllustrateImg} />

    </div>
   )

 }

export default SplashScreenPage;