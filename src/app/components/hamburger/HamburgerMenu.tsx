'use client'

import { useRouter, usePathname } from 'next/navigation';

import styles from './hamburgerMenu.module.css';

import { useAppContext } from '../../contexts/app';

const HamburgerMenu = () => {

    const { state, dispatch } = useAppContext();

    const router = useRouter();
    const pathName = usePathname();

    const navigateTo = (route: string): void => {
        
        dispatch({ type: 'CLOSE_MENU' });
        router.push(`/${route}`);
    }

    return (
        <nav className={`navText ${styles.menu} ${state.isMenuOpen ? styles.menuOpen : ''}`}>
            <ol className={styles.menuList}>
                <li
                    className={`${styles.menuItem} ${pathName.startsWith('/home') ? styles.activeMenuItem : ''}`}
                    onClick={() => navigateTo('home')}>
                    Home
                </li>
                <li
                    className={`${styles.menuItem} ${pathName.startsWith('/destination') ? styles.activeMenuItem : ''}`}
                    onClick={() => navigateTo('destination')}>
                    Destination
                </li>
                <li
                    className={`${styles.menuItem} ${pathName.startsWith('/crew') ? styles.activeMenuItem : ''}`}
                    onClick={() => navigateTo('crew')}>
                    Crew
                </li>
                <li
                    className={`${styles.menuItem} ${pathName.startsWith('/technology') ? styles.activeMenuItem : ''}`}
                    onClick={() => navigateTo('technology')}>
                    Technology
                </li>
            </ol>
        </nav>
    )
}

export default HamburgerMenu;