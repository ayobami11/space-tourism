import type { Metadata } from "next";
import Image from "next/image";

import DesktopNavMenu from "./DesktopNavMenu";

import styles from './technology.module.css';

export const dynamicParams = false;

export const metadata: Metadata = {
    title: 'Technology'
}

const TechnologyLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {

    return (
        <div className={styles.pageWrapper}>
            <h1 className={`heading5 ${styles.mainHeading}`}>Space launch 101</h1>

            <div className={`${styles.pageFlexWrapper}`}>
                <DesktopNavMenu />

                {children}
            </div>

            <div className='bgImageWrapper'>
                <Image
                    className={`bgImage bgImageMobile`}
                    src='/assets/images/technology/background-technology-mobile.jpg'
                    alt=''
                    quality={100}
                    fill
                    sizes='100vw'
                />
                <Image
                    className={`bgImage bgImageTablet`}
                    src='/assets/images/technology/background-technology-tablet.jpg'
                    alt=''
                    quality={100}
                    fill
                    sizes='100vw'
                />
                <Image
                    className={`bgImage bgImageDesktop`}
                    src='/assets/images/technology/background-technology-desktop.jpg'
                    alt=''
                    quality={100}
                    fill
                    sizes='100vw'
                />
            </div>
        </div>
    )
}


export default TechnologyLayout;