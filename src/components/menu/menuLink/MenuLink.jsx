import styles from './menuLink.module.css'
import Link from "next/link";
import Image from "next/image";

const MenuLink = ({category,categoryLabel,isImage }) => {
    return (
        <Link href="/" className={styles.item}>
            {isImage && <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>}
            <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles[category]}`}>{categoryLabel}</span>
                <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
                    nisi.</h3>
                <div className={styles.detail}>
                    <span className={styles.username}>Yakov Kondratev</span>
                    <span className={styles.date}> - 10.03.2023</span>
                </div>
            </div>
        </Link>
    )
}

export default MenuLink