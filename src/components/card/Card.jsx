import React from 'react';
import Image from "next/image";
import Link from "next/link";

import styles from './card.module.css'
import {TRASLATED_CATEGORIES} from "../../contants";

const Card = ({card, key}) => (
    <div key={key} className={styles.container}>
        {card.img && <div className={styles.imageContainer}>
            <Image className={styles.image} src={item.img} alt="медвеженок плюшевый" fill/>
        </div>}
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>{card.createdAt.substring(0, 10)} - </span>
                <span className={styles.category}>{TRASLATED_CATEGORIES[card.catSlug]}</span>
            </div>
            <Link href={`/posts/${card.slug}`}>
                <h1>{card.title}</h1>
            </Link>
            <p className={styles.desc}>{card.desc}</p>
            <div className={styles.price}>{card.price} ₽</div>
            <Link className={styles.link} href={`/posts/${card.slug}`}>Чатать далее</Link>
        </div>
    </div>
);

export default Card;