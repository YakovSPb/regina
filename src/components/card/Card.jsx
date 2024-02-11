import React from 'react';
import Image from "next/image";
import Link from "next/link";

import styles from './card.module.css'

const Card = () => (
    <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image className={styles.image} src="/item_01.jpg" alt="медвеженок плюшевый" fill/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.02.2023 - </span>
                    <span className={styles.category}>Культура</span>
                </div>
                <Link href="/">
                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, sequi</h1>
                </Link>
                <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolores exercitationem, incidunt laboriosam maiores modi molestias quibusdam quisquam rerum sint sunt vero. Consequuntur dignissimos esse facere inventore ipsum nemo nobis possimus tenetur. Aspernatur commodi doloribus non nostrum obcaecati pariatur veritatis. Alias architecto consequatur culpa eum fuga nisi qui, quo vero.</p>
                <div className={styles.price}>1200 ₽</div>
                <Link className={styles.link} href="/">Чатать далее</Link>
            </div>
    </div>
);

export default Card;