import { Link, Outlet } from "react-router-dom";
import classes from "./Header.module.css";
import img1 from "../Fa_Fa/ei_arrow-up.png"
import img2 from "../Fa_Fa/ei_arrow-up (1).png"


function Section5(){
    return(
                 <section class={classes.section5}>
            <div class={`${classes.section5_container} ${classes.container}`}>
                <div class={classes.section5_category}>
                    <h2 class={classes.section5_title}>Самые популярные</h2>
                    <div class={classes.section5_fafa}>
                        <img src = {img1} alt="" class={classes.fa}/>
                        <img src = {img2} alt="" class={classes.fa}/>
                    </div>
                </div>
                <div class={classes.section5_category2}>
                    <div class={classes.section5_box}>
                        <div class={classes.section5_img}>
                            <Link></Link>
                        </div>
                        <p class={classes.mec_title}>Шампур с деревянной ручкой 55см</p>
                        <p class={classes.mec_text}>230 ₽</p>
                    </div>
                    <div class={classes.section5_box}>
                        <div class={classes.section5_img}>
                            <></>
                        </div>
                        <p class={classes.mec_title}>Шампур с деревянной ручкой 55см</p>
                        <p class={classes.mec_text}>230 ₽</p>
                    </div>
                    <div class={classes.section5_box}>
                        <div class={classes.section5_img}>
                            <></>
                        </div>
                        <p class={classes.mec_title}>Шампур с деревянной ручкой 55см</p>
                        <p class={classes.mec_text}>230 ₽</p>
                    </div>
                </div>
            </div>
            <Outlet/>
        </section>
    )
}




export default Section5