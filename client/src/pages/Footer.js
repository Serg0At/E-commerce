import { Link, Outlet} from "react-router-dom";
import classes from "./Header.module.css"


function Footer(){
    return(
          <footer class={classes.footer}>
        <div class={`${classes.footer_container} ${classes.container}`}>
            <h2 class={classes.logo_title2}>Logo</h2>
            <div class={classes.footer_box}>
                <div class={classes.company}>
                    <h2 class={classes.footer_title}>Компания</h2>
                    <ul class={classes.footer_list}>
                        <li class={classes.footer_item}><Link class={classes.footer_link} to = "/Contact">Контакты</Link></li>
                        <li class={classes.footer_item}><Link class={classes.footer_link} to = "/Изготовление на заказ">Изготовление на
                            заказ</Link></li>
                        <li class={classes.footer_item}><Link class={classes.footer_link} to = "/Производство">Производство</Link></li>
                    </ul>
                </div>
                <div class={classes.information}>
                    <h2 class={classes.footer_title}>Информация</h2>
                    <ul class={classes.footer_list}>
                        <li class={classes.footer_item}><Link class={classes.footer_link} to = "/Pay">Доставка и оплата</Link></li>
                        <li class={classes.footer_item}><Link class={classes.footer_link} to = "/Гарантия">Гарантия</Link></li>
                        <li class={classes.footer_item}><Link class={classes.footer_link} to = "/Самовывоз">Самовывоз</Link></li>
                        <li class={classes.footer_item}><Link class={classes.footer_link} to = "/Фото нашиx работ">Фото нашиx работ</Link></li>
                    </ul>
                </div>
                <div class={classes.mer_masin}>
                    <h2 class={classes.footer_title}>О нас</h2>
                    <ul class={classes.footer_list}>
                        <li class={classes.footer_item}><Link class={classes.footer_link} to = "/Адрес">Адрес</Link></li>
                        <li class={classes.footer_item}><Link class={classes.footer_link} to = "/+1234567890">+1234567890</Link></li>
                        <li class={classes.footer_item}><Link class={classes.footer_link} to = "/@mail.ru">@mail.ru</Link></li>
                        <li class={classes.footer_item}><Link class={classes.footer_link} to = "/Политика конфиденциальности">Политика
                            конфиденциальности</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <Outlet/>
    </footer>
    )
}


export default Footer