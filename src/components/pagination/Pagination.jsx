"use client"
import styles from './pagination.module.css'
import {useRouter} from "next/navigation";

const Pagination = ({page, hasPrev, hasNext}) => {

    const router = useRouter()
    return (
        <div className={styles.container}>
            <button
                disabled={!hasPrev}
                className={styles.button}
                onClick={()=> router.push(`?page=${page-1}`)}
            >Назад</button>
            <button
                disabled={!hasNext}
                className={styles.button}
                onClick={()=> router.push(`?page=${page+1}`)}
            >Вперед</button>
        </div>
    )
}

export default Pagination