import styles from './PopularPost.module.scss'


const Poppost = ({data}) => {
    return (
        <div className={styles.root}>
            <img className={styles.pict} src={data?.image} alt=''/>
            <div className={styles.title}>
                {data?.text}
            </div>
        </div>
    )
}
const PopularPost = ({variant, data}) => {
    return (
        <>
            {variant === 'small' && <Poppost data={data} />}
        </>
    )
}

export default PopularPost;