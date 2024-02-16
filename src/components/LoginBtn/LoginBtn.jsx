"use client"
import Link from "next/link";
import styles from './loginBtn.module.css'
import {signOut} from "next-auth/react";
import {useSession} from "next-auth/react";

const LoginBtn = ({isDesctop}) => {
    const {status} = useSession()

    return <>
    {status === "unauthenticated" ? (
        <Link className={isDesctop && styles.link} href="/login">Login</Link>
    ): (
        <>
            <Link className={isDesctop && styles.link} href="/write">Write</Link>
            <span className={styles.link} onClick={signOut}>Logout</span>
        </>
    )}
    </>
}

export default LoginBtn