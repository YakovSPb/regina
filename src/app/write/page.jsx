"use client"
import React from 'react';
import styles from './writePage.module.css'
import Image from "next/image";
import {useState} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css"
const WritePage = () => {

    const [open,setOpen] = useState(false)
    const [value,setValue] = useState('')

    return <div className={styles.container}>
        <input type="text" placeholder="Title" className={styles.input}/>
        <div className={styles.editor}>
            <button onClick={()=> setOpen(!open)} className={styles.button}>
                <Image src="/plus.svg" width={16} height={16}/>
            </button>
            {open && <div className={styles.add}>
                <button className={styles.addButton}>
                    <Image src="/moon.png" width={16} height={16}/>
                </button>
                <button className={styles.addButton}>
                    <Image src="/moon.png" width={16} height={16}/>
                </button>
                <button className={styles.addButton}>
                    <Image src="/rutube.png" width={16} height={16}/>
                </button>
            </div>}
            <ReactQuill
                className={styles.textArea}
                theme="bubble" value={value} onChange={setValue} placeholder="Tell your story.."/>
        </div>
        <button className={styles.publish}>Опубликовать</button>
    </div>
}

export default WritePage;