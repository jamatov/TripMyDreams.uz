import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Shrilanka1 from '../images/shrilanka1.jpg'
import Shrilanka2 from '../images/shrilanka2.jpg'
import Shrilanka3 from '../images/shrilanka3.jpg'
import Shrilanka4 from '../images/shrilanka4.jpg'


export default function ShriLanka() {
  return (
    <div className='Header'>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 carusel-image"
            src={Shrilanka4}
            alt="First slide"
          />
          <Carousel.Caption data-aos="fade-up" data-aos-duration="3000">
            <p>Shri-Lanka</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carusel-image"
            src={Shrilanka2}
            alt="Second slide"
          />

          <Carousel.Caption data-aos="fade-up" data-aos-duration="3000">
            <p>Shri-Lanka</p>
          </Carousel.Caption>
        </Carousel.Item>
        

        <Carousel.Item>
          <img
            className="d-block w-100 carusel-image"
            src={Shrilanka3}
            alt="First slide"
          />
          <Carousel.Caption data-aos="fade-up" data-aos-duration="3000">
            <p>Shri-Lanka</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carusel-image"
            src={Shrilanka1}
            alt="First slide"
          />
          <Carousel.Caption data-aos="fade-up" data-aos-duration="3000">
            <p>Shri-Lanka</p>
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
              <h2>Ajoyib Shri-Lanka</h2>
              {/* <div className='about-info2__info'>
                <img src={Logo} alt="" />
                <div>
                  <p className='about-info2__info-title'>«Trip My Dream»</p>
                  <p className='about-info2__info-text'>«TMD» является собственностью компании OOO "TRIP MY DREAM", созданной опыт с 2014 году. С самого начала своего основания туристическая компания OOO "TRIP MY DREAM" определила для себя приоритет в индивидуальном подходе к каждому клиенту. И сегодня, компания предоставляет высочайший уровень сервиса и стремится обеспечить комфортный отдых каждому клиенту.</p>
                </div>
              </div> */}
              <p className='nha-texts'>
                Shri-Lanka (ilgari Ceylon) Hindiston janubi – Sharqiy sohilidagi Hind okeanida joylashgan Orol davlatidir. Mamlakat o'zining turli landshaftlari bilan mashhur: uning hududida tropik o'rmonlar va qurg'oqchil tekisliklar, tog ' platolari va qumli plyajlar mavjud. Shri-Lankada V asrdagi Sigiriya buddist qal'asining xarobalarini saroy qoldiqlari va katta freskalar bilan ziyorat qilish kerak. Shri-Lankaning qadimiy poytaxti Anuradhapurada 2000 yildan kattaroq qadimiy me'moriy yodgorliklar saqlanib qolgan.
                <br />
                <br />
                Poytaxtlar: Kolombo, Shri Jayavardenepura-Kotte <br />
                Valyuta: Shri-Lanka rupiyasi <br />
                Vaqt zonalari: +5:30 <br />
                Prezident: Gotabaya Rajapaksa <br />
                <br />
                <br />
                -----------------------------------------------------------------
                <br />
                <br />
                SHRI-LANKAGA TASHRIF BUYURISH UCHUN 7 SABAB!
                <br />
                <br />
                Shri-Lanka qiziqarli va murakkab tarixga ega mamlakatdir. Bir marta u Ceylon deb ataldi va mustaqillikka uzoq yo'lni bosib o'tdi. Yaxshiyamki, endi bu orqada va Orol sayyohlar uchun haqiqiy tropik jannatga aylandi. Va bu erda siz tashrif buyurishingiz kerak bo'lgan bir necha sabablar bor.
                <br />
                <br />
                1. Turizm orqali tinchlik <br />
                26 yil ichida nihoyasiga etgan 2009 yil fuqarolik urushidan so'ng, Shri-Lanka nozik bahor gullari sifatida gullab-yashnamoqda. Turizm mahalliy va xalqaro sayohatchilarni jalb qilish orqali mamlakatni birlashtirishga yordam beradi, bu esa sobiq mojarolar zonalarining iqtisodiy o'sishi va rivojlanishiga yordam beradi. Trincomalee va orolning Sharqiy qismida joylashgan boshqa taniqli joylarni o'z ichiga oladi.
                <br />
                <br />
                2. Qarshilik <br/>
                Shri-Lanka 1990-larning oxirida milliy ekoturizmni yaratishda ishtirok etgan bir necha mamlakatlar orasida. Bugungi kunda Jetwing Hotels kabi mahalliy oilaviy kompaniyalar ekologik turizm bo'yicha etakchi hisoblanadi. Misol uchun, Hotel Jetwing Vil Uyana, milliy meros va tabiatni saqlab qolish va birlashtirish vazifasi deb hisoblaydi. Tabiiy yashash muhitining ikki o'ndan ortiq qulay kulbalarini joylashtirishni taklif qiladi.
                <br />
                <br />
                3. Biologik xilma-xillik kulrang Laurie <br />
                Shri-Lanka juda kichik bo'lsa-da, orolda iyul-sentyabr oylarida "Gathering"deb nomlangan joyda ko'rish mumkin bo'lgan yovvoyi fillarning podalari yashaydi. Orolda noyob hayvon turi – mayda kulrang nozik Lauri hayotga qaytdi. Yalening milliy bog'ida leoparlar, buffalolar, ayiqlar va turli qushlar ajoyib his qiladilar. Va yerdagi eng katta sutemizuvchilar — ko'k kitlar-Shri-Lanka qirg'oqlariga yaqin ko'chib yurishadi.
                <br />
                <br />
                4. Madaniy boylik <br />
                Ushbu mamlakatda tashkil etilgan madaniy festivallar uni juda mashhur qildi. Misol uchun, esal Peraherni Kandy shahrida nishonlash o'n kun davom etadi. Bu vaqt mobaynida epik miqyosdagi paradlar fillar, barabanchilar, kostyum raqqoslari va boshqa ko'p narsalarni namoyish etadi. <br />
                Bundan tashqari, Shri-Lanka YUNESKOning sakkizta Jahon merosi ro'yxatiga ega. Ular orasida Anuradhapura va Sigiriya qadimiy shahri, V asrda Shoh Kassapa I tomonidan qurilgan mustahkam saroy, sherning katta tog'ining tepasida joylashgan.
                <br />
                <br />
                5. Oddiylik, qulaylik va mehmondo'stlik
                Portrait yosh smiling odam. Shri Lanka
                Orolning barcha go'zalliklariga qoyil qolish uchun sayohatchilar Shri-Lankaning ko'p qismini o'z ichiga olgan jamoat transportidan osongina foydalanishlari mumkin. <br />
                Agar sayyoh ko'proq qulayliklarga muhtoj bo'lsa, unda xususiy haydovchi bilan mashina ijaraga olish AQShda avtomobilni ijaraga olishdan ko'ra qimmatroq bo'lmaydi. <br />
                Mehmondo'stlikka kelsak, mamlakat aholisi do'stona ekanini aytish uchun hech narsa demaydi. Issiqlik va Mehribonlik har bir orolning xarakterini belgilaydi.
                <br />
                <br />
                6. Bemaqsad qilish <br />
                Shri-Lanka va hokazolar <br />
                Shri-Lanka sörfçü uchun jannatdir. G'arbiy sohilida yil bo'yi to'lqinlar, qumli sayohlarni bilan Arugam janubi-Sharqiy bay yurish uchun, byudjet uy-joy yoki okean bo'yicha Kottukal butun uy-har bir narsa, jon, siz istagan.
                <br />
                <br />
                7. Oshxona <br />
                Shri Lanka mahorat choy <br />
                Portugal, golland va ingliz mustamlakasi davrlari Orol uchun behuda emas edi. Osiyo, Evropa va uzoq Sharqning ta'siri Shri-Lanka oshxonasiga ziravorlar keltirdi. Ayniqsa, mamlakatda muvaffaqiyatli o'sib borayotgan va ko'plab taomlarga qo'shilgan doljin xalqini sevib qoldi.


              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
