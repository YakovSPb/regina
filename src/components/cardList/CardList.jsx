import styles from './cardList.module.css'
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";
const CardList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Товары</h1>
            <div>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <Pagination/>
        </div>
    )
}

export default CardList