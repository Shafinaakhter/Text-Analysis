import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="h-wrapper">

          <div className="h-left">
            <span>Hy! I am</span>
            <span>Androw Tomas</span>
            <p>Frontend Developer with high level of experience in web desigining and <br /> development, producting tech quality work</p>

            <div className="h-icons">
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-square-instagram"></i>
            </div>

          </div>

          <div className="h-right">
            <img src="/images/portfolio.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home