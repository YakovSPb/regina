"use client"
import React from 'react';
import styles from './writePage.module.css'
import Image from "next/image";
import {useState} from "react";
import "react-quill/dist/quill.bubble.css"
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {app} from "../../utils/firebase";
import {transliterate} from "../../utils/transliterate";
import dynamic from "next/dynamic";

const storage = getStorage(app);


const WritePage = () => {
    const { status} = useSession()
    const ReactQuill = dynamic(()=> import('react-quill'), {ssr: false})

    const router = useRouter()

    const OPTIONS = [
        {
            id: 'fashion',
            title: 'Мода'
        },
        {
            id: 'culture',
            title: 'Культура'
        },

        {
            id: 'coding',
            title: 'Программирование'
        },

        {
            id: 'food',
            title: 'Еда'
        },

        {
            id: 'styles',
            title: 'Стиль'
        },

        {
            id: 'travel',
            title: 'Путишествия'
        },

    ]

    const [file, setFile] = useState(null)
    const [media, setMedia] = useState("")
    const [open,setOpen] = useState(false)
    const [value,setValue] = useState('')
    const [title,setTitle] = useState('')
    const [cat, setCat] =useState(OPTIONS.id)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        console.log('cat',cat)
    }, [cat]);


    useEffect(() => {
        const upload = () => {
            setIsLoading(true)
            const name = new Date().getTime() + file.name
            const storageRef = ref(storage, 'images/' + name);
            const metadata = {
                title: 'file.name',
                description: 'file.name',
            }
            const uploadTask = uploadBytesResumable(storageRef, file, metadata);
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    switch (error.code) {
                        case 'storage/unauthorized':
                            // User doesn't have permission to access the object
                            break;
                        case 'storage/canceled':
                            // User canceled the upload
                            break;

                        // ...

                        case 'storage/unknown':
                            // Unknown error occurred, inspect error.serverResponse
                            break;
                    }
                },
                () => {
                    // Upload completed successfully, now we can get the download URL
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log('downloadURL', downloadURL)
                        setMedia(downloadURL)
                    }).finally(()=>setIsLoading(false))
                }
            );
        }
        file && upload()
    }, [file]);

    if(status === 'loading'){
        return <div className={styles.loading}>Loading...</div>
    }
    if(status === 'unauthenticated'){
        router.push("/")
    }

    const slugify = (str) =>
        transliterate(str).toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g,"")
            .replace(/[\s_-]+/g,"-")
            .replace(/^-+|-+$/g,"")

    const handleChangeSelect = (e) =>{
        const id = e.target.value
        const selectedOption = OPTIONS.find(option => option.id === id);
        setCat(selectedOption.id)
    }

    const handleSubmit = async () => {
        console.log('slugify(title)',slugify(title))
        const res = await fetch('/api/posts',{
            method: "POST",
            body: JSON.stringify({
                title,
                desc: value,
                img: media,
                slug: slugify(title),
                catSlug: cat,
            })
        })

        console.log(res)
    }
    //
    // {data?.map(link => (
    //     <Link key={link._id} href={'/shop?cat=style'} className={`${styles.category} ${styles[link.slug]}`}>
    //         {link.img && <Image src={link.img} alt={link.title} width={32} height={32} className={styles.image}/>}
    //         {link.title}
    //     </Link>))}

    return <div className={styles.container}>
        {isLoading &&<div>Загрузка картинки</div>}
        <input type="text" placeholder="Title" className={styles.input} onChange={e => setTitle(e.target.value)}/>
        <select className="minimal" value={cat} onChange={handleChangeSelect}>
            {OPTIONS.map(option => <option value={option.id} key={cat}>{option.title}</option>)}
        </select>
        <div className={styles.editor}>
            <button onClick={() => setOpen(!open)} className={styles.button}>
                <Image src="/plus.svg" width={16} height={16}/>
            </button>
            {open && <div className={styles.add}>
                <input
                    type="file"
                    id="image"
                    onChange={e => setFile(e.target.files[0])}
                    style={{display: 'none'}}
                />

                <button className={styles.addButton}>
                    <label htmlFor="image">
                        <Image src="/upload.png" width={16} height={16}/>
                    </label>
                </button>
                <button className={styles.addButton}>
                    <Image src="/upload.svg" width={16} height={16}/>
                </button>
                <button className={styles.addButton}>
                    <Image src="/rutube.png" width={16} height={16}/>
                </button>
            </div>}
            <ReactQuill
                className={styles.textArea}
                theme="bubble" value={value} onChange={setValue} placeholder="Tell your story.."/>
        </div>
        <button disabled={isLoading} className={styles.publish} onClick={handleSubmit}>Опубликовать</button>
    </div>
}

export default WritePage;