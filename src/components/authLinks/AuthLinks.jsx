"use client"
import Link from "next/link";
import {useState} from "react";

import styles from './authLinks.module.css'
import LoginBtn from "../LoginBtn/LoginBtn";
import {MENU} from "../../contants";

const AuthLinks = () => {
    const [open, setOpen] = useState(false)
    return <>
        <LoginBtn isDesctop/>
        <div className={styles.burger} onClick={()=> setOpen(!open)}>
            {Array.from(Array(3).map(line => <div className={styles.line}></div>))}
        </div>
        {open && (
            <div className={styles.responsiveMenu}>
                {MENU.map(link=><Link href={link.path}>{link.label}</Link>)}
                <LoginBtn/>
            </div>
            )
        }
    </>
}

export default AuthLinks