import styles from '../pageStyles/mainPage.module.scss'
import Navbar from "../components/Navbar/Navbar";
import {NavLink, useLocation} from "react-router-dom";
import UrlDisplay from "../components/UrlDisplay/UrlDisplay";
import axios from '../utills/axios';
import {useQuery} from "react-query";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Post from "../components/Post/Post";
import Slider from "react-slick";
import mock from '../components/Post/Dom'
import icon1 from '../img/icon_benefits_1.png'
import icon2 from '../img/icon_benefits_2.png'
import icon3 from '../img/icon_benefits_3.png'
import icon4 from '../img/icon_benefits_4.png'
import like from '../img/icon_favourite.png'
import pop1 from '../img/img.png'
import pop2 from '../img/img2.png'
import pop3 from '../img/img3.png'
import pop4 from '../img/img4.png'
import pop5 from '../img/img5.png'
import pop6 from '../img/img6.png'
import bed from '../img/icon_bed.png'
import water from '../img/icon_waterpool.png'
import tenis from '../img/icon_entertainment.png'
import banua from '../img/Vector 6 (Stroke).png'
import frame from '../img/Frame.png'
import serv1 from '../img/buffet 1 (Traced).png'
import serv2 from '../img/chef (Traced).png'
import serv3 from '../img/cocktail 1 (Traced).png'
import serv4 from '../img/confetti (Traced).png'
import serv5 from '../img/Frame 14 (Traced).png'
import serv6 from '../img/microphone (Traced).png'
import AC from '../components/AC/AC'
async function getTest() {
    const {data} = await axios.get('/test')
    return data;
}

const MainPage = () => {

    const {data, isLoading, isError} = useQuery('test', getTest)
    const settings = {
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <div className={styles.root}>

            <div className={styles.glav}>
                <Header/>
                <div className={styles.glav1}>
                    <div className={styles.posleft}>
                        <div className={styles.pos1}>Аренда коттеджей и домов в Казани</div>
                        <div className={styles.pos2}>Найдите идеальный вариант сами или предоставьте это нам</div>
                        <link
                            rel="stylesheet"
                            type="text/css"
                            charSet="UTF-8"
                            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                        />
                        <link
                            rel="stylesheet"
                            type="text/css"
                            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                        />
                        <div className={styles.cardSmallSet}>
                            <Slider {...settings}>
                                {mock
                                    .map((item) => {
                                        return (
                                            <Post variant='small' data={item} key={item.id}/>
                                        )
                                    })}
                            </Slider>
                        </div>
                        <div></div>
                    </div>
                    <div className={styles.posright}>
                        <div className={styles.zaglav}>
                            <div>Заезд</div>
                            <div className={styles.otezd}>Отъезд</div>
                        </div>
                        <div className={styles.input}>
                            <input className={styles.input1} placeholder={"От"}/>
                            <input className={styles.input2} placeholder={"До"}/>
                        </div>
                        <div className={styles.kol}>Количество человек</div>
                        <div className={styles.inp}>
                            <input className={styles.kolvo} placeholder={"12"}/>
                        </div>
                        <div className={styles.button}>
                            <button className={styles.button1}>Найти</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.onas}>
                <div className={styles.ozag}>О нас</div>
                <div className={styles.odisp}>
                    <div className={styles.flex}>
                        <img className={styles.kart} src={icon1}></img>
                        Работаем с юридическими и физическими лицами
                    </div>
                    <div className={styles.flex}>
                        <img className={styles.kart} src={icon2}></img>
                        Бесплатный подбор, честные консультации и открытость к сотрудничеству
                    </div>
                    <div className={styles.flex}>
                        <img className={styles.kart} src={icon3}></img>
                        Работаем с 2014 года. Консультируем 30-80 человек в сутки, заселяем от 3 до 5 компаний в день.
                        Помогли
                        более 21 000 клиентам
                    </div>
                    <div className={styles.flex}>
                        <img className={styles.kart} src={icon4}></img>
                        Средний рейтинг компании 4,5 из 5 (Avito, Google, Отзовик)
                    </div>
                </div>
            </div>
            <div className={styles.popular}>
                <div className={styles.pzag}>Популярное в каталоге</div>
                <div className={styles.cars}>
                    <div className={styles.card1}>
                        <div className={styles.a}>
                            <div className={styles.backright}><img className={styles.frame} src={frame}/>до 30</div>
                            <div className={styles.backbottom}><img className={styles.like} src={like}/></div>
                        </div>
                        <div className={styles.white}>
                            <div className={styles.mest}>Новая сосновка</div>
                            <div className={styles.dop}><img className={styles.bed} src={bed}/> 5 спальных мест</div>
                            <div className={styles.dop}><img className={styles.bed1} src={tenis}/>Настольный теннис
                            </div>
                            <div className={styles.dop}><img className={styles.bed2} src={banua}/>Баня</div>
                            <div className={styles.dop}><img className={styles.bed3} src={water}/>Бассейн</div>
                            <div className={styles.row}>
                                <div className={styles.price}>От 10 000 Р/сутки</div>
                                <NavLink to={'/'}>
                                    <div className={styles.podr}>Подробнее</div>
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card1}>
                        <div className={styles.b}>
                            <div className={styles.backright}><img className={styles.frame} src={frame}/>до 9</div>
                            <div className={styles.backbottom}><img className={styles.like} src={like}/></div>
                        </div>
                        <div className={styles.white}>
                            <div className={styles.mest}>Салмачи 1</div>
                            <div className={styles.dop}><img className={styles.bed} src={bed}/> 5 спальных мест</div>
                            <div className={styles.dop}><img className={styles.bed1} src={tenis}/>Настольный теннис
                            </div>
                            <div className={styles.dop}><img className={styles.bed2} src={banua}/>Баня</div>
                            <div className={styles.dop}><img className={styles.bed3} src={water}/>Бассейн</div>
                            <div className={styles.row}>
                                <div className={styles.price}>От 10 000 Р/сутки</div>
                                <NavLink to={'/'}>
                                    <div className={styles.podr}>Подробнее</div>
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card1}>
                        <div className={styles.c}>
                            <div className={styles.backright}><img className={styles.frame} src={frame}/>до 30</div>
                            <div className={styles.backbottom}><img className={styles.like} src={like}/></div>
                        </div>
                        <div className={styles.white}>
                            <div className={styles.mest}>Новая сосновка</div>
                            <div className={styles.dop}><img className={styles.bed} src={bed}/> 5 спальных мест</div>
                            <div className={styles.dop}><img className={styles.bed1} src={tenis}/>Настольный теннис
                            </div>
                            <div className={styles.dop}><img className={styles.bed2} src={banua}/>Баня</div>
                            <div className={styles.dop}><img className={styles.bed3} src={water}/>Бассейн</div>
                            <div className={styles.row}>
                                <div className={styles.price}>От 12 000 Р/сутки</div>
                                <NavLink to={'/'}>
                                    <div className={styles.podr}>Подробнее</div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.popular}>
                <div className={styles.cars}>
                    <div className={styles.card1}>
                        <div className={styles.d}>
                            <div className={styles.backright}><img className={styles.frame} src={frame}/>до 30</div>
                            <div className={styles.backbottom}><img className={styles.like} src={like}/></div>
                        </div>
                        <div className={styles.white}>
                            <div className={styles.mest}>Новая сосновка</div>
                            <div className={styles.dop}><img className={styles.bed} src={bed}/> 5 спальных мест</div>
                            <div className={styles.dop}><img className={styles.bed1} src={tenis}/>Настольный теннис
                            </div>
                            <div className={styles.dop}><img className={styles.bed2} src={banua}/>Баня</div>
                            <div className={styles.dop}><img className={styles.bed3} src={water}/>Бассейн</div>
                            <div className={styles.row}>
                                <div className={styles.price}>От 10 000 Р/сутки</div>
                                <NavLink to={'/'}>
                                    <div className={styles.podr}>Подробнее</div>
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card1}>
                        <div className={styles.e}>
                            <div className={styles.backright}><img className={styles.frame} src={frame}/>до 14</div>
                            <div className={styles.backbottom}><img className={styles.like} src={like}/></div>
                        </div>
                        <div className={styles.white}>
                            <div className={styles.mest}>Новая сосновка</div>
                            <div className={styles.dop}><img className={styles.bed} src={bed}/> 5 спальных мест</div>
                            <div className={styles.dop}><img className={styles.bed1} src={tenis}/>Настольный теннис
                            </div>
                            <div className={styles.dop}><img className={styles.bed2} src={banua}/>Баня</div>
                            <div className={styles.dop}><img className={styles.bed3} src={water}/>Бассейн</div>
                            <div className={styles.row}>
                                <div className={styles.price}>От 8500 Р/сутки</div>
                                <NavLink to={'/'}>
                                    <div className={styles.podr}>Подробнее</div>
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card1}>
                        <div className={ styles.f}>
                            <div className={styles.backright}><img className={styles.frame} src={frame}/>до 8</div>
                            <div className={styles.backbottom}><img className={styles.like} src={like}/></div>
                        </div>
                        <div className={styles.white}>
                            <div className={styles.mest}>Новая сосновка</div>
                            <div className={styles.dop}><img className={styles.bed} src={bed}/> 5 спальных мест</div>
                            <div className={styles.dop}><img className={styles.bed1} src={tenis}/>Настольный теннис
                            </div>
                            <div className={styles.dop}><img className={styles.bed2} src={banua}/>Баня</div>
                            <div className={styles.dop}><img className={styles.bed3} src={water}/>Бассейн</div>
                            <div className={styles.row}>
                                <div className={styles.price}>От 4000 Р/сутки</div>
                                <NavLink to={'/'}>
                                    <div className={styles.podr}>Подробнее</div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.link}>
                <NavLink className={styles.decornone} to={'/catalog'}>
                    <div className={styles.button2}>
                        Перейти в каталог
                    </div>
                </NavLink>
            </div>

            <div className={styles.servise}>
                <div className={styles.pzag}>
                    Можем организовать для вас
                </div>
                <div className={styles.servglav}>
                    <div className={styles.row}>
                        <div className={styles.servcard}>
                            <img className={styles.bed} src={serv1}/>
                            Кейтеринг
                        </div>
                        <div className={styles.servcard}>
                            <img className={styles.bed} src={serv2}/>
                            Выездной повар
                        </div>
                        <div className={styles.servcard}>
                            <img className={styles.bed} src={serv3}/>
                            Фуршет
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.servcard}>
                            <img className={styles.bed} src={serv4}/>
                            Шоу программа
                        </div>
                        <div className={styles.servcard}>
                            <img className={styles.bed} src={serv5}/>
                            Трансфер
                        </div>
                        <div className={styles.servcard}>
                            <img className={styles.bed} src={serv6}/>
                            Мероприятия под ключ
                        </div>
                    </div>
                    <NavLink to={'/'} className={styles.decornone}>
                        <div className={styles.button2}>
                            Узнать подробнее
                        </div>
                    </NavLink>
                </div>
            </div>
            <div className={styles.quetions}>
                <div className={styles.pzag}>
                    Частые вопросы
                </div>
               <AC/>
            </div>
            <div className={styles.last}>
                <div className={styles.title}>
                    Хотите сдать дом?
                </div>
                <div className={styles.title1}>
                    Оставьте заявку и мы свяжемся с вами для уточнения деталей
                </div>
                <NavLink to={'/'} className={styles.decornone}>
                    <div className={styles.button3}>
                        Оставить заявку
                    </div>
                </NavLink>
            </div>
            <div className={styles.footer}>
                <Footer/>
            </div>


        </div>

    )
}

export default MainPage;