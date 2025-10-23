import { Link, Outlet} from "react-router-dom";
import classes from "./Header.module.css"
import "./header.css"

function Section2(){
    return(
        <main class={classes.main}>
        <section class={classes.section2} id="category">
            <div class={`${classes.section2_container} ${classes.container}`}>
                <div class={classes.section_category}>
                    <h2 class={classes.section_title}>Категории</h2>
                </div>
                <div class={classes.section_main}>
                    <ul class={classes.section_list}>
                        <li class={classes.section_item}>
                            <Link class={classes.section_link} to = "/Katalog1">Мангал Классик</Link> 
                            <div class={classes.link_img1}></div>
                            <div class={classes.link_img2}></div>
                        </li>
                        <li class={classes.section_item}><Link class={classes.section_link} to = "/МангалЛофт">Мангал Лофт</Link>
                            <div class={classes.link_img1}></div>
                            <div class={classes.link_img2}></div>
                        </li>
                        <li class={classes.section_item}><Link class={classes.section_link} to = "/Садовая мебель и дробницы">Садовая мебель и дробницы</Link>
                            <div class={classes.link_img1}></div>
                            <div class={classes.link_img2}></div>
                        </li>
                        <li class={classes.section_item}><Link class={classes.section_link} to = "/Казаны и шампура">Казаны и шампура</Link>
                            <div class={classes.link_img1}></div>
                            <div class={classes.link_img2}></div>
                        </li>
                        <li class={classes.section_item}><Link class={classes.section_link} to = "/Тандыры">Тандыры</Link>
                            <div class={classes.link_img1}></div>
                            <div class={classes.link_img2}></div>
                        </li>
                        <li class={classes.section_item}><Link class={classes.section_link} to = "/Мангалы без крыш">Мангалы без крыш</Link>
                            <div class={classes.link_img1}></div>
                            <div class={classes.link_img2}></div>
                        </li>
                        <li class={classes.section_item}><Link class={classes.section_link} to = "/Барбекю">Барбекю</Link>
                            <div class={classes.link_img1}></div>
                            <div class={classes.link_img2}></div>
                        </li>
                        <li class={classes.section_item}><Link class={classes.section_link} to = "/Навесы для мангал и барбекю">Навесы для мангал и барбекю</Link>
                            <div class={classes.link_img1}></div>
                            <div class={classes.link_img2}></div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <Outlet/>
        </main>

    )
}





export default Section2;
