import { Link, Outlet} from "react-router-dom";
import classes from "./Header.module.css";


function Section4(){
    return(
         <section class={classes.section4}>
            <div class={`${classes.section4_container} ${classes.container}`}>
                <div class={classes.section4_category}>
                    <h2 class={classes.section4_title}>Поможем подобрать мангал и привезем его без предоплаты до вашего участка
                    </h2>
                </div>
                <div class={classes.section4_category2}>
                    <h2 class={classes.section4_title}>Оставьте контактный номер телефона для связи и мы ответим на все ваши
                        вопросы</h2>
                        <Link to = "/"></Link>
                </div>
                <form action="" class={classes.section4_form}>
                    <input type="text" placeholder="Имя" class={classes.input_text}/>
                    <input type="tel" placeholder="Телефон" class={classes.input_phone}/>
                    <input type="submit" value="Отправить" class={classes.input_submit}/>
                </form>
            </div>
            <Outlet/>
         </section>
          
    )
}


export default Section4