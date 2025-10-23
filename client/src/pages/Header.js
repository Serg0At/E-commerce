import { Link, Outlet } from "react-router-dom";
import classes from'./Header.module.css'
import './header.css'


const Header = () => {
  return (
       <header class = {classes.header}>
        <div class={`${classes.header_container} ${classes.container}`}>
            <h2 class= {classes.logo_title}>Logo</h2>
            <nav class= {classes.nav}>
                <ul class={classes.nav_list}>
                    <li class={classes.nav_item}>
                        <Link to = "/Section2" class={classes.nav_link}>Каталог</Link>
                        <ul class={classes.category_list}>
                            <li class={classes.category_item}><Link class={classes.category_link} to = "/Katalog1 ">Мангал Классик </Link></li>
                            <li class={classes.category_item}><Link class={classes.category_link} to = "/Мангал Лофт">Мангал Лофт </Link></li>
                            <li class={classes.category_item}><Link class={classes.category_link} to = "/Садовая мебель и дробницы">Садовая мебель и дробницы </Link></li>
                            <li class={classes.category_item}><Link class={classes.category_link} to = "/Казаны и шампура">Казаны и шампура </Link></li>
                            <li class={classes.category_item}><Link class={classes.category_link} to = "/Тандыры">Тандыры </Link></li>
                            <li class={classes.category_item}><Link class={classes.category_link} to = "/Мангалы без крыш">Мангалы без крыш </Link></li>
                            <li class={classes.category_item}><Link class={classes.category_link} to = "/Барбекю">Барбекю </Link></li>
                            <li class={classes.category_item}><Link class={classes.category_link} to = "/Навесы для мангал и барбекю">Навесы для мангал и барбекю </Link>
                            </li>
                        </ul>
                    </li>
                    <li class={classes.nav_item}><Link class={classes.nav_link} to = "/Contact">Контакты</Link></li>
                    <li class={classes.nav_item}><Link class={classes.nav_link} to = "/Помощь">Помощь</Link></li>
                </ul>
                <div class={classes.nav_icon}>
                   <Link to = "/fafa"><i class="fa fa-phone" aria-hidden="true"></i></Link> 
                   <p class={classes.nav_title}>+123456789</p>
                </div>
            </nav>
            <div class={classes.icon_fa}>
                <Link to = "/fafa"><i class="fa fa-search" aria-hidden="true"></i></Link>
                <Link to = "/fafa"><i class="fa fa-shopping-cart" aria-hidden="true"></i></Link>
            </div>
        </div>
        <Outlet/>
    </header>
  
  )
};

export default Header;