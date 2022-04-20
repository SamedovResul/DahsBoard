import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
// import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import {useSpring, animated} from 'react-spring'
const SideBar = props => {
  const [homeHeight,sethomeHeight] =useState(false)
  const [formHeight,setformHeight] =useState(false)
  
  // const AnimationBar = useSpring({
  //   to:[{width: props.sideOpen? '25%': '5%'}],
  //   from:{width:'10%'},
  //   config:{
  //     duration:500
  //   }
  // })
    // const AnimationBar = useSpring({
    //   to:[{width:  '5%'}],
    //   from:{width:'10%'},
    //   config:{
    //     duration:500
    //   }
    // })
  

  return (
    <article className='SideBar'>
    <div className='logo-div'>
      {/* <p>WakeMeUp</p>  */}
      
    </div>
    <div className="general"> 
      <div 
      
      className='home side-div' 
      style={homeHeight ?{height: "auto"} : {height: "50px"}}>
        <p onClick={()=> homeHeight? sethomeHeight(false) : sethomeHeight(true) } >General
        {/* <span> {
          homeHeight? ( <AiOutlineCaretUp />  ): (
            <AiOutlineCaretDown/>
          )
          }  </span> */}
        </p>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="map">
              Map
            </Link>
          </li>
          <li>
            <Link to="generalChart">
              generalChart
            </Link>
          </li>
        </ul>
      </div>
      <div className="side-menu">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M592 0h-384C181.5 0 160 22.25 160 49.63V96c23.42 0 45.1 6.781 63.1 17.81V64h352v288h-64V304c0-8.838-7.164-16-16-16h-96c-8.836 0-16 7.162-16 16V352H287.3c22.07 16.48 39.54 38.5 50.76 64h253.9C618.5 416 640 393.8 640 366.4V49.63C640 22.25 618.5 0 592 0zM160 320c53.02 0 96-42.98 96-96c0-53.02-42.98-96-96-96C106.1 128 64 170.1 64 224C64 277 106.1 320 160 320zM192 352H128c-70.69 0-128 57.31-128 128c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32C320 409.3 262.7 352 192 352z"/></svg>
        <h3>Individual</h3>
      </div>
      <div className="side-menu">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg>
        <h3>Live loaction</h3>
      </div>
      <div className="side-menu">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M326.3 218.8c0 20.5-16.7 37.2-37.2 37.2h-70.3v-74.4h70.3c20.5 0 37.2 16.7 37.2 37.2zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-128.1-37.2c0-47.9-38.9-86.8-86.8-86.8H169.2v248h49.6v-74.4h70.3c47.9 0 86.8-38.9 86.8-86.8z"/></svg>
        <h3>Product status</h3>
      </div>
      <div className="side-menu">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 80C0 53.49 21.49 32 48 32H144C170.5 32 192 53.49 192 80V96H384V80C384 53.49 405.5 32 432 32H528C554.5 32 576 53.49 576 80V176C576 202.5 554.5 224 528 224H432C405.5 224 384 202.5 384 176V160H192V176C192 177.7 191.9 179.4 191.7 180.1L272 288H368C394.5 288 416 309.5 416 336V432C416 458.5 394.5 480 368 480H272C245.5 480 224 458.5 224 432V336C224 334.3 224.1 332.6 224.3 331L144 224H48C21.49 224 0 202.5 0 176V80z"/></svg>
        <h3>Communication</h3>
      </div>
      <div className="side-menu">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M256 0v128h128L256 0zM224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM272 416h-160C103.2 416 96 408.8 96 400C96 391.2 103.2 384 112 384h160c8.836 0 16 7.162 16 16C288 408.8 280.8 416 272 416zM272 352h-160C103.2 352 96 344.8 96 336C96 327.2 103.2 320 112 320h160c8.836 0 16 7.162 16 16C288 344.8 280.8 352 272 352zM288 272C288 280.8 280.8 288 272 288h-160C103.2 288 96 280.8 96 272C96 263.2 103.2 256 112 256h160C280.8 256 288 263.2 288 272z"/></svg>
      <h3>Documantation</h3>
      </div>
      <div className="side-menu log-out">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64c17.67 0 32-14.33 32-32S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256c0 53.02 42.98 96 96 96h64c17.67 0 32-14.33 32-32S177.7 416 160 416zM502.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L402.8 224H192C174.3 224 160 238.3 160 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C515.1 266.1 515.1 245.9 502.6 233.4z"/></svg>
      <h3>Log out</h3>
      </div>
    </div>
        
      
    </article>
  );
};

export default SideBar;
