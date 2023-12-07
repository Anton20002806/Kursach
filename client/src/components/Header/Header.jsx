import styles from "./Header.module.scss"
import logo from "../../img/logo_dark.svg"
import point from "../../img/point.svg"
import scroll from "../../img/arrow down.svg"
import like from "../../img/icon_favourite.svg"
import search from "../../img/icon_search.svg"
import mobile from "../../img/Frame.svg"
import {NavLink} from "react-router-dom";

const HeaderPage = () => {
    return (
        <div className={styles.root}>
            <img className={styles.logo_dark} src={logo}/>
            <div className={styles.points}>
                <img className={styles.imgpoint} src={point}/>
                <a> Казань</a>
                <img className={styles.scroll} src={scroll}/>
            </div>
            <div className={styles.buttons}>
                <NavLink to="/catalog" className={styles.nav}>
                    <button className={styles.button}>Каталог</button>
                </NavLink>
            </div>
            <div className={styles.points}><a> Частые вопросы </a></div>
            <div className={styles.points}><a> Сотрудничество </a></div>
            <NavLink to='/favorit'>
                <img className={styles.like} src={like}/>
            </NavLink>
            <div className={styles.points}><img className={styles.search} src={search}/><a>Поиск по названию</a></div>
            <div className={styles.points}><img className={styles.mobile} src={mobile}/><a>8 (843) 528-65-48</a></div>
        </div>
    )
}

export default HeaderPage;