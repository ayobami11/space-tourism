'use client'

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Metadata } from "next";

import styles from './technology.module.css';

export const metadata: Metadata = {
    title: 'Technology'
}

export default function TechnologyLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const pathName = usePathname();

    return (
        <div className={styles.pageWrapper}>
            <h1 className={`heading5 ${styles.mainHeading}`}>Space launch 101</h1>

            <div className={`${styles.pageFlexWrapper}`}>
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


                {children}
            </div>

            <div className='bgImageWrapper'>
                <Image
                    className={`bgImage bgImageMobile`}
                    src='/assets/images/technology/background-technology-mobile.jpg'
                    alt=''
                    quality={100}
                    sizes='100vw'
                    fill
                />
                <Image
                    className={`bgImage bgImageTablet`}
                    src='/assets/images/technology/background-technology-tablet.jpg'
                    alt=''
                    quality={100}
                    sizes='100vw'
                    fill
                />
                <Image
                    className={`bgImage bgImageDesktop`}
                    src='/assets/images/technology/background-technology-desktop.jpg'
                    alt=''
                    quality={100}
                    sizes='100vw'
                    fill
                />
            </div>
        </div>
    )
}
