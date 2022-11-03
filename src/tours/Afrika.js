import React from 'react'
import Bg from '../images/tour-afrika.jpg'
import afrikainfo1 from '../images/afrika-info1.jpg'
import afrikainfo2 from '../images/afrika-info2.jpg'


export default function Afrika() {
  return (
    <div className='TourCountry'>
      <img src={Bg} alt="" />
      <div className='tour-info'>
        <div className="container">
          <h3 data-aos="fade-up" data-aos-duration="3000">Afrikaga tur</h3>
        </div>
      </div>
      <div className="blur"></div>

      <div className="country-info">
        <div className="container">
          <div className='country-title'>
            <h2>TUR AFRIKAGA</h2>
          </div>

          <div className="country-info__info">
            <img src={Bg} alt="" />
            <div className='country-info__info-texts'>
              <span>9 Kun</span>
              <h3>ZIMBABVE VIKTORIYA SHARSHARASI</h3>

              <p>
                Tur  Afrika <br />
                9 kun / 8 kecha
              </p>

              <p>
                Uchush voqti: <br />
                01 aprel. – 31 sentyabr 2020: past mavsum
              </p>

              <p>
                Yo'nalish: <br />
                Zimbabve-Victoria Falls-Chobe Park-Botsvana - Safari-Cape Town-Cape <br /> Town-Cape Town-Cape Town️ ️
              </p>

              <p>
                1 kun Zimbabvega xush kelibsiz! <br />
                Victoria sharshara 2-kuni. <br />
                3 kun Chobe Park. Hayvon dunyosida <br />
                4 kun Chobe Park, Botsvana. <br />
                Botsvanada 5 kunlik Safari <br />
                6 kunlik Cape Town Safari <br />
                7 kun Cape Town dengiz mushuklarini tomosha qiladi <br />
                8 kunlik Cape Town, bepul kun <br />
                Cape Townning 9 kuni, uyga jo'nab ketish
              </p>

              <p>
                Egaligingizni tasdiqlang qo'shimcha imkoniyatlar uchun <br />
                -Ikki mahalliy turar joy bilan bir kishi uchun narx
              </p>
              <p>
                Narxiga kiradi: <br />
                ►Mehmonxonalarni joylashtirish (3*) <br />
                ►Oziq-ovqat: Cape Town va palapartishlikda: har kuni nonushta; <br />
                ► Botsvana safari uchun chiqish: <br />
                ► 2 dasturi ekskursiyalar <br />
                ► Rus tilida so'zlashuvchi qo'llanma xizmatlari <br />
                ► Dasturga muvofiq Janubiy Afrika, Zimbabve va Botsvanadagi barcha transferlar
              </p>

              <p>
                ️ ️ Bepul: <br />
                ►24-soat rus tilida qo'llab-quvvatlash
              </p>

              <p>
                Egaligingizni tasdiqlang qo'shimcha imkoniyatlar uchun: <br />
                ► Xalqaro va ichki reyslar; <br />
                ► Viza olish <br />
                ► Dasturda ko'zda tutilmagan qo'shimcha ekskursiyalar; <br />
                ► Tibbiy sug'urta
              </p>
              
            </div>
          </div>

          <div className="country-info__info">
            <img src={afrikainfo1} alt="" />
          </div>

          <div className="country-info__info">
            <img src={afrikainfo2} alt="" />
          </div>
          
        </div>
      </div>
    </div>
  )
}
