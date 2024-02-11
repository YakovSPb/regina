"use client";

import {createContext, useState} from 'react'
import {useEffect} from "react";
export const ThemeContext = createContext();

const getFormLocalStorage = () => {
    if (typeof window !== 'undefined') {
        // Perform localStorage action
        const value = localStorage.getItem('key')
        return value || "light"
    }
}

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(()=> {
        return getFormLocalStorage()
    })
    const toggle = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme]);
    return <ThemeContext.Provider value={{theme, toggle}}>{children}</ThemeContext.Provider>
}