import React, { useEffect } from 'react'
import Logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { TRIP_LANGUAGE } from '../tools/constants'
import { getLanguage, getText } from '../locales'

export default function Navbar() {

  const changeLanguage = (e) => {
    localStorage.setItem(TRIP_LANGUAGE, e)
    document.location.reload(true)
  }

  useEffect(() => {
    // changeLanguage()
  }, [])

  return (
    <div className='Navbar'>
      <div className="containerr">
        <div className="nav-menu">
          <Link to="/"><img src={Logo} alt="" /></Link>

          <ul className='nav-list'>
            <li className='nav-item'><Link to="/">{getText('home')}</Link></li>
            <li className='nav-item nav-dropdown'>
              <Link to='/tours'>{getText('tours')}</Link>

              <div className="t-dropdown">
                <Link to='/dubai'>Dubay</Link>
                <Link to='/yaponiya'>Chernagoriya</Link>
                <Link to='/yevropa'>Grant tur Yevropa</Link>
                <Link to='/vinetsiya'>Italiya - Vinetsiya</Link>
                <Link to='/fransiya'>Italiya - Fransiya</Link>
                <Link to='/misr'>Misr</Link>
                <Link to='/malasia'>Malayziya</Link>
                <Link to='/usa'>A.Q.SH</Link>
                <Link to='/azerbaijan'>Azarbayjon</Link>
                <Link to='/vetnam'>Vetnam</Link>
                <Link to='/filandiya'>Finlandiya - Shvetsiya</Link>
                <Link to='/sharqiyyevropa'>Chexiya</Link>
                <Link to='/avstriya'>Avstriya</Link>
                <Link to='/sanatoriya'>Karkovy vary</Link>
                <Link to='/yevropaga-sayohatlar'>Yevropaga sayohatlar</Link>
                <Link to='/kruiz'>Kruiz O'rtayer dengizi Barselonadan</Link>
                <Link to='/dubay'>Dubayga eng arzon turlar</Link>
                <Link to='/gretsiya'>Gretsiya</Link>
                <Link to='/afrika'>Afrika</Link>
                <Link to='/turkey'>Turkiya</Link>
                <Link to='/yevropaga-sayohatlar'>Yevropaga turlar</Link>




              </div>
            </li>
            <li className='nav-item'><Link to='/services'>{getText('services')}</Link></li>
            <li className='nav-item'><Link to='/blogs'>{getText('blogs')}</Link></li>
            <li className='nav-item'><Link to='/about'>{getText('about')}</Link></li>
            <li className='nav-item'><Link to='/contact'>{getText('contact')}</Link></li>
            <li className='nav-item langWrap'>
              <h5>
                {getLanguage() === 'en' ? <><i><img src="/en.svg" alt="" /></i> English</> : getLanguage() === 'uz' ? <><i><img src="/uz.svg" alt="" /></i> O'zbek</> : <><i><img src="/ru.svg" alt="" /></i> Русский</>}
              </h5>
              <div className="wrap">

                <p onClick={() => changeLanguage('uz')}><i><img src="/uz.svg" alt="" /></i> O'zbek</p>
                <p onClick={() => changeLanguage('ru')}><i><img src="/ru.svg" alt="" /></i> Русский</p>
                <p onClick={() => changeLanguage('en')}><i><img src="/en.svg" alt="" /></i> English</p>

              </div>
            </li>
          </ul>

        </div>
      </div>
    </div>
  )
}
