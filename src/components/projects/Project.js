import React from 'react'
import './Project.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'

const Project = () => {


  const clients = [
    {
        image : 'images/user-1.png',
        review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reprehenderit cum expedita unde ab, porro dolore sit non incidunt eligendi eveniet, fugit commodi deserunt dignissimos ea tempora corrupti quam perspiciatis.'
    },
    {
        image : 'images/user-2.png',
        review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reprehenderit cum expedita unde ab, porro dolore sit non incidunt eligendi eveniet, fugit commodi deserunt dignissimos ea tempora corrupti quam perspiciatis.'
    },
    {
        image : 'images/user-3.png',
        review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reprehenderit cum expedita unde ab, porro dolore sit non incidunt eligendi eveniet, fugit commodi deserunt dignissimos ea tempora corrupti quam perspiciatis.'
    },
    {
        image : 'images/user-4.png',
        review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reprehenderit cum expedita unde ab, porro dolore sit non incidunt eligendi eveniet, fugit commodi deserunt dignissimos ea tempora corrupti quam perspiciatis.'
    }
]


  return (
    <>
      <div className="project">
        <div className="p-wrapper">

          <div className="p-heading">
            <span>Clients always get </span>
            <span>Exceptional work</span>
            <span>from me</span>
          </div>


          {/* slide start  */}

          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable:true}}
            >
                {clients.map((client, index)=>{
                    return(
                        <SwiperSlide key={index}>
                            
                            <div className="projects">
                                <img src={client.image} alt="" />
                                <span>{client.review}</span>
                            </div>
                            
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
      </div>
    </> 
  )
}

export default Project