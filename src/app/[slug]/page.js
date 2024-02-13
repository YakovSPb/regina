import React from 'react';
import styles from './singlePage.module.css'
import Menu from "../../components/menu/Menu";
import Image from 'next/image'
import Comments from "../../components/comments/Comments";
function SingePage() {
    return (
        <div className={styles.container}>
           <div className={styles.infoContainer}>
               <div className={styles.textContainer}>
                   <h1 className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, ut.</h1>
                   <div className={styles.user}>
                       <div className={styles.userImageContainer}>
                       <Image src="/p1.jpeg" alt="" fill className={styles.avatar}/>
                       </div>
                       <div className={styles.userTextContainer}>
                           <span className={styles.username}>John Doe</span>
                           <span className={styles.data}>01.01.2024</span>
                       </div>
                   </div>
               </div>
               <div className={styles.imageContainer}>
                   <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
               </div>
           </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto assumenda at doloremque, dolorum eius eum hic incidunt ipsa itaque magnam nemo pariatur, perspiciatis placeat porro possimus quia unde veritatis.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto assumenda at doloremque, dolorum eius eum hic incidunt ipsa itaque magnam nemo pariatur, perspiciatis placeat porro possimus quia unde veritatis.</p>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, totam.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto assumenda at doloremque, dolorum eius eum hic incidunt ipsa itaque magnam nemo pariatur, perspiciatis placeat porro possimus quia unde veritatis.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto assumenda at doloremque, dolorum eius eum hic incidunt ipsa itaque magnam nemo pariatur, perspiciatis placeat porro possimus quia unde veritatis.</p>
                    </div>
                    <div className={styles.comment}>
                        <Comments/>
                    </div>
                </div>

                    <div className={styles.menuContainer}>
                        <Menu isImage subtitle='Самое горячее' title='Популярное'/>
                    </div>
            </div>
        </div>
    );
}

export default SingePage;