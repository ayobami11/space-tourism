'use client'

import Link from "next/link";

import { useRouter, usePathname } from 'next/navigation';

import styles from './hamburgerMenu.module.css';

import { useAppContext } from '../../contexts/app';

export default function HamburgerMenu() {

    const { state } = useAppContext();

    const router = useRouter();
    const pathName = usePathname();

    return (
        <nav className={`navText ${styles.menu} ${state.isMenuOpen ? styles.menuOpen : ''}`}>
            <ol className={styles.menuList}>
                <li 
                className={`${styles.menuItem} ${pathName.startsWith('/home') ? styles.activeMenuItem : ''}`}
                onClick={() => router.push('/home')}>
                    Home
                </li>
                <li 
                className={`${styles.menuItem} ${pathName.startsWith('/destination') ? styles.activeMenuItem : ''}`}
                onClick={() => router.push('/destination')}>
                    Destination
                </li>
                <li 
                className={`${styles.menuItem} ${pathName.startsWith('/crew') ? styles.activeMenuItem : ''}`}
                onClick={() => router.push('/crew')}>
                    Crew
                </li>
                <li 
                className={`${styles.menuItem} ${pathName.startsWith('/technology') ? styles.activeMenuItem : ''}`}
                onClick={() => router.push('/technology')}>
                    Technology
                </li>
            </ol>
        </nav>
    )
}