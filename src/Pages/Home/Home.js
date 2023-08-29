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
import himg1 from "../../Assets/Images/himg1.png"
import himg2 from "../../Assets/Images/himg2.png"
import himg3 from "../../Assets/Images/himg3.png"
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
      <div className='home centre'>
        <div className='discord'>
          <p>Join Saleor community on Discord</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
          </svg>
        </div>

        <div className='content'>
          <div className='contenthead'>
            <p>#1 e-commerce platform on GitHub</p>
            <h1>The commerce API that puts developers first</h1>
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

          <div className='imgs'>
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
        <div className='svg1'>
          <svg width="167" height="136" viewBox="0 0 167 136" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.0392 61.0666L62.4473 31.3555L165.381 96.9476L118.947 122.437L15.0392 61.0666Z" fill="white"></path>
            <path d="M12.1988 69.0522L6.78021 64.4184C3.34328 61.4793 2.30665 56.5993 4.252 52.5168L13.2674 33.5972C15.1123 29.7256 18.0983 26.5116 21.824 24.3875L53.0309 6.59526C59.4145 2.95577 67.1936 2.74365 73.766 6.02985L96.8878 17.5907C103.078 20.6857 108.333 25.3722 112.113 31.169L123.843 49.1545C124.961 50.8684 126.441 52.3165 128.178 53.3967L158.397 72.1815C162.507 74.7363 165.006 79.2323 165.006 84.0715V102.7C165.006 103.781 164.425 104.779 163.484 105.311L120.157 129.83C119.239 130.349 118.116 130.348 117.199 129.828L105.887 123.409M31.3707 70.7554L68.7494 92.1721M33.0986 82.8137L84.605 112.724" stroke="#28234A" stroke-linecap="round"></path>
            <path d="M118.715 129.736V108.942C118.715 105.485 116.93 102.274 113.994 100.449L82.8296 81.076C80.4711 79.6099 78.4627 77.6447 76.9457 75.3187L62.5655 53.269C60.9176 50.7422 58.627 48.6994 55.9288 47.3503L16.9562 27.864" stroke="#28234A"></path>
            <line x1="118.468" y1="114.431" x2="134.362" y2="105.379" stroke="#28234A"></line>
            <line x1="150.04" y1="97.6839" x2="165.933" y2="88.6318" stroke="#28234A"></line>
            <line x1="79.3589" y1="78.4457" x2="126.036" y2="51.8604" stroke="#28234A"></line>
            <circle r="12.2999" transform="matrix(0.86601 0.500028 3.18907e-05 1 22.9046 73.6787)" stroke="#28234A"></circle>
            <path d="M16.8603 70.1888C16.8601 66.3341 19.5662 64.7717 22.9044 66.6992" stroke="#28234A" stroke-linecap="round"></path>
            <circle r="12.2999" transform="matrix(0.86601 0.500028 3.18907e-05 1 95.3289 116.743)" stroke="#28234A"></circle>
            <path d="M100.918 119.97C100.918 116.406 98.4153 112.072 95.3287 110.29" stroke="#28234A" stroke-linecap="round"></path>
          </svg>
          NATIVE APPS
        </div>

        <div className='svg2'>
          <svg width="133" height="160" viewBox="0 0 133 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M132.168 28.0737C132.168 28.0771 132.17 28.08 132.174 28.0806C132.177 28.0813 132.18 28.0843 132.18 28.0878L132.18 141.58C132.18 141.583 132.178 141.585 132.175 141.585C132.173 141.585 132.171 141.587 132.171 141.589C132.171 146.111 129.183 150.632 123.208 154.082C111.257 160.982 91.8804 160.982 79.9294 154.082C73.8553 150.576 70.8684 145.962 70.9686 141.366L70.9723 28.6639C70.8048 24.02 73.7903 19.3453 79.9288 15.8015C91.8798 8.90211 111.256 8.90211 123.207 15.8015C129.085 19.1952 132.072 23.626 132.168 28.0737Z" fill="white"></path>
            <path d="M115.977 150.207L116.227 150.64H116.227L115.977 150.207ZM72.6988 150.207L72.9488 149.774L72.6988 150.207ZM63.738 137.491L64.2382 137.491L64.2379 137.502L63.738 137.491ZM63.7417 24.7712L64.2414 24.7541L64.2417 24.7626V24.7712L63.7417 24.7712ZM72.6988 11.9265L72.9488 12.3595L72.6988 11.9265ZM115.977 11.9265L116.227 11.4935L115.977 11.9265ZM124.938 24.1996L125.438 24.1889L124.938 24.1996ZM124.449 137.706L124.449 24.2129H125.449L125.449 137.706H124.449ZM125.44 137.715C125.44 142.478 122.294 147.138 116.227 150.64L115.727 149.774C121.612 146.377 124.44 141.995 124.44 137.715L125.44 137.715ZM116.227 150.64C110.158 154.144 102.234 155.882 94.3379 155.882C86.4416 155.882 78.5182 154.144 72.4488 150.64L72.9488 149.774C78.8304 153.17 86.5706 154.882 94.3379 154.882C102.105 154.882 109.845 153.17 115.727 149.774L116.227 150.64ZM72.4488 150.64C66.2823 147.08 63.1326 142.323 63.2382 137.48L64.2379 137.502C64.1431 141.85 66.9673 146.321 72.9488 149.774L72.4488 150.64ZM64.2417 24.7712L64.238 137.491L63.238 137.491L63.2417 24.7712L64.2417 24.7712ZM63.242 24.7884C63.0741 19.8997 66.2248 15.0867 72.4489 11.4935L72.9488 12.3595C66.9115 15.8449 64.0907 20.3666 64.2414 24.7541L63.242 24.7884ZM72.4489 11.4935C78.5182 7.98957 86.4416 6.25195 94.338 6.25195C102.234 6.25195 110.158 7.98957 116.227 11.4935L115.727 12.3595C109.845 8.96402 102.105 7.25195 94.338 7.25195C86.5706 7.25195 78.8304 8.96402 72.9488 12.3595L72.4489 11.4935ZM116.227 11.4935C122.196 14.9392 125.338 19.5051 125.438 24.1889L124.438 24.2103C124.348 19.9981 121.516 15.7016 115.727 12.3595L116.227 11.4935ZM124.953 138.21C125.223 138.206 125.44 137.985 125.44 137.715L124.44 137.715C124.44 137.439 124.661 137.215 124.937 137.21L124.953 138.21ZM125.449 137.706C125.449 137.981 125.228 138.206 124.953 138.21L124.937 137.21C124.666 137.215 124.449 137.435 124.449 137.706H125.449ZM124.849 24.6971C124.614 24.6519 124.443 24.4491 124.438 24.2103L125.438 24.1889C125.433 23.9565 125.266 23.7593 125.038 23.7152L124.849 24.6971ZM125.038 23.7152C125.276 23.7612 125.449 23.9697 125.449 24.2129H124.449C124.449 24.4495 124.617 24.6524 124.849 24.6971L125.038 23.7152Z" fill="#28234A"></path>
            <path d="M124.939 24.4194C124.939 28.9409 121.951 33.4621 115.976 36.912C104.025 43.8112 84.6486 43.8112 72.6976 36.912C66.7222 33.4621 63.7344 28.9409 63.7344 24.4194" stroke="#28234A"></path>
            <path d="M117.709 91.0371C104.801 98.489 83.873 98.489 70.9649 91.0371" stroke="#28234A" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="0.1 4"></path>
            <path d="M117.709 100.128C104.801 107.58 83.873 107.58 70.9649 100.128" stroke="#28234A" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="0.1 4"></path>
            <path d="M117.709 109.219C104.801 116.671 83.873 116.671 70.9649 109.219" stroke="#28234A" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="0.1 4"></path>
            <path d="M117.709 118.31C104.801 125.761 83.873 125.761 70.9649 118.31" stroke="#28234A" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="0.1 4"></path>
            <path d="M117.709 127.401C104.801 134.853 83.873 134.853 70.9649 127.401" stroke="#28234A" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="0.1 4"></path>
            <path d="M117.709 136.492C104.801 143.944 83.873 143.944 70.9649 136.492" stroke="#28234A" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="0.1 4"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.1734 48.2691C12.0013 48.2691 1.32308 37.5909 1.32308 24.4187C1.32308 11.2465 12.0013 0.568359 25.1734 0.568359C38.3456 0.568359 49.0238 11.2465 49.0238 24.4187C49.0238 29.7107 47.3003 34.6 44.384 38.5562C43.762 39.4 43.7973 40.5829 44.5386 41.3242L48.0692 44.8548C49.3291 46.1147 48.4368 48.269 46.655 48.269H25.2443C25.2207 48.269 25.1971 48.2691 25.1734 48.2691Z" fill="#FDFEFE"></path>
            <path d="M25.2443 48.269L25.2428 47.769H25.2443V48.269ZM48.0692 44.8548L47.7156 45.2083L48.0692 44.8548ZM44.5386 41.3242L44.8921 40.9706L44.5386 41.3242ZM1.82308 24.4187C1.82308 37.3148 12.2774 47.7691 25.1734 47.7691V48.7691C11.7251 48.7691 0.823082 37.8671 0.823082 24.4187H1.82308ZM25.1734 1.06836C12.2774 1.06836 1.82308 11.5227 1.82308 24.4187H0.823082C0.823082 10.9704 11.7251 0.0683594 25.1734 0.0683594V1.06836ZM48.5238 24.4187C48.5238 11.5227 38.0695 1.06836 25.1734 1.06836V0.0683594C38.6218 0.0683594 49.5238 10.9704 49.5238 24.4187H48.5238ZM43.9815 38.2595C46.8366 34.3864 48.5238 29.6003 48.5238 24.4187H49.5238C49.5238 29.821 47.764 34.8137 44.7865 38.8529L43.9815 38.2595ZM47.7156 45.2083L44.185 41.6777L44.8921 40.9706L48.4228 44.5012L47.7156 45.2083ZM25.2443 47.769H46.655V48.769H25.2443V47.769ZM25.1734 47.7691C25.1966 47.7691 25.2197 47.769 25.2428 47.769L25.2457 48.769C25.2217 48.769 25.1976 48.7691 25.1734 48.7691V47.7691ZM48.4228 44.5012C49.9977 46.0761 48.8823 48.769 46.655 48.769V47.769C47.9913 47.769 48.6606 46.1533 47.7156 45.2083L48.4228 44.5012ZM44.7865 38.8529C44.2968 39.5171 44.3423 40.4207 44.8921 40.9706L44.185 41.6777C43.2524 40.745 43.2271 39.2829 43.9815 38.2595L44.7865 38.8529Z" fill="#28234A"></path>
          </svg>
          VOICE
        </div>

        <div className='svg3'>
          <svg width="204" height="157" viewBox="0 0 204 157" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M199.258 82.2385C199.258 81.4101 198.677 81.0743 197.959 81.4886L170.641 97.2622C169.923 97.6765 169.342 98.6839 169.342 99.5123L169.341 128.156C169.341 128.984 169.922 129.32 170.64 128.906L197.958 113.132C198.676 112.718 199.258 111.71 199.258 110.882L199.258 82.2385Z" fill="#FDFEFE" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
            <rect x="-0.432989" y="0.249986" width="70.3264" height="32.6058" rx="1.5" transform="matrix(-0.866009 -0.500028 3.18609e-05 1 168.954 97.1175)" fill="#FDFEFE" stroke="black" stroke-linecap="round" stroke-linejoin="round"></rect>
            <rect x="-0.866041" width="71.1827" height="33.5574" rx="1.5" transform="matrix(-0.866041 -0.499972 -0.866041 0.499972 198.075 80.5599)" fill="#FDFEFE" stroke="black" stroke-linecap="round" stroke-linejoin="round"></rect>
            <line x1="0.5" y1="-0.5" x2="22.5088" y2="-0.5" transform="matrix(4.37112e-08 1 1 -4.37112e-08 162.671 98.408)" stroke="black" stroke-linecap="round"></line>
            <line x1="0.5" y1="-0.5" x2="22.5088" y2="-0.5" transform="matrix(4.37112e-08 1 1 -4.37112e-08 155.873 94.5208)" stroke="black" stroke-linecap="round"></line>
            <line x1="0.5" y1="-0.5" x2="22.5088" y2="-0.5" transform="matrix(4.37112e-08 1 1 -4.37112e-08 149.076 90.6292)" stroke="black" stroke-linecap="round"></line>
            <line x1="0.5" y1="-0.5" x2="22.5088" y2="-0.5" transform="matrix(4.37112e-08 1 1 -4.37112e-08 142.277 86.7417)" stroke="black" stroke-linecap="round"></line>
            <line x1="0.5" y1="-0.5" x2="22.5088" y2="-0.5" transform="matrix(4.37112e-08 1 1 -4.37112e-08 135.478 82.8499)" stroke="black" stroke-linecap="round"></line>
            <line x1="0.5" y1="-0.5" x2="22.5088" y2="-0.5" transform="matrix(4.37112e-08 1 1 -4.37112e-08 128.682 78.9626)" stroke="black" stroke-linecap="round"></line>
            <line x1="0.5" y1="-0.5" x2="22.5088" y2="-0.5" transform="matrix(4.37112e-08 1 1 -4.37112e-08 121.883 75.071)" stroke="black" stroke-linecap="round"></line>
            <line x1="0.5" y1="-0.5" x2="22.5088" y2="-0.5" transform="matrix(4.37112e-08 1 1 -4.37112e-08 115.084 71.1838)" stroke="black" stroke-linecap="round"></line>
            <line x1="178.003" y1="98.7461" x2="178.003" y2="120.755" stroke="black" stroke-linecap="round"></line>
            <line x1="184.802" y1="94.8542" x2="184.802" y2="116.863" stroke="black" stroke-linecap="round"></line>
            <line x1="191.599" y1="90.9673" x2="191.599" y2="112.976" stroke="black" stroke-linecap="round"></line>
            <path d="M202.777 38.0437C202.777 37.2153 202.195 36.8795 201.478 37.2938L174.159 53.0674C173.441 53.4816 172.86 54.489 172.86 55.3175L172.859 83.9607C172.859 84.7892 173.44 85.1249 174.158 84.7107L201.477 68.937C202.194 68.5228 202.776 67.5154 202.776 66.687L202.777 38.0437Z" fill="#FDFEFE" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
            <rect x="-0.432989" y="0.249986" width="70.3264" height="32.6058" rx="1.5" transform="matrix(-0.866009 -0.500028 3.18609e-05 1 172.472 52.9227)" fill="#FDFEFE" stroke="black" stroke-linecap="round" stroke-linejoin="round"></rect>
            <rect x="-0.866041" width="71.1827" height="33.5574" rx="1.5" transform="matrix(-0.866041 -0.499972 -0.866041 0.499972 201.594 36.3649)" fill="#FDFEFE" stroke="black" stroke-linecap="round" stroke-linejoin="round"></rect>
            <line x1="0.5" y1="-0.5" x2="22.5088" y2="-0.5" transform="matrix(4.37112e-08 1 1 -4.37112e-08 166.187 54.2144)" stroke="black" stroke-linecap="round"></line>
            <line x1="0.5" y1="-0.5" x2="22.5088" y2="-0.5" transform="matrix(4.37112e-08 1 1 -4.37112e-08 159.389 50.3274)" stroke="black" stroke-linecap="round"></line>
            <line x1="0.5" y1="-0.5" x2="22.5088" y2="-0.5" transform="matrix(4.37112e-08 1 1 -4.37112e-08 152.592 46.4355)" stroke="black" stroke-linecap="round"></line>
            <line x1="0.5" y1="-0.5" x2="22.5088" y2="-0.5" transform="matrix(4.37112e-08 1 1 -4.37112e-08 145.793 42.5486)" stroke="black" stroke-linecap="round"></line>
            <line x1="0.5" y1="-0.5" x2="22.5088" y2="-0.5" transform="matrix(4.37112e-08 1 1 -4.37112e-08 138.994 38.6565)" stroke="black" stroke-linecap="round"></line>
            <line x1="0.5" y1="-0.5" x2="22.5088" y2="-0.5" transform="matrix(4.37112e-08 1 1 -4.37112e-08 132.198 34.7693)" stroke="black" stroke-linecap="round"></line>
            <line x1="0.5" y1="-0.5" x2="22.5088" y2="-0.5" transform="matrix(4.37112e-08 1 1 -4.37112e-08 125.399 30.8774)" stroke="black" stroke-linecap="round"></line>
            <line x1="0.5" y1="-0.5" x2="22.5088" y2="-0.5" transform="matrix(4.37112e-08 1 1 -4.37112e-08 118.6 26.9905)" stroke="black" stroke-linecap="round"></line>
            <line x1="182.302" y1="53.8899" x2="182.302" y2="75.8987" stroke="black" stroke-linecap="round"></line>
            <line x1="189.1" y1="49.998" x2="189.1" y2="72.0069" stroke="black" stroke-linecap="round"></line>
            <line x1="195.897" y1="46.1111" x2="195.897" y2="68.1199" stroke="black" stroke-linecap="round"></line>
            <path d="M1.20272 107.955C1.2027 107.126 1.78426 106.79 2.50169 107.205L29.8204 122.978C30.5379 123.393 31.1195 124.4 31.1195 125.228L31.1204 153.872C31.1204 154.7 30.5389 155.036 29.8215 154.622L2.5027 138.848C1.78527 138.434 1.20366 137.426 1.20363 136.598L1.20272 107.955Z" fill="#FDFEFE" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
            <rect x="0.432989" y="0.249986" width="70.3264" height="32.6058" rx="1.5" transform="matrix(0.866009 -0.500028 -3.18609e-05 1 30.7564 123.267)" fill="#FDFEFE" stroke="black" stroke-linecap="round" stroke-linejoin="round"></rect>
            <rect x="0.866041" width="71.1827" height="33.5574" rx="1.5" transform="matrix(0.866041 -0.499972 0.866041 0.499972 0.885667 107.142)" fill="#FDFEFE" stroke="black" stroke-linecap="round" stroke-linejoin="round"></rect>
            <line x1="38.2942" y1="124.625" x2="38.2942" y2="146.634" stroke="black" stroke-linecap="round"></line>
            <line x1="45.0927" y1="120.738" x2="45.0927" y2="142.746" stroke="black" stroke-linecap="round"></line>
            <line x1="51.8896" y1="116.846" x2="51.8896" y2="138.855" stroke="black" stroke-linecap="round"></line>
            <line x1="58.6882" y1="112.959" x2="58.6882" y2="134.968" stroke="black" stroke-linecap="round"></line>
            <line x1="65.4875" y1="109.067" x2="65.4875" y2="131.075" stroke="black" stroke-linecap="round"></line>
            <line x1="72.2836" y1="105.179" x2="72.2836" y2="127.188" stroke="black" stroke-linecap="round"></line>
            <line x1="79.0822" y1="101.288" x2="79.0822" y2="123.297" stroke="black" stroke-linecap="round"></line>
            <line x1="85.8815" y1="97.4006" x2="85.8815" y2="119.409" stroke="black" stroke-linecap="round"></line>
            <line x1="0.5" y1="-0.5" x2="31.0729" y2="-0.5" transform="matrix(4.37112e-08 1 1 -4.37112e-08 16.1652 114.707)" stroke="black" stroke-linecap="round"></line>
          </svg>
        </div>

        <div>
        <div className='himg1'><img src={himg1} alt='img2' />STRIPE</div>
        <div className='himg2'><img className='himg2' src={himg2} alt='img3' />KLAVIYO</div>
        <div className='himg3'><img className='himg3' src={himg3} alt='img4' />SOCIAL</div>
        </div>

        <div className='headlesstext'>
          <h1>Headless<br /> Commerce</h1>
          <p style={{margin: "0"}}>Truly omni-channel with finely-crafted,
            extremely flexible and complete commerce API.
            Use your favorite CMS, CRM, fulfilment API,
            PIM, POS, ERP or innovations of
            tomorrow.</p>
        </div>
      </div>
    </div>
  )
}
