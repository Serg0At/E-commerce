import { Outlet} from "react-router-dom";
import classes from "../variety/Pay.module.css"
import "../header.css"
import Footer from "../Footer";


function Pay() {
    return(
         <main class={classes.main}>
        <section class={`${classes.section} ${classes.container}`}>
            <div class={classes.section_box}>
                <h2 class={classes.box_title}>Доставка и оплата</h2>
            </div>
            <div class={classes.section_box5}>
              <div class={classes.box5_title}>
                <h2 class={classes.title_box5}>Этапы работ</h2>
              </div>
              <div class={classes.box5_box}>
                <div class={classes.box5_1}>
                  <div class={classes.box5_box1}>
                    <div class={classes.box5_box1_img}></div>
                    <p class={classes.box5_text}>Выбор продукции</p>
                  </div>
                  <div class={classes.box5_box2}>
                    <div class={classes.box5_box2_img}></div>
                  </div>
                  <div class={classes.box5_box3}>
                    <div class={classes.box5_box3_img}></div>
                    <p class={classes.box5_text}>Оформление доставки</p>
                  </div>
                  <div class={classes.box5_box4}>
                    <div class={classes.box5_box4_img}></div>
                  </div>
                  <div class={classes.box5_box5}>
                    <div class={classes.box5_box5_img}></div>
                    <p class={classes.box5_text}>Разгрузка на ваш участок в выбранное в вами место</p>
                  </div>
                </div>
                <div class={classes.box6_2}>
                  <div class={classes.box6_box1}>
                    <div class={classes.box5_box1_img1}></div>
                    <p class={classes.box5_text}>Проверка покупателем мангала на соответствии заявленным требованиями</p>
                  </div>
                  <div class={classes.box5_box4}>
                    <div class={classes.box5_box4_img}></div>
                  </div>
                  <div class={classes.box6_box3}>
                    <div class={classes.box5_box3_img3}></div>
                    <p class={classes.box5_text}>Оплата продукции</p>
                  </div>
                  <div class={classes.box5_box4}>
                    <div class={classes.box5_box4_img}></div>
                  </div>
                  <div class={classes.box6_box5}>
                    <div class={classes.box5_box5_img5}></div>
                    <p class={classes.box5_text}>Приготовленная вами вкусная еда</p>
                  </div>
                </div>
              </div>
            </div>
        </section>
        <Footer/>
        <Outlet/>
      </main>
    )
}

export default Pay;