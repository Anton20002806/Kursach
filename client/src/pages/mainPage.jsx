import styles from '../pageStyles/mainPage.module.scss'
import Navbar from "../components/Navbar/Navbar";
import {useLocation} from "react-router-dom";
import UrlDisplay from "../components/UrlDisplay/UrlDisplay";
import axios from '../utills/axios';
import {useQuery} from "react-query";

async  function getTest(){
    const {data} = await axios.get('/test')
    return data;
}
const MainPage = () => {
    const location = useLocation();
    const currentUrl = location.pathname;

    const {data,isLoading,isError} = useQuery('test',getTest)

    return(
        <div className={styles.root}>
            <Navbar />
            <div className={styles.title}>Главная страница</div>
            <div>{data.text}</div>
            <UrlDisplay currentUrl={currentUrl} />
        </div>
    )
}

export default MainPage;