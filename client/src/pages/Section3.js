import { Link, Outlet} from "react-router-dom";
import classes from "./Header.module.css"


function Section3(){
    return(
        <section class={classes.section3}>
            <div class={`${classes.section3_container} ${classes.container}`}>
                <div class={classes.section3_category}>
                    <h2 class={classes.section3_title}>Самые популярные</h2>
                    <Link to = "./Перейти к каталогу" class={classes.section3_link}>Перейти к каталогу</Link>
                </div>
                <div class={classes.section3_tesak}>
                    <div class={classes.section3_mec}>
                        <div class={classes.mec_img}>
                            <div class={classes.mec1_img}></div> 
                        </div>
                        <p class={classes.mec_title}>Шампур с деревянной ручкой 55см </p>
                        <p class={classes.mec_text}>230 ₽</p>
                    </div>
                    <div class={classes.section3_poqr}>
                        <div class={classes.poqr_img}>
                            <div class={classes.poqr1_img}></div>
                        </div>
                        <p class={classes.poqr_title}>Мангал с крышей Лофт лайт</p>
                        <p class={classes.poqr_text}>29 100 ₽</p>
                    </div>
                    <div class={classes.section3_poqr}>
                        <div class={classes.poqr_img}>
                            <div class={classes.poqr2_img}></div>
                        </div>
                        <p class={classes.poqr_title}>Мангал с крышей Икс</p>
                        <p class={classes.poqr_text}>26 200 ₽</p>
                    </div>
                    <div class={classes.section3_mec}>
                        <div class={classes.mec_img}>
                            <div class={classes.mec2_img}></div>
                        </div>
                        <p class={classes.mec_title}>Мангал с крышей Барокко</p>
                        <p class={classes.mec_text}>15 700 ₽</p>
                    </div>
                </div>
            </div>
            <Outlet/>
        </section>
    )
}





export default Section3