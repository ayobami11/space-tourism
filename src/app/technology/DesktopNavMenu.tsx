'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from './technology.module.css';

const DesktopNavMenu = () => {
    const pathName = usePathname();

    return (
        <nav className={styles.techIndexNavDesktop}>
            <Link
                className={`heading4 ${styles.techIndexLink} ${pathName === '/technology/launch-vehicle' ? styles.activeTechIndexLink : ''}`}
                href='/technology/launch-vehicle'>1</Link>
            <Link
                className={`heading4 ${styles.techIndexLink} ${pathName === '/technology/spaceport' ? styles.activeTechIndexLink : ''}`}
                href='/technology/spaceport'>2</Link>
            <Link
                className={`heading4 ${styles.techIndexLink} ${pathName === '/technology/space-capsule' ? styles.activeTechIndexLink : ''}`}
                href='/technology/space-capsule'>3</Link>
        </nav>
    )
}

export default DesktopNavMenu;