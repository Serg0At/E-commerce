import { Link, Outlet} from "react-router-dom";
import classes from "../Header.module.css"
import "../header.css"
import Footer from "../Footer";


// const category_list ={

//     "Klassik":{
//         image:[
//             "https://example.com/image1.jpg"
//         ],
//         title:[
//             "Мангал Классик"
//         ],
//         name:[
//             "Барс",
//             "Медея",
//             "Угловой N3",
//             "Угловой N4",
//             "Барокко",
//             "Авангард",
//             "Витос",
//             "Гриль Лаундж",
//             "Имение Люкс",
//             "Медея лайт",
//             "Медея лайт с дровницей",
//             "Медея Люкс",
//             "Медея плюс",
//             "Россия",
//             "Угловой",
//             "Усадьба Премиум",
//             "Уют Премиум",
//             "Чехов люкс",
//             "Идеал"
//         ],
//         price:[
//             "48600 ₽",
//             "51500 ₽",
//             "31200 ₽",
//             "32800 ₽",
//             "32800 ₽",
//             "95600 ₽",
//             "17500 ₽",
//             "45300 ₽",
//             "54100 ₽",
//             "79500 ₽",
//             "54500 ₽",
//             "61000 ₽",
//             "29500 ₽",
//             "19700 ₽",
//             "33800 ₽",
//             "31500 ₽",
//             "35800 ₽",
//             "34800 ₽",
//             "39800 ₽",
//         ],
//     }
// };

// function createProducts(category) {
//     let newCategory = category_list[category];
//     let newImages = newCategory.image;
//     let newTitle = newCategory.title;
//     let newName = newCategory.name;
//     let newPrice = newCategory.price;
// }

// productContainer.innerHtml = newImages.map((item,index) => {
//     return `

//     `
// }).join("");


function Katalog1(){
    return(
        <main class={classes.main}>
        <section class={`${classes.section} ${classes.container}`}>
            <div class={classes.sectionTitle}>
                <h2 class={classes.section_title}>Мангал Классик </h2>
            </div>
            <div class={classes.sectionSartirovka}>
                <div class={classes.section_sartirovka}>
                    <p class={classes.section_text}>Сортировка по</p>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                </div>
                <div class={classes.section_sartirovka}>
                    <p class={classes.section_text}>Фильтр</p>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                </div>
            </div>
                <div class={classes.section_box}>
                    <div class={classes.section_box1}>
                        <div class={classes.section_img}>
                            <img src="" alt=""/>
                        </div>
                       <Link to = "/Katalog2" class = {classes.mec_list}><p class={classes.mec_title}>Шампур с деревянной ручкой 55см</p></Link> 
                        <p class={classes.mec_text}>230 ₽</p>
                    </div>
                    <div class={classes.section_box1}>
                        <div class={classes.section_img}>
                            <img src="" alt=""/>
                        </div>
                       <Link to = "/Katalog2" class = {classes.mec_list}><p class={classes.mec_title}>Шампур с деревянной ручкой 55см</p></Link> 
                        <p class={classes.mec_text}>230 ₽</p>
                    </div>
                    <div class={classes.section_box1}>
                        <div class={classes.section_img}>
                            <img src="" alt=""/>
                        </div>
                       <Link to = "/Katalog2" class = {classes.mec_list}><p class={classes.mec_title}>Шампур с деревянной ручкой 55см</p></Link> 
                        <p class={classes.mec_text}>230 ₽</p>
                    </div>
                </div>
                <div class={classes.section_box2}>
                    <div class={classes.section_boxsis}>
                        <div class={classes.section_img_box}>
                            <img src="" alt=""/>
                        </div>
                       <Link to = "/Katalog2" class = {classes.mec_list}><p class={classes.mec_title}>Шампур с деревянной ручкой 55см</p></Link> 
                        <p class={classes.mec_text}>230 ₽</p>
                    </div>
                    <div class={classes.section_boxsis}>
                        <div class={classes.section_img_box}>
                            <img src="" alt=""/>
                        </div>
                       <Link to = "/Katalog2" class = {classes.mec_list}><p class={classes.mec_title}>Шампур с деревянной ручкой 55см</p></Link> 
                        <p class={classes.mec_text}>230 ₽</p>
                    </div>
                </div>
                <div class={classes.section_boxx}>
                    <div class={classes.section_box1}>
                        <div class={classes.section_img}>
                            <img src="" alt=""/>
                        </div>
                       <Link to = "/Katalog2" class = {classes.mec_list}><p class={classes.mec_title}>Шампур с деревянной ручкой 55см</p></Link> 
                        <p class={classes.mec_text}>230 ₽</p>
                    </div>
                    <div class={classes.section_box1}>
                        <div class={classes.section_img}>
                            <img src="" alt=""/>
                        </div>
                       <Link to = "/Katalog2" class = {classes.mec_list}><p class={classes.mec_title}>Шампур с деревянной ручкой 55см</p></Link> 
                        <p class={classes.mec_text}>230 ₽</p>
                    </div>
                    <div class={classes.section_box1}>
                        <div class={classes.section_img}>
                            <img src="" alt=""/>
                        </div>
                       <Link to = "/Katalog2" class = {classes.mec_list}><p class={classes.mec_title}>Шампур с деревянной ручкой 55см</p></Link> 
                        <p class={classes.mec_text}>230 ₽</p>
                    </div>
                </div>
                <div class={classes.section_btn}>
                    <button class={classes.section_button}>Смотреть еще</button>
                </div> 
        </section>
        <Footer/>
        <Outlet/>
    </main>
    )

}


export default Katalog1;