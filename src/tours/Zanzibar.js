import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Zanzibar1 from '../images/zanzibar1.jpg'
import Zanzibar2 from '../images/zanzibar2.jpg'
import Zanzibar3 from '../images/zanzibar3.jpg'


export default function Zanzibar() {
  return (
    <div className='Header'>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 carusel-image"
            src={Zanzibar1}
            alt="First slide"
          />
          <Carousel.Caption data-aos="fade-up" data-aos-duration="3000">
            <p>Zanzibar</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carusel-image"
            src={Zanzibar2}
            alt="Second slide"
          />

          <Carousel.Caption data-aos="fade-up" data-aos-duration="3000">
            <p>Zanzibar</p>
          </Carousel.Caption>
        </Carousel.Item>
        

        <Carousel.Item>
          <img
            className="d-block w-100 carusel-image"
            src={Zanzibar3}
            alt="First slide"
          />
          <Carousel.Caption data-aos="fade-up" data-aos-duration="3000">
            <p>Zanzibar</p>
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
            <h2>Toshkent shahridan Zanzibar shahriga yo'llanmalar va yo'llanmalar</h2>
            {/* <div className='about-info2__info'>
              <img src={Logo} alt="" />
              <div>
                <p className='about-info2__info-title'>«Trip My Dream»</p>
                <p className='about-info2__info-text'>«TMD» является собственностью компании OOO "TRIP MY DREAM", созданной опыт с 2014 году. С самого начала своего основания туристическая компания OOO "TRIP MY DREAM" определила для себя приоритет в индивидуальном подходе к каждому клиенту. И сегодня, компания предоставляет высочайший уровень сервиса и стремится обеспечить комфортный отдых каждому клиенту.</p>
              </div>
            </div> */}
            <p className='nha-texts'>
            Zanzibar yoki Unguja Afrikaning Sharqiy qirg'og'i yaqinidagi tanzaniyalik arxipelag va uning asosiy orolidir. Orolda tosh shahar – tarixiy savdo hududi mavjud bo'lib, u erda suahili va Islom madaniyatining ta'siri seziladi. Uning sariq ko'chalarida XIX asrning minoralari, o'yilgan portallari va arxitektura yodgorliklari mavjud – ulardan biri mo " jizalar uyi, sultonning sobiq saroyi. Nungvi va Kendva shimolidagi qishloqlar mehmonxonalar va keng plyajlar bilan mashhur.
            <br />
            <br />
            <br />
            Mamlakat: Tanzaniya <br />
            Umumiy maydoni: 2654 km2 <br />
            Eng katta Orol: Unguja <br />
            Orollar soni: 75 <br />
            --------------------------------
            <br />
            <br />
            
            Kanallarning birortasi ham ushbu nashr bilan ulashmadi Zanzibar Archipelago) - Hind okeanidagi 75 orollarining arxipelagi, zamonaviy Tanzaniyaning qarshisidagi Afrikaning Sharqiy qirg'og'i bo'ylab cho'zilgan. Arxipelagning bir qismi Zanzibar avtonomiyasiga kiritilgan.
            <br />
            <br />
            Geografiya-arxipelagning asosi 3 yirik orollaridir — Unguja (ko'pincha Zanzibar oroli deb ataladi), Pemba va mafiya — qolgan orollar juda kichik, ular atrofida joylashgan. Zanzibar shahri, eng katta shahar (257 yil uchun 2003 ming aholi), arxipelag, Unguja orolida joylashgan. Iqlim issiq va juda nam.
            <br />
            <br />
            Tarix-miosengacha, arxipelag Afrika qit'asining bir qismi edi. Bu haqda birinchi ma'lum yangiliklar X asrda, Shirazdan forslar paydo bo'lganida paydo bo'ladi. Mahalliy aholi hali ham "shirazi" deb nomlanadi, garchi fors ko'chmanchilari tezda assimilyatsiya qilingan bo'lsa-da. Ular Zanzibarga Islom olib kelishdi. Hozirgi kunda musulmonlar aholining 88% gacha, qolganlari esa Afrika butparast kultlari va nasroniylarning izdoshlari.
            <br />
            <br />
            O'rta asrlarda Zanzibarda qullar savdosi paydo bo'ldi, ular Afrika o'rmonida ushlandi. Vaqt o'tishi bilan qul savdosi mahalliy aristokratiyaning yadrosini tashkil etgan Ummon savdogarlarining qo'lida edi. 16-asrda Zanzibar Mombasa va Ormuz bilan birga Portugaliyaning mustamlaka mulklarining bir qismidir. XVII asrning o'rtalarida Ummon arablari evropalik mustamlakachilarning paydo bo'lishiga olib kelgan zarbadan qutqarildi va ularni Hind okeanining g'arbiy qismidan quvib chiqara boshladi. To'g'ri, Zanzibarda sultonning kuchi uzoq vaqt davomida nominal bo'lib qoldi.
            <br />
            <br />
            Tanzaniyada Zanzibar-1964 yilda Zanzibar va Tanganyika hukumati yagona Davlat — Tanzaniyani ("Tanganyika" va "Zanzibar"so'zlarining kombinatsiyasi) tashkil etish to'g'risida bitim imzoladilar.
            <br />
            <br />
            Zanzibarning yangi bayrog'i birinchi marta yanvar oyida 2005da ko'tarildi
Zanzibar orollari Zanzibar shahridagi ma'muriy markaz bilan Tanzaniyada yarim avtonomiyaga ega. 2005dan beri Zanzibar o'zining bayrog'i, parlamenti bor va uning prezidenti ham bor. 2010 yil 3 noyabrdan boshlab Ali Mohamed Shane hokimiyatga keldi.


            </p>
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}
