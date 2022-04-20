import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Data from '../../data/data'
import CalculateFunc from '../Calculate';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Mousewheel,
  Pagination,
  Autoplay,
} from 'swiper';


SwiperCore.use([Mousewheel,Pagination,Autoplay,]);

const TopBar = (props) => {
  const { setAvarageName } = props
  CalculateFunc(Data)
  const Array = [
    {
      key:"Siqaret",
      // icon: faSmoking,
      individuals:[]
    },
    {
      key:"Telefon",
      // icon:faPhone,
      individuals:[]
    },
    {
      key:"Yuxulamaq",
      // icon:faSleep,
      individuals:[]
    },
    {
      key:"Sürət Limiti",
      // icon:faMask,
      individuals:[]
    }
  ]

  let test = []


  // get individual bad result and push individual name to result category
  Data.map((ind) =>{
    // console.log(ind)
    const {result} = ind  
    result.map((res) =>{
      Array.map((Arr) =>{
        if(res.key === Arr.key){
          Arr.individuals.push(ind.name)
        }
      })
    })
  })
  
  
  // console.log(Array)
  return(
    <article className='topbar'>
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            {
              // loop  category for individuals
              Array.map((arr, index) =>{
                const {individuals} = arr
                return(
                  <div key={index} className="col-md-3">
                    {/* <p className='arrKey' >en cox {arr.key} </p> */}
                    <div className="box">
                      <div className='icon-div'>

                        {/* <i class="fa fa-bar-chart" style="font-size:24px"></i> */}
                        <svg xmlns="http://www.w3.org/2000/svg" className='icons' viewBox="0 0 512 512"><path d="M64 400C64 408.8 71.16 416 80 416H480C497.7 416 512 430.3 512 448C512 465.7 497.7 480 480 480H80C35.82 480 0 444.2 0 400V64C0 46.33 14.33 32 32 32C49.67 32 64 46.33 64 64V400zM342.6 278.6C330.1 291.1 309.9 291.1 297.4 278.6L240 221.3L150.6 310.6C138.1 323.1 117.9 323.1 105.4 310.6C92.88 298.1 92.88 277.9 105.4 265.4L217.4 153.4C229.9 140.9 250.1 140.9 262.6 153.4L320 210.7L425.4 105.4C437.9 92.88 458.1 92.88 470.6 105.4C483.1 117.9 483.1 138.1 470.6 150.6L342.6 278.6z"/></svg>
                        <p className='arrKey' > {arr.key} </p>
                      </div>
                    
                      <Swiper
                        direction={'vertical'}
                        slidesPerView={1}
                        autoplay={{
                          "delay": 3000,
                          "disableOnInteraction": false
                        }}

                      >
                        {
                          // get individuals name from  category and loop
                          individuals.map((name,index)=>{

                            return(
                              <SwiperSlide key={index}>
                                <Link to="IndividualAvarage">
                                  <p className='individualName'  onClick={() =>{setAvarageName(name)}} > {name} </p>
                                </Link>
                              </SwiperSlide>
                                
                            )
                          })
                        }
                      </Swiper>
                    </div>
                  </div>
                )
              })
            }
            
          </div>
        </div>
      </div>
    </article>
  )
};

export default TopBar;
