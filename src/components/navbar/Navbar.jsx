import styles from './navbar.module.css'
import Image from 'next/image'
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import {MENU} from "../../contants";
import {SOCIAL} from "../../contants";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                {SOCIAL.map(s=> <Image key={s.key} src={s.image} alt={s.label} width={24} height={24}/>)}
            </div>
            <div className={styles.logo}>Магазин цветов и подарков</div>
            <div className={styles.links}>
                <ThemeToggle/>
                {MENU.map(link=><Link href={link.path} className={styles.link}>{link.label}</Link>)}
                <AuthLinks/>
            </div>
        </div>
    )
}

export default Navbar