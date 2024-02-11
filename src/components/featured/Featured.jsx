import styles from './featured.module.css'
import Image from 'next/image';
const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b className={styles.bold}>Привет! Меня зовут Регина.</b> Добро пожаловать в онлайн магазин цветов и подарков.
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="Магазин Регины Кондратьевой" fill className={styles.image}/>
                </div>
                <div className={styles.textContainer}>
                   <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, placeat.</h1>
                    <p className={styles.postDesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum non perspiciatis quasi suscipit tenetur voluptate voluptatem? A accusantium aperiam distinctio, dolore enim est eveniet facere iste, obcaecati, quas sit veritatis.</p>
                    <button className={styles.button}>Читать</button>
                </div>
            </div>
        </div>
    )
}

export default Featured