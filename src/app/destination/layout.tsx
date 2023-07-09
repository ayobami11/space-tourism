import Image from 'next/image';

import { Metadata } from "next";

import styles from './destination.module.css';

export const dynamicParams = false;

export const metadata: Metadata = {
    title: 'Destination'
}

export default function DestinationLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <section className={styles.pageWrapper}>
            <h1 className={`heading5 ${styles.mainHeading}`}>Pick your destination</h1>

            {children}

            <div className='bgImageWrapper'>
                <Image
                    className={`bgImage bgImageMobile`}
                    src='/assets/images/destination/background-destination-mobile.jpg'
                    alt=''
                    quality={100}
                    sizes='100vw'
                    fill
                />
                <Image
                    className={`bgImage bgImageTablet`}
                    src='/assets/images/destination/background-destination-tablet.jpg'
                    alt=''
                    quality={100}
                    sizes='100vw'
                    fill
                />
                <Image
                    className={`bgImage bgImageDesktop`}
                    src='/assets/images/destination/background-destination-desktop.jpg'
                    alt=''
                    quality={100}
                    sizes='100vw'
                    fill
                />
            </div>
        </section>
    )
}
