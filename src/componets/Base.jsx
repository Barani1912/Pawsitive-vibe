import React, { useEffect, useState } from 'react'
import logo from '../assets/pawsitive-vibes-logo1.png'
import { useLocation, useNavigate } from 'react-router-dom';
import ffDog from '../assets/frontfacingDog.json';
import Lottie from 'lottie-react';
// import { BackTop } from 'antd';

function Base({children}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState('home');

  // const aStyle =document.querySelector(".ancStyle")
  // function changeBackGround(){
  //   navigate("/");
  //   aStyle.setAttribute('style',"background-color:white;border-radius:10px");


  useEffect(() => {
    setActive(location.pathname); 
}, [location]);


  const handleClick1 = (path) => {
    navigate("/")
    setActive(path); 
};
  const handleClick2 = (path) => {
    navigate("/adopt-a-pet");
    setActive(path);
};
  const handleClick3 = (path) => {
    navigate("/volunteer")
    setActive(path);
};
  const handleClick4 = (path) => {
    navigate("/contact")
    setActive(path);
};
    

  return (
    <div>
      <header>
      {/* <div >className='base-header' */}
          <div className='base-header-img'>
            <h2 >Pawsitive Vibes</h2>
            <img src={logo} alt="logo" width={"50px"} height={"auto"} />
          </div>
          
          <nav>

            {/* <div className='nav-list'>
              <button className="nav-btns" onClick={()=>navigate("/")}>Home</button>
              <button className="nav-btns" onClick={()=>navigate("/adopt-a-pet")}>Adopt a Pet</button>
              <button className="nav-btns" >Volunteer</button>
              <button className="nav-btns" >Contact</button>  
            </div> */}
            {/* <ul className='nav-list'>
              <li onClick={()=>navigate("/")}>Home</li>
              <li onClick={()=>navigate("/adopt-a-pet/")}>Adopt a Pet</li>
              <li>Volunteer</li>
              <li>Contact</li>
            </ul> */}



            <ul className='navbar'>
              <li>
                <a   className={active === '/' ? 'active' : ''}  onClick={() => handleClick1('/')}>Home</a>
              </li>

              <li>
                <a  className={active === '/adopt-a-pet' ? 'active' : ''}
                        onClick={() => handleClick2('/adopt-a-pet')}>Adopt a Pet</a>
              </li>

              <li>
                <a  className={active === '/volunteer' ? 'active' : ''}
                        onClick={() => handleClick3('/volunteer')}>Volunteer</a>
              </li>

              <li>
                <a className={active === '/contact' ? 'active' : ''}
                        onClick={() => handleClick4('/contact')}>Contact</a>
              </li>

            </ul>
          </nav>
          
   
        
      </header>

      <main>
        <div className='base-content'>
          {children}
        </div>
      </main>

      {/* <div>
        <BackTop visibilityHeight="1000" />
      </div> */}
      
      <footer>

        <div className='footerLottie'>
          <Lottie animationData={ffDog} /> 
        </div>
          
        <div className='base-footer'>

          <img src={logo} alt="pawsitive-vibes-logo" style={{width:"15%",height:"15%",borderRadius:"10%",position:"relative",top:"25px"}} />

          <div className='footer-div1'>
            <h4>Quick Links</h4>
            <p>Donate</p>
            <p>Privacy Policy </p>
            <p>Terms and Conditions</p>
            <p>Contact</p>
          </div>

          <div className='footer-div2'>
            <h4>Looking to adopt a pet?</h4>
            <p>Adopt a Pet</p>
            <div>
              <h4>Mail us at</h4>
              <p>adopt@pawsitivevibes.in</p>
            </div>
            <div>
              <h4>Availability</h4>
              <p>10:00 AM - 7:00 PM</p>
            </div>
          </div>

        </div>
      </footer>

    </div>
  )
}

export default Base