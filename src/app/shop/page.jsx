import React from 'react';
import CardList from "../../components/cardList/CardList";
import Menu from "../../components/menu/Menu";
import styles from "./shopPage.module.css";

const ShopPage = () => (
    <div className={styles.container}>
        <h1 className={styles.title}>Shop page</h1>
        <div className={styles.content}>
            <CardList/>
            <div className={styles.menuContainer}>
                <Menu isImage subtitle='Самое горячее' title='Популярное'/>
            </div>
            </div>
        </div>
        );

        export default ShopPage;