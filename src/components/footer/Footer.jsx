import styles from './footer.module.css'
import Image from "next/image";
import Link from "next/link";
import {MENU} from "../../contants";
import {CATEGORIES} from "../../contants";
import {SOCIAL} from "../../contants";
const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image src="/logo.png" alt={'Регина Кондратьева'} width={50} height={50}/>
                    <h1 className={styles.logoText}>Регина Кондратьева</h1>
                </div>
                <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio eum fuga harum impedit, incidunt mollitia repellendus sunt veniam. Ab adipisci consequuntur cum deleniti enim esse eveniet facilis illum molestias mollitia, natus nesciunt provident rerum veritatis voluptas. Alias cum in voluptatum.</p>
                <div className={styles.icons}>
                    {SOCIAL.map(s=><Link key={s.key} href={s.path}><Image src={s.image} alt={s.label} width={18} height={18}/></Link>)}
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.link}>
                    <span className={styles.listTitle}>Меню</span>
                    {MENU.map(link=><Link href={link.path} className={styles.link}>{link.label}</Link>)}
                </div>
                <div className={styles.link}>
                    <span className={styles.listTitle}>Категории</span>
                    {CATEGORIES.map(link=>  <Link key={link.key} href={link.path} className={styles.link}>{link.label}</Link>)}
                </div>
                <div className={styles.link}>
                    <span className={styles.listTitle}>Социальные сети</span>
                    {SOCIAL.map(s=> <Link key={s.key} href={s.path} className={styles.link}>{s.label}</Link>)}
                </div>
            </div>
        </div>
    )
}

export default Footer