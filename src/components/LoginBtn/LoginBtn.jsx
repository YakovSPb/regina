"use client"
import Link from "next/link";
import styles from './loginBtn.module.css'

const LoginBtn = ({isDesctop}) => {
    const status = "notauthenticated"
    return <>
    {status === "notauthenticated" ? (
        <Link className={isDesctop && styles.link} href="/login">Login</Link>
    ): (
        <>
            <Link className={isDesctop && styles.link} href="/write">Write</Link>
            <span className={styles.link}>Logout</span>
        </>
    )}
    </>
}

export default LoginBtn