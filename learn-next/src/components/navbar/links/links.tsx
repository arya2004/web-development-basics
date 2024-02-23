"use client";

import Image from "next/image";
import Link from "next/link"
import styles from "./links.module.css"
import NavLink from "./navLink/navLink"
import { Truculenta } from "next/font/google"
import { useState } from "react"
const Links = () => {

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Blog', path: '/blog' }
    
    ]

    const [open, setOpen] = useState(true);


    const session: boolean = true;
    const isAdmin: boolean = true;
    return (
        <div className={styles.container}>
        <div className={styles.links}>
            {links.map((link => (
                <NavLink item={link} key={link.name}/>
            )))}
          {session ? (
            <>
            {
                isAdmin && (
                    <NavLink item={{ name: 'Admin', path: '/admin' }} />
                
                )

            }
            <button className={styles.logout}>Logout</button>
            </>
          ) : (
            <NavLink item={{ name: 'Login', path: '/login' }} />
          ) }
        </div>
        {/* <button className={styles.menuButton} onClick={() => {
            setOpen((prev) =>  !prev);
        }}>Menu</button> */}
        <Image className={styles.menuButton} src="/menu.png" alt="" width={30} height={30} onClick={() => setOpen((prev) => ! prev)}/>

        {open && 
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.name} />
          ))}
        </div>
      }
        </div>
    )

}

export default Links;