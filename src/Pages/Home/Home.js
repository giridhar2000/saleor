import React, { useEffect, useState } from 'react'
import "../Home/Home.css"
import img1 from "../../Assets/Images/img1.png"
import img2 from "../../Assets/Images/img2.png"
import img3 from "../../Assets/Images/img3.png"
import img4 from "../../Assets/Images/img4.png"
import img5 from "../../Assets/Images/img5.png"
import img6 from "../../Assets/Images/img6.png"
import img7 from "../../Assets/Images/img7.png"
import img8 from "../../Assets/Images/img8.png"
import img9 from "../../Assets/Images/img9.png"
import { motion, useAnimation } from "framer-motion";

export default function Home() {
  const [bg, setBg] = useState({ backgroundColor: "rgb(255, 255, 255)" })
  const listenScrollEvent = () => {
    if (window.scrollY > 1000) {
      setBg({ backgroundColor: "rgb(237, 245, 248)" })
    } else if (window.scrollY < 1000) {
      setBg({ backgroundColor: "rgb(255, 255, 255)" })
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);
  return (
    <div>
      <div className='home'>
        <div className='discord'>
          <p>Join Saleor community on Discord</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
          </svg>
        </div>

        <div className='content'>
          <div className='contenthead'>
            <p>#1 e-commerce platform on GitHub</p>
            <h1>The commerce API that<br /> puts developers first</h1>
            <span>An open-source, GraphQL-first e-commerce platform delivering<br /> ultra-fast, dynamic and personalized shopping experiences.</span>
          </div>

          <div className='btns'>
            <button className='dashboardbtn'>
              <p>Dashboard Demo</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>
            </button>

            <p className='start' href='/'>Start building for free</p>
          </div>

          <div>
            <img className='img1' src={img1} alt='img1' />
            <img className='img2' src={img2} alt='img2' />
            <img className='img3' src={img3} alt='img3' />
            <img className='img4' src={img4} alt='img4' />
          </div>

          <div className='history'>
            <img className='img8' src={img8} alt='img1' />
            <img className='img7' src={img7} alt='img3' />
            <img className='img' src={img3} alt='img3' />
            <img className='img5' src={img5} alt='img4' />
            <img className='img6' src={img6} alt='img2' />
            <img className='img9' src={img9} alt='img2' />
          </div>
        </div>


      </div>


      <div className='headless' style={bg}>
        <motion.div
          className="box"
          variants={{
            hidden: {opacity: 0, y: 75},
            visible: {opacity: 1, y:0}
          }}
        ><svg width="167" height="136" viewBox="0 0 167 136" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.0392 61.0666L62.4473 31.3555L165.381 96.9476L118.947 122.437L15.0392 61.0666Z" fill="white">
            </path>
            <path d="M12.1988 69.0522L6.78021 64.4184C3.34328 61.4793 2.30665 56.5993 4.252 52.5168L13.2674 33.5972C15.1123 29.7256 18.0983 26.5116 21.824 24.3875L53.0309 6.59526C59.4145 2.95577 67.1936 2.74365 73.766 6.02985L96.8878 17.5907C103.078 20.6857 108.333 25.3722 112.113 31.169L123.843 49.1545C124.961 50.8684 126.441 52.3165 128.178 53.3967L158.397 72.1815C162.507 74.7363 165.006 79.2323 165.006 84.0715V102.7C165.006 103.781 164.425 104.779 163.484 105.311L120.157 129.83C119.239 130.349 118.116 130.348 117.199 129.828L105.887 123.409M31.3707 70.7554L68.7494 92.1721M33.0986 82.8137L84.605 112.724" stroke="#28234A" stroke-linecap="round">
            </path>
            <path d="M118.715 129.736V108.942C118.715 105.485 116.93 102.274 113.994 100.449L82.8296 81.076C80.4711 79.6099 78.4627 77.6447 76.9457 75.3187L62.5655 53.269C60.9176 50.7422 58.627 48.6994 55.9288 47.3503L16.9562 27.864" stroke="#28234A">
            </path>
            <line x1="118.468" y1="114.431" x2="134.362" y2="105.379" stroke="#28234A">
            </line>
            <line x1="150.04" y1="97.6839" x2="165.933" y2="88.6318" stroke="#28234A">
            </line>
            <line x1="79.3589" y1="78.4457" x2="126.036" y2="51.8604" stroke="#28234A">
            </line>
            <circle r="12.2999" transform="matrix(0.86601 0.500028 3.18907e-05 1 22.9046 73.6787)" stroke="#28234A">
            </circle>
            <path d="M16.8603 70.1888C16.8601 66.3341 19.5662 64.7717 22.9044 66.6992" stroke="#28234A" stroke-linecap="round">
            </path>
            <circle r="12.2999" transform="matrix(0.86601 0.500028 3.18907e-05 1 95.3289 116.743)" stroke="#28234A">
            </circle>
            <path d="M100.918 119.97C100.918 116.406 98.4153 112.072 95.3287 110.29" stroke="#28234A" stroke-linecap="round">
            </path>
          </svg></motion.div>


      </div>
    </div>
  )
}
