import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


const News = ({allData}) => {


  const news = [
    
    {
      page:'1',
      text:'#33 nömrəli nəqliyyat vasitəsi sürət həddini aşmışdır.'
    },
    {
      page:'2',
      text:'#119 nömrəli nəqliyyat vasitəsi təyinat yoludan çıxmışdır.'
    },
    {
      page:'3',
      text:'#46 nömrəli nəqliyyat vasitəsi istirahət limitini aşmışdır.'
    },
    {
      page:'4',
      text:'Ümumi limit aşan nəqliyyat vasitələrinin sayı 9-dur.'
    },
    {
      page:'5',
      text:'#14 nömrəli nəqliyyat vasitəsində telefon danışığı qeydə alınmışdır.'
    },
    {
      page:'6',
      text:'#87 nömrəli nəqliyyat vasitəsi hərəkət zamanı ani tormozlamışdır.'
    },
    {
      page:'7',
      text:'Bütün sürücülər üzrə siqaret çəkmək limiti yüksəlmişdir.'
    },
    {
      page:'8',
      text:'#127 nömrəli nəqliyyat vasitəsi istirahət limitini aşmışdır. Gecikmələrə səbəb olma ehtimalı vardır.'
    },
  ]

  return (
    <>
      <Swiper
        direction={"vertical"}
        // pagination={{
        //   clickable: true,
        // }}
        speed={1000}
        slidesPerView={6}
        modules={[Pagination]}
        className="mySwiper"
        autoplay={{
          "delay": 1000,
          "disableOnInteraction": false
        }}
      >
        {
          news.map((desc,i) =>{

            const {text, page} = desc
            return(
              // <SwiperSlide key={i}> <p>enetsk</p> </SwiperSlide>
              <SwiperSlide key={i}> <p>{ `${page}  :${text}` }</p> </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  );
}

export default News