import styles from '../pageStyles/testPage.module.scss'
import Navbar from "../components/Navbar/Navbar";
import {useLocation} from "react-router-dom";
import UrlDisplay from "../components/UrlDisplay/UrlDisplay";
const TestPage = () => {
    const location = useLocation();
    const currentUrl = location.pathname;

    return(
        <div className={styles.root}>
            <Navbar />
            <div className={styles.title}>Тестовая страница</div>
            <UrlDisplay currentUrl={currentUrl} />
        </div>
    )
}

export default TestPage;