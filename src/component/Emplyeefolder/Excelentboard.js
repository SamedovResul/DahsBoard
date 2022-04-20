import React from 'react';
import Data from '../../data/data';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Mousewheel,
  Pagination,
  Autoplay,
} from 'swiper';



const Excelentboard = (props) => {
  const { setAvarageName } = props
  
  const Array = [
    {
      key:"smoke",
      individuals:[]
    },
    {
      key:"phone",
      individuals:[]
    },
    {
      key:"sleep",
      individuals:[]
    },
    {
      key:"mask",
      individuals:[]
    }
  ]


  let result = []


  Data.map((subject,indIndex) =>{
    const {array , name} = subject
    array.map((arr, index) =>{
      if(10 >= arr){
        Array[index].individuals.push(name)
      }
    })
  })

  // console.log(Array)
  return(
    <article className='bottomNav'>
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className=" text-center col-md-12">
              <p>Nümunəvi İşçilər</p>
            </div>
            {
              Array.map((result,index) =>{
                const {name, individuals} = result
                return(
                  <div key={index} className="col-md-3">
                    {
                      <p> {name} </p>
                    }
                    <div className='box' >
                      <Swiper 
                      direction={'vertical'}
                      slidesPerView={1}
                      autoplay={{
                        "delay": 3000,
                        "disableOnInteraction": false
                      }}
                      >

                        {
                          individuals.map((name,index) =>{

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

export default Excelentboard;
