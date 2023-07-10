import { Metadata } from "next";
import Image from "next/image";

import NavMenu from "./NavMenu";

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
                <NavMenu />


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


export default TechnologyLayout;