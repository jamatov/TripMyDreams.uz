import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Nhatrag1 from '../images/nha-trag1.jpg'
import Nhatrag2 from '../images/nha-trag2.jpg'
import Nhatrag4 from '../images/nha-trag4.jpg'



export default function NhaTrang() {
  return (
    <div className='Header'>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 carusel-image"
            src={Nhatrag1}
            alt="First slide"
          />
          <Carousel.Caption data-aos="fade-up" data-aos-duration="3000">
            <p>Nha Trang</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carusel-image"
            src={Nhatrag2}
            alt="Second slide"
          />

          <Carousel.Caption data-aos="fade-up" data-aos-duration="3000">
            <p>Nha Trang</p>
          </Carousel.Caption>
        </Carousel.Item>
        

        <Carousel.Item>
          <img
            className="d-block w-100 carusel-image"
            src={Nhatrag4}
            alt="First slide"
          />
          <Carousel.Caption data-aos="fade-up" data-aos-duration="3000">
            <p>Nha Trang</p>
          </Carousel.Caption>
        </Carousel.Item>

        

      </Carousel>
      <div className='Aboutinfo'>
      <div className="container">
        <div className="about-info">

          <div className="about-info1">
            <p>Admin</p>
          </div>

          <div className="about-info2"> 
            <h2>Biz Nha Trangga sayohatni taklif qilamiz</h2>
            {/* <div className='about-info2__info'>
              <img src={Logo} alt="" />
              <div>
                <p className='about-info2__info-title'>«Trip My Dream»</p>
                <p className='about-info2__info-text'>«TMD» является собственностью компании OOO "TRIP MY DREAM", созданной опыт с 2014 году. С самого начала своего основания туристическая компания OOO "TRIP MY DREAM" определила для себя приоритет в индивидуальном подходе к каждому клиенту. И сегодня, компания предоставляет высочайший уровень сервиса и стремится обеспечить комфортный отдых каждому клиенту.</p>
              </div>
            </div> */}
            <p className='nha-texts'>
              Nha Trang - Vetnamning janubidagi qirg'oq kurort shaharchasi, plyajlari, sho'ng'in joylari va orollari bilan mashhur. Asosiy plyaj Chang Fu ko'chasi bo'ylab joylashgan. Shuningdek, mehmonxonalar va dengiz mahsulotlari restoranlari mavjud. Kabelli mashina yaqin atrofdagi Che oroliga olib boradi va Oy va Tam orollaridagi qo'riqxonalarga marjon riflari bo'lgan qayiq orqali etib borish mumkin.
              <br />
              <br />
              <br />
              Pochta indeksi: 625080 <br />
              Telefon kodi: +84 258 <br />
              Mahalliy vaqt: yakshanba 23:22 <br />
              Viloyati: Xanxo Hoa <br />
              <br />
              --------------------------------------------- <br />
              Nha Trang (Vetnamcha Nha Trang) - Vetnam markazidagi Xanxo Hoa viloyatining poytaxti. Janubiy Xitoy dengizi sohilida, Xanoydan 1280 km va Xo Chi Min shahridan 439 km masofada joylashgan [1]. Vetnamdagi xorijiy sayyohlar orasida eng mashhur kurortlardan biri [2].
              <br />
              <br />
              Tarix tomonidan asos solingan Tami, u Tampa shtatining bir qismi edi va Kauthara deb nomlandi [3] Bir versiyaga ko'ra, "Nha Trang" nomi Tyama kelib chiqishi bilan bog'liq bo'lib, u turgan daryoning Tiam nomini Vetnam talqini - Yachang [4]. Ilgari, Nha Trang dengiz qirg'og'ida oddiy baliq ovlash shahri edi, ammo frantsuz Indochinasi davridan boshlab shahar kurort sifatida rivojlana boshladi va endi u mamlakatning kurort markazlaridan biriga aylandi.
              Shahar aholisi baliq ovlash, baliqni qayta ishlash va sayyohlik xizmatlari bilan shug'ullanadi. Nha Trangda kichik dengiz porti bor.
              <br />
              <br />
              Aeroport - Eng yaqin aeroport - Kam-Ranh xalqaro aeroporti, Nha Trangdan 50 kilometr narida Kamrani shahrida joylashgan. Aeroportni Vetnam Xalq armiyasi uchuvchilari o'qitiladigan shaharning markaziy kvartalidagi Nha Trang aviabazasi bilan adashtirmaslik kerak.
              <br />
              <br />
              Nha Trang turizm-kurorti imperatorlar davrida va Vetnam Frantsiya mustamlakasi bo'lgan paytda (frantsuz Indochinasining bir qismi) bo'lgan. Unga Xi Chi Min shahrining aholisi va butun dunyodan sayyohlar tashrif buyurishadi. <br />
              2013 yildan beri Nha Trang mehmonxonalar va ko'p qavatli uylarni faol ravishda qurmoqda.
              <br />
              <br />
              Diqqatga sazovor joylar: <br />
              * Tiam madaniyatining Ponagar minoralari <br />
              * Villas [vi] Bao Dai <br />
              * Baho sharsharasi (Ba Hồ) <br />
              * Yang ko'rfazi sharsharasi <br />
              * Tepba loy klinikasi (Thá Bà)  <br />
              * Nha Trang shahridagi Okeanografiya instituti [vi] <br />
              * Honkyong Stones [vi] <br />
              * Nha Trang sobori <br />
              * Longshon Pagoda <br />
              * Tuzli maydonlar  <br />
              * Che аралidagi Winperl kurorti dengizdagi eng uzun simli avtomobil bilan br
              <br />
              <br />
              Shaharning plyaji munitsipalitet bo'lib, qirg'oqlarning faqat kichik qismlari xususiy mulkka ega. Shaharda ikkita mineral-loy buloq va bitta loy vannasi mavjud.
            
            
            
            
            
            </p>
          </div>

        </div>
      </div>
    </div>
    </div>
    
  )
}
