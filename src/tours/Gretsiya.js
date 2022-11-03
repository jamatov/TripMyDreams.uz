import React from 'react'
import Bg from '../images/gretsiya.jpg'
import gretsiyainfo1 from '../images/gretsiya-info1.jpg'
import gretsiyainfo2 from '../images/gretsiya-info2.jpg'



export default function Gretsiya() {
  return (
    <div className='TourCountry'>
      <img src={Bg} alt="" />
      <div className='tour-info'>
        <div className="container">
          <h3 data-aos="fade-up" data-aos-duration="3000">Gretsiya Turi</h3>
        </div>
      </div>
      <div className="blur"></div>

      <div className="country-info">
        <div className="container">
          <div className='country-title'>
            <h2>TUR GRETSIYAGA</h2>
          </div>

          <div className="country-info__info">
            <img src={Bg} alt="" />
            <div className='country-info__info-texts'>
              <span>8 Kun</span>
              <h3>AFINA</h3>

              <p>
                Yunoniston tarixining eng yaxshi laxzalari <br />
                8 kun / 7 kechaga  <br />
                Ketish sanasi: <br />
                06.03.2020 dan 13.03.2020 <br />
                13.03.2020 dan 20.03.2020 <br />
                20.03.2020 dan 27.03.2020 <br />
                27.03.2020 dan 03.04.2020
              </p>

              <p>Yo'l: ➡️Atina - Aegina - Poros - Gidra - Keyp Sionion - Delfi - Kalambaka - Meteori - <br /> Mikeni - Nafplion - Epidavr - Afina⬅️</p>
              <p>
                1-kun Afina <br />
                2-kun Delfi <br />
                3-kun Afina <br />
                4-kun Delfi Kalambaka <br />
                5-kun Afina Meteorlari <br />
                6-kun Mikeni (Gretsiya) Nafplion (Gretsiya) Epidavros (Gretsiya) <br />
                7 kunlik Afina <br />
                8 kunlik Afina <br />
              </p>

              <p>
                Turning narxi: 1085 $ <br />
                - Ikkitadan turar joy uchun kishi boshiga narx! 
              </p>

              <p>
                Narx ichiga oladi:  <br />
                ►Mehmonxona 3* <br />
                ►Transfer aeroporti-mehmonxona-aeroport <br />
                ►Dastur bo'yicha ekskursiya  <br />
                ►Rus tilida so'zlashadigan git xizmatlari <br />
                ►Qulay avtobusda tur bo'ylab yo'nalish.
              </p>

              <p>
                Qo'shimcha pul to'lanadi: <br />
                ►Afinaga aviachiptalar: <br />
                ►Viza xizmatlari:  <br />
                ►Tibbiy sug'urta: <br />
                ►Tungi transfer 23:00 - 05:30 <br /> 
                ►Muzeylarga kirish uchun to'lovlari <br />
                ►Shahar soliqlari.
              </p>
              
            </div>
          </div>

          <div className="country-info__info">
            <img src={gretsiyainfo1} alt="" />
          </div>

          <div className="country-info__info">
            <img src={gretsiyainfo2} alt="" />
          </div>
          
        </div>
      </div>
    </div>
  )
}
