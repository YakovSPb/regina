import styles from './pagination.module.css'

const Pagination = () => {
    return (
        <div className={styles.container}>
            <button className={styles.button}>Назад</button>
            <button className={styles.button}>Вперед</button>
        </div>
    )
}

export default Pagination