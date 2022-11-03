import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Usa from '../images/usa.jpg'
import Tailand from '../images/tailand.jpg'
import Europe from '../images/yevropa-bg.jpg'
import Dubai from '../images/dubai.jpg'
import Misr from '../images/misr.jpg'
import Malasia from '../images/malasia.jpg'
import { TRIP_LANGUAGE } from '../tools/constants'
import { getLanguage, getText } from '../locales'
import { useEffect } from 'react';

export default function Header() {

  const changeLanguage = (e) => {
    localStorage.setItem(TRIP_LANGUAGE, e)
    document.location.reload(true)
  }

  useEffect(() => {
    // changeLanguage()
  }, [])
  return (
    <div className='Header'>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 carusel-image"
            src={Usa}
            alt="First slide"
          />
          <Carousel.Caption data-aos="fade-up" data-aos-duration="3000">
            <h3>{getText('tours')}</h3>
            <p>{getText('to_usa')}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carusel-image"
            src={Tailand}
            alt="Second slide"
          />

          <Carousel.Caption data-aos="fade-up" data-aos-duration="3000">
            <h3>{getText('tours')}</h3>
            <p>{getText('to_thailand')}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carusel-image"
            src={Europe}
            alt="Third slide"
          />

          <Carousel.Caption data-aos="fade-up" data-aos-duration="3000">
            <h3>{getText('tours')}</h3>
            <p>
              {getText('to_europe')}
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carusel-image"
            src={Dubai}
            alt="First slide"
          />
          <Carousel.Caption data-aos="fade-up" data-aos-duration="3000">
            <h3>{getText('tours')}</h3>
            <p>
              {getText('to_dubai')}
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carusel-image"
            src={Misr}
            alt="First slide"
          />
          <Carousel.Caption data-aos="fade-up" data-aos-duration="3000">
            <h3>{getText('tours')}</h3>
            <p>
                {getText('to_egypt')}
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carusel-image"
            src={Malasia}
            alt="First slide"
          />
          <Carousel.Caption data-aos="fade-up" data-aos-duration="3000">
            <h3>{getText('tours')}</h3>
            <p>
              {getText('to_malasia')}
            </p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  )
}
