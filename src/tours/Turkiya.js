import React from 'react'
import Bg from '../images/turkiya-bg.jpg'
import turkiyainfo1 from '../images/tour-turkiya.jpg'
import turkiyainfo2 from '../images/turkiya-info2.jpg'

export default function Turkiya() {
  return (
    <div className='TourCountry'>
      <img src={Bg} alt="" />
      <div className='tour-info'>
        <div className="container">
          <h3 data-aos="fade-up" data-aos-duration="3000">Turkiya</h3>
        </div>
      </div>
      <div className="blur"></div>

      <div className="country-info">
        <div className="container">
          <div className='country-title'>
            <h2>MAVSUN OLDINDAN CHEGIRMALAR</h2>
          </div>

          <div className="country-info__info">
            <img src={turkiyainfo1} alt="" />
            <div className='country-info__info-texts'>
              <span>10 Kun</span>
              <p>Turkiyaga Mavsun oldindan chegitmalar</p>
              <p>Antalya, Kemer, Belek, Alaniya, Side, Lara, Marmaris, Bodrum va boshqa dam olish <br /> maskanlarini arzon narxlarda bron qilish uchun Turkiyani raqobatbardosh <br /> narxlarda buyurtma qilishga shoshiling!</p>
              <p>      
                05.15.2020  05.24.2020 (Kemer) <br />
                ⭐️ARMAS LUXURY RESORT & VILLAS 5*   550$ dan <br />
                      05.15.2020  05.24.2020 (Belek) <br />
                ⭐️ADORA GOLF RESORT 5*   580$ dan <br />
                      05.15.2020  05.24.2020 (Antaliya) <br />
                ⭐️AMARA CENTRO RESORT 5*   490$ dan <br />
                      05.15.2020  05.24.2020 (Kemer) <br />
                ⭐️ ALKOCLAR eksklyuziv KEMER 5*   590$ dan
              </p>
              <p>———————————————————————— <br />
                -  9 kecha / 10 kun <br />
                -  Nonushta 3 mahal <br />
                -  Transport <br />
                -  Sug'urta
              </p>

              <p>❗️ Bir kishi uchun ikki kishilik joy</p>

              <p>Qo'shimcha pullik: <br />
  -  Xizmat ko'rsatuvchi kompaniya: <br />
  -  AviaBelet</p>



            </div>
          </div>

          <div className="country-info__info">
            <img src={turkiyainfo2} alt="" />
          </div>


          
        </div>
      </div>
    </div>
  )
}
