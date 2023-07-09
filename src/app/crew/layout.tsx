import { Metadata } from "next";
import Image from "next/image";

import styles from './crew.module.css';

export const metadata: Metadata = {
    title: 'Technology'
}

const CrewLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <div>
            <h1 className={`heading5 ${styles.mainHeading}`}>Meet your crew</h1>

            {children}

            <div className='bgImageWrapper'>
                <Image
                    className={`bgImage bgImageMobile`}
                    src='/assets/images/crew/background-crew-mobile.jpg'
                    alt=''
                    quality={100}
                    sizes='100vw'
                    fill
                />
                <Image
                    className={`bgImage bgImageTablet`}
                    src='/assets/images/crew/background-crew-tablet.jpg'
                    alt=''
                    quality={100}
                    sizes='100vw'
                    fill
                />
                <Image
                    className={`bgImage bgImageDesktop`}
                    src='/assets/images/crew/background-crew-desktop.jpg'
                    alt=''
                    quality={100}
                    sizes='100vw'
                    fill
                />
            </div>
        </div>
    )
}

export default CrewLayout;