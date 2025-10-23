import { Link, Outlet} from "react-router-dom";
import classes from "./Header.module.css"
import "./header.css"
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Footer from "./Footer";
// import './Contact.sass';


const Section1 = () => {
    return (
<main class={classes.main}>
        <section class={`${classes.section} ${classes.container}`}>
            <div class={`${classes.mangal_container} ${classes.container}`}>
                <h2 class={classes.mangal_title}>МАНГАЛЫ</h2>
                <h2 class={classes.mangal_title2}>ЖАРИТЬ НУЖНО С УДОВОЛЬСТВИЕМ</h2>
            </div>
            <div class={classes.bacground_img}>
              <Link class={classes.bacground_btn} to = "./Перейти к каталогу"><button class={classes.bacground_btn}>Перейти к каталогу</button></Link>  
            </div>
        </section> 
        <Section2/>  
        <Section3/>  
        <Section4/>  
        <Section5/>
        <Footer/>  
        <Outlet/>
</main>
    )
};

export default Section1;
