import styles from './categoryList.module.css'
import Link from "next/link";
import Image from 'next/image'

const getData = async () => {
    const res = await fetch("http://localhost:3000/api/categories",{
        cache: "no-store"
    } )

    if(!res.ok) {
        throw new Error('Failed')
    }
    return res.json()
}

const CategoryList = async () => {
    const data = await getData()
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Популярные категории</h1>
            <div className={styles.categories}>
                {data?.map(link => (
                    <Link key={link._id} href={'/shop?cat=style'} className={`${styles.category} ${styles[link.slug]}`}>
                        {link.img && <Image src={link.img} alt={link.title} width={32} height={32} className={styles.image}/>}
                        {link.title}
                    </Link>))}
            </div>
        </div>
    )
}

export default CategoryList