import React from 'react';
import CardList from "../../components/cardList/CardList";
import Menu from "../../components/menu/Menu";
import styles from "./shopPage.module.css";
import {TRASLATED_CATEGORIES} from "../../contants";

const ShopPage = ({searchParams}) => {
   const page = parseInt(searchParams.page) || 1
   const { cat } = searchParams

   return <div className={styles.container}>
        <h1 className={styles.title}>{TRASLATED_CATEGORIES[cat]}</h1>
        <div className={styles.content}>
            <CardList page={page} cat={cat} />
            <div className={styles.menuContainer}>
                <Menu isImage subtitle='Самое горячее' title='Популярное'/>
            </div>
            </div>
        </div>
}

        export default ShopPage;