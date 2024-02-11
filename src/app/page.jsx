import React from "react";
import styles from "./homepage.module.css";
import Featured from "../components/featured/Featured";
import CategoryList from "../components/categoryList/CategoryList";
import CardList from "../components/cardList/CardList";
import Menu from "../components/menu/Menu";

export default function Home() {
  return (
      <div>
        <Featured/>
        <CategoryList/>
        <div className={styles.content}>
          <CardList/>
            <div className={styles.menuContainer}>
                <Menu isImage subtitle='Самое горячее' title='Популярное'/>
                <Menu isImage isCategory subtitle='Найти товар по теме' title='Категории'/>
                <Menu subtitle='Выбрано автором' title='Что нравиться Регине'/>
            </div>
        </div>
      </div>
      )
}
