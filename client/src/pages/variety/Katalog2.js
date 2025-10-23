// import { Link, Outlet} from "react-router-dom";
// import { Swiper } from 'swiper/react';
// import classes from "../Header.module.css"
// import "../header.css"
// import img3 from "../../Fa_Fa/ei_arrow-up.png"
// import img4 from "../../Fa_Fa/ei_arrow-up (1).png"
// import Footer from "../Footer";


// function Katalog2() {
//   return (

// <main class={classes.main}>
//     <section class={`${classes.section_mangal} ${classes.container}`}>
//       <div class={classes.mangal_img}>
//         <div class={classes.mangal_img1}>
//           <img src="" alt="" class={classes.mangali_imgg}/>
//         </div>
//         <div class={`${classes.swiper} ${classes.mySwiper}`}>
//           <div class={classes.swiper_wrapper}>
//             <div class={classes.swiper_slide}>
//               <img src=""  alt = ""/>
//             </div>
//             <div class={classes.swiper_slide}>
//               <img src="" alt="" />
//             </div>
//             <div class={classes.swiper_slide}>
//               <img src=""  alt=""/>
//             </div>
//             <div class={classes.swiper_slide}>
//               <img src="" alt="" />
//             </div>
//             <div class={classes.swiper_slide}>
//               <img src="" alt="" />
//             </div>
//             <div class={classes.swiper_slide}>
//               <img src="" alt=""/>
//             </div>
//             <div class={classes.swiper_slide}>
//               <img src="" alt="" />
//             </div>
//             <div class={classes.swiper_slide}>
//               <img src="" alt=""/>
//             </div>
//             <div class={classes.swiper_slide}>
//               <img src="" alt="" />
//             </div>
//           </div>
//           <div class={classes.swiper_pagination}></div>
//         </div>
//       </div>

//       <div class={classes.mangal_img2}>
//         <div class={classes.mangali_anun}>
//           <h5 class={classes.anun_title5}>Мангалы</h5>
//           <h2 class={classes.anun_title2}>Мангал с крышей Классик</h2>
//           <div class={classes.fafa_astx}>
//             <Link class="fa fa-star-o" aria-hidden="true"></Link>
//             <Link class="fa fa-star-o" aria-hidden="true"></Link>
//             <Link class="fa fa-star-o" aria-hidden="true"></Link>
//             <Link class="fa fa-star-o" aria-hidden="true"></Link>
//             <Link class="fa fa-star-o" aria-hidden="true"></Link>
//           </div>
//           <h2 class={classes.anun_title3}>41 500р./1 шт <span><del>50 000р</del></span></h2>
//         </div>
//         <div class={classes.mangal_btn}>
//           <button class={classes.qanak_btn}>
//             <p class={classes.qanak_text}>
//               <Link class="fa fa-angle-left" aria-hidden="true"></Link>
//               1
//               <Link class="fa fa-angle-right" aria-hidden="true"></Link>
//             </p>
//           </button>
//           <button class={classes.kupit_btn}>Купить сейчас</button>
//         </div>
//         <div class={classes.mangali_masin}>
//           <p class={classes.masin_text}><i class="fa fa-heart-o" aria-hidden="true"></i>Сохранить</p>
//           <p class={classes.masin_text}><i class="fa fa-share-alt" aria-hidden="true"></i>Поделиться</p>
//           <h2 class={classes.masin_title2}>Детали</h2>
//           <p class={classes.masin_text2}>В комплект входит: Кочерга, Совок, Подказанник, Жаровня 1.36 м.</p>
//           <div class={classes.parametr_mangal}>
//             <div class={classes.materyal}>
//               <h3 class={classes.materyal_title}>Материал:</h3>
//                 <p class={classes.chapser_text}>Сталь</p>
//             </div>
//             <div class={classes.materyal}>
//               <h3 class={classes.materyal_title}>Толщина материала:</h3>
//                 <p class={classes.chapser_text}>3 мм</p>
//             </div>
//             <div class={classes.materyal}>
//               <h3 class={classes.materyal_title}>Высота:</h3>
//                 <p class={classes.chapser_text}>2.3 м</p>
//             </div>
//             <div class={classes.materyal}>
//               <h3 class={classes.materyal_title}>Ширина:</h3>
//                 <p class={classes.chapser_text}>1.2 м</p>
//             </div>
//             <div class={classes.materyal}>
//               <h3 class={classes.materyal_title}>Длина:</h3>
//                 <p class={classes.chapser_text}>2 м</p>
//             </div>
//             <div class={classes.materyal}>
//               <h3 class={classes.materyal_title}>Высота до мангала:</h3>
//                 <p class={classes.chapser_text}>0.85</p>
//             </div>
//             <div class={classes.materyal}>
//               <h3 class={classes.materyal_title}>Серия:</h3>
//                 <p class={classes.chapser_text}>Классика</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//     <section class={`${classes.section_mangal2} ${classes.container}`}>
//       <div class={classes.section_mangali2}>
//         <h2 class={classes.mangali2_title}>Популярные товары</h2>
//         <div class={classes.mangali2_fafa}>
//           <img src = {img3} alt="" class={classes.fa}/>
//           <img src = {img4} alt="" class={classes.fa}/>
//       </div>
//       </div>
//       <div class={classes.section_mangali3}>
//         <div class={classes.mangali3}>
//           <div class={classes.mangali3_img}>
//             <div class={classes.skitka}>
//               <p class={classes.skitka_text}>-50%</p>
//               <i class="fa fa-heart srt_fa" aria-hidden="true"></i>
//             </div>
//           </div>
//           <div class={classes.mangali3_parametr}>
//             <div class={classes.mangali3_parametr2}>
//               <p class={classes.mangali3_text}>Мангал с крышей Рублевка</p>
//               <div class={classes.mangali3_astx}>
//                 <Link class="fa fa-star-o" aria-hidden="true"></Link>
//                 <Link class="fa fa-star-o" aria-hidden="true"></Link>
//                 <Link class="fa fa-star-o" aria-hidden="true"></Link>
//                 <Link class="fa fa-star-o" aria-hidden="true"></Link>
//                 <Link class="fa fa-star-o" aria-hidden="true"></Link>
//                 <div class={classes.qaniHat}>
//                   <p class={classes.qaniHat_text}>(27)</p>
//                 </div>
//               </div>
//             </div>
//             <div class={classes.mangali3_gin}>
//               <p class={classes.mangali3Gin_text}>40.000 р</p>
//               <p class={classes.mangali3Gin_text2}><del>50.000 р</del></p>
//             </div>
//           </div>
//           <button class={classes.mangali3_btn}>Купить сейчас</button>
//         </div>
//         <div class={classes.mangali3}>
//           <div class={classes.mangali3_img}>
//             <div class={classes.skitka}>
//               <p class={classes.skitka_text}>-50%</p>
//               <Link class="fa fa-heart srt_fa1" aria-hidden="true"></Link>
//             </div>
//           </div>
//           <div class={classes.mangali3_parametr}>
//             <div class={classes.mangali3_parametr2}>
//               <p class={classes.mangali3_text}>Мангал с крышей Рублевка</p>
//               <div class={classes.mangali3_astx}>
//                 <Link class="fa fa-star-o" aria-hidden="true"></Link>
//                 <Link class="fa fa-star-o" aria-hidden="true"></Link>
//                 <Link class="fa fa-star-o" aria-hidden="true"></Link>
//                 <Link class="fa fa-star-o" aria-hidden="true"></Link>
//                 <Link class="fa fa-star-o" aria-hidden="true"></Link>
//                 <div class={classes.qaniHat}>
//                   <p class={classes.qaniHat_text}>(27)</p>
//                 </div>
//               </div>
//             </div>
//             <div class={classes.mangali3_gin}>
//               <p class={classes.mangali3Gin_text}>40.000 р</p>
//               <p class={classes.mangali3Gin_text2}><del>50.000 р</del></p>
//             </div>
//           </div>
//           <button class={classes.mangali3_btn}>Купить сейчас</button>
//         </div>
//         <div class={classes.mangali3}>
//           <div class={classes.mangali3_img}>
//             <div class={classes.skitka}>
//               <p class={classes.skitka_text}>-50%</p>
//               <Link class="fa fa-heart srt_fa" aria-hidden="true"></Link>
//             </div>
//           </div>
//           <div class={classes.mangali3_parametr}>
//             <div class={classes.mangali3_parametr2}>
//               <p class={classes.mangali3_text}>Мангал с крышей Рублевка</p>
//               <div class={classes.mangali3_astx}>
//                 <Link class="fa fa-star-o" aria-hidden="true"></Link>
//                 <Link class="fa fa-star-o" aria-hidden="true"></Link>
//                 <Link class="fa fa-star-o" aria-hidden="true"></Link>
//                 <Link class="fa fa-star-o" aria-hidden="true"></Link>
//                 <Link class="fa fa-star-o" aria-hidden="true"></Link>
//                 <div class={classes.qaniHat}>
//                   <p class={classes.qaniHat_text}>(27)</p>
//                 </div>
//               </div>
//             </div>
//             <div class={classes.mangali3_gin}>
//               <p class={classes.mangali3Gin_text}>40.000 р</p>
//               <p class={classes.mangali3Gin_text2}><del>50.000 р</del></p>
//             </div>
//           </div>
//           <button class={classes.mangali3_btn}>Купить сейчас</button>
//         </div>
//       </div>
//     </section>
//     <Footer/>
//     <Outlet/>
//   </main>
//   )

// }


// var swiper = new Swiper(".mySwiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//       rotate: 50,
//       stretch: 0,
//       depth: 100,
//       modifier: 1,
//       slideShadows: true,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//     },
//   });

// export default Katalog2;

///////////////////////////////////////////////////////////////////////////////////////////

// import { Link, Outlet } from "react-router-dom";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCoverflow, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';

// import classes from "../Header.module.css";
// import "../header.css";
// import img3 from "../../Fa_Fa/ei_arrow-up.png";
// import img4 from "../../Fa_Fa/ei_arrow-up (1).png";
// import Footer from "../Footer";

// function Katalog2() {
//   return (
//     <main className={classes.main}>
//       <section className={`${classes.section_mangal} ${classes.container}`}>
//         <div className={classes.mangal_img}>
//           <div className={classes.mangal_img1}>
//             <img src="" alt="" className={classes.mangali_imgg} />
//           </div>

//           <Swiper
//             effect="coverflow"
//             grabCursor={true}
//             centeredSlides={true}
//             slidesPerView="auto"
//             coverflowEffect={{
//               rotate: 50,
//               stretch: 0,
//               depth: 100,
//               modifier: 1,
//               slideShadows: true,
//             }}
//             pagination={{ el: '.swiper-pagination', clickable: true }}
//             modules={[EffectCoverflow, Pagination]}
//             className={`${classes.swiper} mySwiper`}
//           >
//             {[...Array(9)].map((_, index) => (
//               <SwiperSlide key={index}>
//                 <img src="" alt="" />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//           <div className="swiper-pagination"></div>
//         </div>

//         <div className={classes.mangal_img2}>
//           <div className={classes.mangali_anun}>
//             <h5 className={classes.anun_title5}>Мангалы</h5>
//             <h2 className={classes.anun_title2}>Мангал с крышей Классик</h2>
//             <div className={classes.fafa_astx}>
//               {[...Array(5)].map((_, i) => (
//                 <Link key={i} className="fa fa-star-o" aria-hidden="true"></Link>
//               ))}
//             </div>
//             <h2 className={classes.anun_title3}>
//               41 500р./1 шт <span><del>50 000р</del></span>
//             </h2>
//           </div>

//           <div className={classes.mangal_btn}>
//             <button className={classes.qanak_btn}>
//               <p className={classes.qanak_text}>
//                 <Link className="fa fa-angle-left" aria-hidden="true"></Link>
//                 1
//                 <Link className="fa fa-angle-right" aria-hidden="true"></Link>
//               </p>
//             </button>
//             <button className={classes.kupit_btn}>Купить сейчас</button>
//           </div>

//           <div className={classes.mangali_masin}>
//             <p className={classes.masin_text}>
//               <i className="fa fa-heart-o" aria-hidden="true"></i>Сохранить
//             </p>
//             <p className={classes.masin_text}>
//               <i className="fa fa-share-alt" aria-hidden="true"></i>Поделиться
//             </p>
//             <h2 className={classes.masin_title2}>Детали</h2>
//             <p className={classes.masin_text2}>
//               В комплект входит: Кочерга, Совок, Подказанник, Жаровня 1.36 м.
//             </p>

//             <div className={classes.parametr_mangal}>
//               {[
//                 ['Материал:', 'Сталь'],
//                 ['Толщина материала:', '3 мм'],
//                 ['Высота:', '2.3 м'],
//                 ['Ширина:', '1.2 м'],
//                 ['Длина:', '2 м'],
//                 ['Высота до мангала:', '0.85'],
//                 ['Серия:', 'Классика'],
//               ].map(([title, value], i) => (
//                 <div key={i} className={classes.materyal}>
//                   <h3 className={classes.materyal_title}>{title}</h3>
//                   <p className={classes.chapser_text}>{value}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className={`${classes.section_mangal2} ${classes.container}`}>
//         <div className={classes.section_mangali2}>
//           <h2 className={classes.mangali2_title}>Популярные товары</h2>
//           <div className={classes.mangali2_fafa}>
//             <img src={img3} alt="" className={classes.fa} />
//             <img src={img4} alt="" className={classes.fa} />
//           </div>
//         </div>

//         <div className={classes.section_mangali3}>
//           {[...Array(3)].map((_, i) => (
//             <div key={i} className={classes.mangali3}>
//               <div className={classes.mangali3_img}>
//                 <div className={classes.skitka}>
//                   <p className={classes.skitka_text}>-50%</p>
//                   <i className="fa fa-heart srt_fa" aria-hidden="true"></i>
//                 </div>
//               </div>
//               <div className={classes.mangali3_parametr}>
//                 <div className={classes.mangali3_parametr2}>
//                   <p className={classes.mangali3_text}>Мангал с крышей Рублевка</p>
//                   <div className={classes.mangali3_astx}>
//                     {[...Array(5)].map((_, j) => (
//                       <Link key={j} className="fa fa-star-o" aria-hidden="true"></Link>
//                     ))}
//                     <div className={classes.qaniHat}>
//                       <p className={classes.qaniHat_text}>(27)</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className={classes.mangali3_gin}>
//                   <p className={classes.mangali3Gin_text}>40.000 р</p>
//                   <p className={classes.mangali3Gin_text2}><del>50.000 р</del></p>
//                 </div>
//               </div>
//               <button className={classes.mangali3_btn}>Купить сейчас</button>
//             </div>
//           ))}
//         </div>
//       </section>

//       <Footer />
//       <Outlet />
//     </main>
//   );
// }

// export default Katalog2;

//////////////////////////////////////////////////////////////////////////////////

import { Link, Outlet} from "react-router-dom";
import classes from "../Header.module.css"
import img3 from "../../Fa_Fa/ei_arrow-up.png"
import img4 from "../../Fa_Fa/ei_arrow-up (1).png"
import Footer from "../Footer";
import '../header.css'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const swiperStyle = {
  width: "100%",
  // paddingTop: "50px",
  paddingBottom: "50px",
};

const slideStyle = {
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "300px",
  height: "300px",
};

function Katalog2() {
  return (

<main class={classes.main}>
    <section class={`${classes.section_mangal} ${classes.container}`}>
      <div class={classes.mangal_img}>
        <div class={classes.mangal_img1}>
          <img src="" alt="" class={classes.mangali_imgg}/>
        </div>
<Swiper
        style={swiperStyle}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={slideStyle}>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt = "" class = {classes.swiper_img}/>
        </SwiperSlide>        
        <SwiperSlide style={slideStyle}>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt = "" class = {classes.swiper_img}/>
        </SwiperSlide>
        <SwiperSlide style={slideStyle}>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg"  alt = "" class = {classes.swiper_img}/>
        </SwiperSlide>
        <SwiperSlide style={slideStyle}>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt = "" class = {classes.swiper_img} />
        </SwiperSlide>
        <SwiperSlide style={slideStyle}>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt = "" class = {classes.swiper_img} />
        </SwiperSlide>
        <SwiperSlide style={slideStyle}>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt = "" class = {classes.swiper_img} />
        </SwiperSlide>
        <SwiperSlide style={slideStyle}>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt = "" class = {classes.swiper_img} />
        </SwiperSlide>
        <SwiperSlide style={slideStyle}>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt = "" class = {classes.swiper_img} />
        </SwiperSlide>
        <SwiperSlide style={slideStyle}>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt = "" class = {classes.swiper_img} />
        </SwiperSlide>
      </Swiper>

      </div>
      <div class={classes.mangal_img2}>
        <div class={classes.mangali_anun}>
          <h5 class={classes.anun_title5}>Мангалы</h5>
          <h2 class={classes.anun_title2}>Мангал с крышей Классик</h2>
          <div class={classes.fafa_astx}>
            <Link class="fa fa-star-o" aria-hidden="true"></Link>
            <Link class="fa fa-star-o" aria-hidden="true"></Link>
            <Link class="fa fa-star-o" aria-hidden="true"></Link>
            <Link class="fa fa-star-o" aria-hidden="true"></Link>
            <Link class="fa fa-star-o" aria-hidden="true"></Link>
          </div>
          <h2 class={classes.anun_title3}>41 500р./1 шт <span><del>50 000р</del></span></h2>
        </div>
        <div class={classes.mangal_btn}>
          <button class={classes.qanak_btn}>
            <p class={classes.qanak_text}>
              <Link class="fa fa-angle-left" aria-hidden="true"></Link>
              1
              <Link class="fa fa-angle-right" aria-hidden="true"></Link>
            </p>
          </button>
          <button class={classes.kupit_btn}>Купить сейчас</button>
        </div>
        <div class={classes.mangali_masin}>
          <p class={classes.masin_text}><i class="fa fa-heart-o" aria-hidden="true"></i>Сохранить</p>
          <p class={classes.masin_text}><i class="fa fa-share-alt" aria-hidden="true"></i>Поделиться</p>
          <h2 class={classes.masin_title2}>Детали</h2>
          <p class={classes.masin_text2}>В комплект входит: Кочерга, Совок, Подказанник, Жаровня 1.36 м.</p>
          <div class={classes.parametr_mangal}>
            <div class={classes.materyal}>
              <h3 class={classes.materyal_title}>Материал:</h3>
                <p class={classes.chapser_text}>Сталь</p>
            </div>
            <div class={classes.materyal}>
              <h3 class={classes.materyal_title}>Толщина материала:</h3>
                <p class={classes.chapser_text}>3 мм</p>
            </div>
            <div class={classes.materyal}>
              <h3 class={classes.materyal_title}>Высота:</h3>
                <p class={classes.chapser_text}>2.3 м</p>
            </div>
            <div class={classes.materyal}>
              <h3 class={classes.materyal_title}>Ширина:</h3>
                <p class={classes.chapser_text}>1.2 м</p>
            </div>
            <div class={classes.materyal}>
              <h3 class={classes.materyal_title}>Длина:</h3>
                <p class={classes.chapser_text}>2 м</p>
            </div>
            <div class={classes.materyal}>
              <h3 class={classes.materyal_title}>Высота до мангала:</h3>
                <p class={classes.chapser_text}>0.85</p>
            </div>
            <div class={classes.materyal}>
              <h3 class={classes.materyal_title}>Серия:</h3>
                <p class={classes.chapser_text}>Классика</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class={`${classes.section_mangal2} ${classes.container}`}>
      <div class={classes.section_mangali2}>
        <h2 class={classes.mangali2_title}>Популярные товары</h2>
        <div class={classes.mangali2_fafa}>
          <img src = {img3} alt="" class={classes.fa}/>
          <img src = {img4} alt="" class={classes.fa}/>
      </div>
      </div>
      <div class={classes.section_mangali3}>
        <div class={classes.mangali3}>
          <div class={classes.mangali3_img}>
            <div class={classes.skitka}>
              <p class={classes.skitka_text}>-50%</p>
              <i class="fa fa-heart srt_fa" aria-hidden="true"></i>
            </div>
          </div>
          <div class={classes.mangali3_parametr}>
            <div class={classes.mangali3_parametr2}>
              <p class={classes.mangali3_text}>Мангал с крышей Рублевка</p>
              <div class={classes.mangali3_astx}>
                <Link class="fa fa-star-o" aria-hidden="true"></Link>
                <Link class="fa fa-star-o" aria-hidden="true"></Link>
                <Link class="fa fa-star-o" aria-hidden="true"></Link>
                <Link class="fa fa-star-o" aria-hidden="true"></Link>
                <Link class="fa fa-star-o" aria-hidden="true"></Link>
                <div class={classes.qaniHat}>
                  <p class={classes.qaniHat_text}>(27)</p>
                </div>
              </div>
            </div>
            <div class={classes.mangali3_gin}>
              <p class={classes.mangali3Gin_text}>40.000 р</p>
              <p class={classes.mangali3Gin_text2}><del>50.000 р</del></p>
            </div>
          </div>
          <button class={classes.mangali3_btn}>Купить сейчас</button>
        </div>
        <div class={classes.mangali3}>
          <div class={classes.mangali3_img}>
            <div class={classes.skitka}>
              <p class={classes.skitka_text}>-50%</p>
              <Link class="fa fa-heart srt_fa1" aria-hidden="true"></Link>
            </div>
          </div>
          <div class={classes.mangali3_parametr}>
            <div class={classes.mangali3_parametr2}>
              <p class={classes.mangali3_text}>Мангал с крышей Рублевка</p>
              <div class={classes.mangali3_astx}>
                <Link class="fa fa-star-o" aria-hidden="true"></Link>
                <Link class="fa fa-star-o" aria-hidden="true"></Link>
                <Link class="fa fa-star-o" aria-hidden="true"></Link>
                <Link class="fa fa-star-o" aria-hidden="true"></Link>
                <Link class="fa fa-star-o" aria-hidden="true"></Link>
                <div class={classes.qaniHat}>
                  <p class={classes.qaniHat_text}>(27)</p>
                </div>
              </div>
            </div>
            <div class={classes.mangali3_gin}>
              <p class={classes.mangali3Gin_text}>40.000 р</p>
              <p class={classes.mangali3Gin_text2}><del>50.000 р</del></p>
            </div>
          </div>
          <button class={classes.mangali3_btn}>Купить сейчас</button>
        </div>
        <div class={classes.mangali3}>
          <div class={classes.mangali3_img}>
            <div class={classes.skitka}>
              <p class={classes.skitka_text}>-50%</p>
              <Link class="fa fa-heart srt_fa" aria-hidden="true"></Link>
            </div>
          </div>
          <div class={classes.mangali3_parametr}>
            <div class={classes.mangali3_parametr2}>
              <p class={classes.mangali3_text}>Мангал с крышей Рублевка</p>
              <div class={classes.mangali3_astx}>
                <Link class="fa fa-star-o" aria-hidden="true"></Link>
                <Link class="fa fa-star-o" aria-hidden="true"></Link>
                <Link class="fa fa-star-o" aria-hidden="true"></Link>
                <Link class="fa fa-star-o" aria-hidden="true"></Link>
                <Link class="fa fa-star-o" aria-hidden="true"></Link>
                <div class={classes.qaniHat}>
                  <p class={classes.qaniHat_text}>(27)</p>
                </div>
              </div>
            </div>
            <div class={classes.mangali3_gin}>
              <p class={classes.mangali3Gin_text}>40.000 р</p>
              <p class={classes.mangali3Gin_text2}><del>50.000 р</del></p>
            </div>
          </div>
          <button class={classes.mangali3_btn}>Купить сейчас</button>
        </div>
      </div>
    </section>
    <Footer/>
    <Outlet/>
  </main>
  )

}


export default Katalog2;

////////////////////////////////////////////////////////////////////////////////////////

// import React, { useEffect } from "react";
// import { Link, Outlet } from "react-router-dom";
// import classes from "../Header.module.css";
// import img3 from "../../Fa_Fa/ei_arrow-up.png";
// import img4 from "../../Fa_Fa/ei_arrow-up (1).png";
// import Footer from "../Footer";
// import "../header.css";

// import Swiper from "swiper"; 
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

// function Katalog2() {
//   useEffect(() => {
//     const swiper = new Swiper(".mySwiper", {
//       effect: "coverflow",
//       grabCursor: true,
//       centeredSlides: true,
//       slidesPerView: "auto",
//       coverflowEffect: {
//         rotate: 50,
//         stretch: 0,
//         depth: 100,
//         modifier: 1,
//         slideShadows: true,
//       },
//       pagination: {
//         el: ".swiper-pagination",
//       },
//     });

//     return () => {
//       swiper.destroy();
//     };
//   }, []);

//   return (
//     <main className={classes.main}>
//       <section className={`${classes.section_mangal} ${classes.container}`}>
//         <div className={classes.mangal_img}>
//           <div className={classes.mangal_img1}>
//             <img src="" alt="" className={classes.mangali_imgg} />
//           </div>
//           <div className="swiper mySwiper">
//             <div className="swiper-wrapper">
//               <div className="swiper-slide">
//                 <img
//                   src="https://swiperjs.com/demos/images/nature-1.jpg"
//                   alt=""
//                   className={classes.swiper_img}
//                 />
//               </div>
//               <div className="swiper-slide">
//                 <img
//                   src="https://swiperjs.com/demos/images/nature-2.jpg"
//                   alt=""
//                   className={classes.swiper_img}
//                 />
//               </div>
//               <div className="swiper-slide">
//                 <img
//                   src="https://swiperjs.com/demos/images/nature-3.jpg"
//                   alt=""
//                   className={classes.swiper_img}
//                 />
//               </div>
//               <div className="swiper-slide">
//                 <img
//                   src="https://swiperjs.com/demos/images/nature-4.jpg"
//                   alt=""
//                   className={classes.swiper_img}
//                 />
//               </div>
//               <div className="swiper-slide">
//                 <img
//                   src="https://swiperjs.com/demos/images/nature-5.jpg"
//                   alt=""
//                   className={classes.swiper_img}
//                 />
//               </div>
//               <div className="swiper-slide">
//                 <img
//                   src="https://swiperjs.com/demos/images/nature-6.jpg"
//                   alt=""
//                   className={classes.swiper_img}
//                 />
//               </div>
//               <div className="swiper-slide">
//                 <img
//                   src="https://swiperjs.com/demos/images/nature-7.jpg"
//                   alt=""
//                   className={classes.swiper_img}
//                 />
//               </div>
//               <div className="swiper-slide">
//                 <img
//                   src="https://swiperjs.com/demos/images/nature-8.jpg"
//                   alt=""
//                   className={classes.swiper_img}
//                 />
//               </div>
//               <div className="swiper-slide">
//                 <img
//                   src="https://swiperjs.com/demos/images/nature-9.jpg"
//                   alt=""
//                   className={classes.swiper_img}
//                 />
//               </div>
//             </div>
//             <div className="swiper-pagination"></div>
//           </div>
//         </div>
//         <div class={classes.mangal_img2}>
//           <div class={classes.mangali_anun}>
//             <h5 class={classes.anun_title5}>Мангалы</h5>
//             <h2 class={classes.anun_title2}>Мангал с крышей Классик</h2>
//             <div class={classes.fafa_astx}>
//               <Link class="fa fa-star-o" aria-hidden="true"></Link>
//               <Link class="fa fa-star-o" aria-hidden="true"></Link>
//               <Link class="fa fa-star-o" aria-hidden="true"></Link>
//               <Link class="fa fa-star-o" aria-hidden="true"></Link>
//               <Link class="fa fa-star-o" aria-hidden="true"></Link>
//             </div>
//             <h2 class={classes.anun_title3}>41 500р./1 шт <span><del>50 000р</del></span></h2>
//           </div>
//           <div class={classes.mangal_btn}>
//             <button class={classes.qanak_btn}>
//               <p class={classes.qanak_text}>
//                 <Link class="fa fa-angle-left" aria-hidden="true"></Link>
//                 1
//                 <Link class="fa fa-angle-right" aria-hidden="true"></Link>
//               </p>
//             </button>
//             <button class={classes.kupit_btn}>Купить сейчас</button>
//           </div>
//           <div class={classes.mangali_masin}>
//             <p class={classes.masin_text}><i class="fa fa-heart-o" aria-hidden="true"></i>Сохранить</p>
//             <p class={classes.masin_text}><i class="fa fa-share-alt" aria-hidden="true"></i>Поделиться</p>
//             <h2 class={classes.masin_title2}>Детали</h2>
//             <p class={classes.masin_text2}>В комплект входит: Кочерга, Совок, Подказанник, Жаровня 1.36 м.</p>
//             <div class={classes.parametr_mangal}>
//               <div class={classes.materyal}>
//                 <h3 class={classes.materyal_title}>Материал:</h3>
//                 <p class={classes.chapser_text}>Сталь</p>
//               </div>
//               <div class={classes.materyal}>
//                 <h3 class={classes.materyal_title}>Толщина материала:</h3>
//                 <p class={classes.chapser_text}>3 мм</p>
//               </div>
//               <div class={classes.materyal}>
//                 <h3 class={classes.materyal_title}>Высота:</h3>
//                 <p class={classes.chapser_text}>2.3 м</p>
//               </div>
//               <div class={classes.materyal}>
//                 <h3 class={classes.materyal_title}>Ширина:</h3>
//                 <p class={classes.chapser_text}>1.2 м</p>
//               </div>
//               <div class={classes.materyal}>
//                 <h3 class={classes.materyal_title}>Длина:</h3>
//                 <p class={classes.chapser_text}>2 м</p>
//               </div>
//               <div class={classes.materyal}>
//                 <h3 class={classes.materyal_title}>Высота до мангала:</h3>
//                 <p class={classes.chapser_text}>0.85</p>
//               </div>
//               <div class={classes.materyal}>
//                 <h3 class={classes.materyal_title}>Серия:</h3>
//                 <p class={classes.chapser_text}>Классика</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section class={`${classes.section_mangal2} ${classes.container}`}>
//         <div class={classes.section_mangali2}>
//           <h2 class={classes.mangali2_title}>Популярные товары</h2>
//           <div class={classes.mangali2_fafa}>
//             <img src={img3} alt="" class={classes.fa} />
//             <img src={img4} alt="" class={classes.fa} />
//           </div>
//         </div>
//         <div class={classes.section_mangali3}>
//           <div class={classes.mangali3}>
//             <div class={classes.mangali3_img}>
//               <div class={classes.skitka}>
//                 <p class={classes.skitka_text}>-50%</p>
//                 <i class="fa fa-heart srt_fa" aria-hidden="true"></i>
//               </div>
//             </div>
//             <div class={classes.mangali3_parametr}>
//               <div class={classes.mangali3_parametr2}>
//                 <p class={classes.mangali3_text}>Мангал с крышей Рублевка</p>
//                 <div class={classes.mangali3_astx}>
//                   <Link class="fa fa-star-o" aria-hidden="true"></Link>
//                   <Link class="fa fa-star-o" aria-hidden="true"></Link>
//                   <Link class="fa fa-star-o" aria-hidden="true"></Link>
//                   <Link class="fa fa-star-o" aria-hidden="true"></Link>
//                   <Link class="fa fa-star-o" aria-hidden="true"></Link>
//                   <div class={classes.qaniHat}>
//                     <p class={classes.qaniHat_text}>(27)</p>
//                   </div>
//                 </div>
//               </div>
//               <div class={classes.mangali3_gin}>
//                 <p class={classes.mangali3Gin_text}>40.000 р</p>
//                 <p class={classes.mangali3Gin_text2}><del>50.000 р</del></p>
//               </div>
//             </div>
//             <button class={classes.mangali3_btn}>Купить сейчас</button>
//           </div>
//           <div class={classes.mangali3}>
//             <div class={classes.mangali3_img}>
//               <div class={classes.skitka}>
//                 <p class={classes.skitka_text}>-50%</p>
//                 <Link class="fa fa-heart srt_fa1" aria-hidden="true"></Link>
//               </div>
//             </div>
//             <div class={classes.mangali3_parametr}>
//               <div class={classes.mangali3_parametr2}>
//                 <p class={classes.mangali3_text}>Мангал с крышей Рублевка</p>
//                 <div class={classes.mangali3_astx}>
//                   <Link class="fa fa-star-o" aria-hidden="true"></Link>
//                   <Link class="fa fa-star-o" aria-hidden="true"></Link>
//                   <Link class="fa fa-star-o" aria-hidden="true"></Link>
//                   <Link class="fa fa-star-o" aria-hidden="true"></Link>
//                   <Link class="fa fa-star-o" aria-hidden="true"></Link>
//                   <div class={classes.qaniHat}>
//                     <p class={classes.qaniHat_text}>(27)</p>
//                   </div>
//                 </div>
//               </div>
//               <div class={classes.mangali3_gin}>
//                 <p class={classes.mangali3Gin_text}>40.000 р</p>
//                 <p class={classes.mangali3Gin_text2}><del>50.000 р</del></p>
//               </div>
//             </div>
//             <button class={classes.mangali3_btn}>Купить сейчас</button>
//           </div>
//           <div class={classes.mangali3}>
//             <div class={classes.mangali3_img}>
//               <div class={classes.skitka}>
//                 <p class={classes.skitka_text}>-50%</p>
//                 <Link class="fa fa-heart srt_fa" aria-hidden="true"></Link>
//               </div>
//             </div>
//             <div class={classes.mangali3_parametr}>
//               <div class={classes.mangali3_parametr2}>
//                 <p class={classes.mangali3_text}>Мангал с крышей Рублевка</p>
//                 <div class={classes.mangali3_astx}>
//                   <Link class="fa fa-star-o" aria-hidden="true"></Link>
//                   <Link class="fa fa-star-o" aria-hidden="true"></Link>
//                   <Link class="fa fa-star-o" aria-hidden="true"></Link>
//                   <Link class="fa fa-star-o" aria-hidden="true"></Link>
//                   <Link class="fa fa-star-o" aria-hidden="true"></Link>
//                   <div class={classes.qaniHat}>
//                     <p class={classes.qaniHat_text}>(27)</p>
//                   </div>
//                 </div>
//               </div>
//               <div class={classes.mangali3_gin}>
//                 <p class={classes.mangali3Gin_text}>40.000 р</p>
//                 <p class={classes.mangali3Gin_text2}><del>50.000 р</del></p>
//               </div>
//             </div>
//             <button class={classes.mangali3_btn}>Купить сейчас</button>
//           </div>
//         </div>
//       </section>
//       <Footer />
//       <Outlet />
//     </main>
//   );
// }

// export default Katalog2;