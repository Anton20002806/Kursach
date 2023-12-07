import styles from "./Footer.module.scss"
import logolight from "..//..//img/logo_light.svg"
import {NavLink} from "react-router-dom";
import mobile from "../../img/Frame.svg";

const FooterPage = () => {
    return (
        <div className={styles.root}>
            <div className={styles.footer1}>
                <img className={styles.logo} src={logolight}/>
                <a className={styles.footer1a}>Политика конфиденциальности</a>
                <a>Согласие на обработку персональных данных</a>
            </div>
            <div className={styles.footer2}>
                <h3 className={styles.kat}>Каталог</h3>
                <a>С бассейном</a>
                <a>Семейные и уютные</a>
                <a>Хиты продаж</a>
                <a>Под свадьбы и корпоративы</a>
                <a>С русской баней на дровах</a>
            </div>
            <div className={styles.footer3}>
                <a>Сотрудничество</a>
                <a>Частые вопросы</a>
            </div>
            <div className={styles.footer4}>
                <div className={styles.footer4a}><img className={styles.mobile} src={mobile}/><a>8 (843) 528-65-48</a></div>
                <div className={styles.footer4a}></div>
            </div>
        </div>
    )

}
export default FooterPage;