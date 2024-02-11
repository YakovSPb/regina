import styles from './menu.module.css'
import Link from "next/link";
import MenuLink from "./menuLink/MenuLink";
import {CATEGORIES} from "../../contants";
const Menu = ({subtitle, title, isImage,isCategory}) => {
    return (
        <div>
            <div className={styles.subtitle}>{subtitle}</div>
           <h2 className={styles.title}>{title}</h2>
            {isCategory ?
                <div className={styles.categoryList}>
                    {CATEGORIES.map(link=> <Link key={link.key} href={link.path} className={`${styles.categoryItem} ${styles[link.key]}`}>{link.label}</Link>)}
                </div>
                :
                <div className={styles.items}>
                    <MenuLink isImage={isImage} category={'travel'} categoryLabel={'Путишуствия'}/>
                    <MenuLink isImage={isImage} category={'culture'} categoryLabel={'Культура'}/>
                    <MenuLink isImage={isImage} category={'food'} categoryLabel={'Еда'}/>
                    <MenuLink isImage={isImage} category={'fashion'} categoryLabel={'Мода'}/>
                </div>
            }

        </div>
    )
}

export default Menu