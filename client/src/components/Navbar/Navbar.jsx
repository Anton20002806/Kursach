import styles from './Navbar.module.scss'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    let links = [
        {
            path: '/',
            name: 'Главная'
        },
        {
            path: '/test',
            name: 'Тестовая'
        },
        {
            path: '/profile',
            name: 'Профиль'
        }
    ]

    return(
        <div className={styles.root}>
            {links.map((item) => {
                return(
                    <NavLink className={styles.link} to={item.path}>{item.name}</NavLink>
                )
            })}
        </div>
    )
}

export default Navbar;