'use client'

import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { usePathname } from 'next/navigation';

import styles from './header.module.css';


import logo from '../../../../public/assets/images/logo.svg';

import HamburgerButton from '../hamburger/HamburgerButton';
import HamburgerMenu from '../hamburger/HamburgerMenu';

export default function Home() {

    const router = useRouter();
    const pathName = usePathname();

    return (
        <header className={styles.header}>
            <Image className={styles.logo} src={logo} alt='Space Tourism logo' />

            <div className={styles.horizontalLine}></div>

            <nav className={`${styles.nav} navText`}>
                <ol className={styles.navList}>
                    <li
                        className={`${styles.navItem} ${pathName.startsWith('/home') ? styles.activeNavItem : ''}`}
                        // navigated programatically instead of using Link so as to take advantage
                        // of counter-related CSS properties of lists
                        onClick={() => router.push('/home')}
                    >
                        <span className={styles.navLink}>Home</span>
                    </li>
                    <li
                        className={`${styles.navItem} ${pathName.startsWith('/destination') ? styles.activeNavItem : ''}`}
                        onClick={() => router.push('/destination')}
                    >
                        <span className={styles.navLink}>Destination</span>
                    </li>
                    <li
                        className={`${styles.navItem} ${pathName.startsWith('/crew') ? styles.activeNavItem : ''}`}
                        onClick={() => router.push('/crew')}
                    >
                        <span className={styles.navLink}>Crew</span>
                    </li>
                    <li
                        className={`${styles.navItem} ${pathName.startsWith('/technology') ? styles.activeNavItem : ''}`}
                        onClick={() => router.push('/technology')}
                    >
                        <span className={styles.navLink}>Technology</span>
                    </li>
                </ol>
            </nav>

            <HamburgerButton />
            <HamburgerMenu />
        </header>
    )
}
