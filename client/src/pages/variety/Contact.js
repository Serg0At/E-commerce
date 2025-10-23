import { Outlet} from "react-router-dom";
import classes from "../variety/Contact.module.css"
import "../header.css"
import Footer from "../Footer";

function Contact() {
    return(
        <main class={classes.main}>
        <section class={`${classes.section} ${classes.container}`}>
            <div class={classes.section_box}>
                <h2 class={classes.box_title}>Контакты</h2>
            </div>
            <div class={classes.section_box2}>
                <h2 class={classes.box2_title}>Адрес</h2>
                <p class={classes.box2_text}>Адрес, улица, номер здания</p>
                <h2 class={classes.box2_title}>Телефон</h2>
                <p class={classes.box2_text}>+1234567890</p>
                <h2 class={classes.box2_title}>Эл. адрес</h2>
                <p class={classes.box2_text}>@mail.ru</p>
            </div>
            <div class={classes.section_box3}>
              <h2 class={classes.box3_title}>Остались вопросы? Тогда свяжитесь с нами заполняя поля внизу</h2>
            </div>
            <div class={classes.section_box4}>
              <form action="" class={classes.box4_form}>
                <input type="text" class={classes.box4_inp} placeholder="Имя" required/>
                <input type="phone" class={classes.box4_inp} placeholder="Телефон" required/>
                <textarea name="" id=""  class={classes.box4_textarea} placeholder="Сообщение"></textarea><br/>
                <button class={classes.box4_btn}>Отправить</button>
              </form>
            </div>
        </section>
        <Footer/>
        <Outlet/>
      </main>
    )
}

export default Contact;