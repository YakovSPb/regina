import styles from './categoryList.module.css'
import Link from "next/link";
import Image from 'next/image'
import {CATEGORIES} from "../../contants";

const CategoryList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Популярные категории</h1>
            <div className={styles.categories}>
                {CATEGORIES.map(link => (
                    <Link key={link.key} href={link.path} className={`${styles.category} ${styles[link.key]}`}>
                        <Image src={link.image} alt={link.label} width={32} height={32} className={styles.image}/>
                        {link.label}
                    </Link>))}
            </div>
        </div>
    )
}

export default CategoryList