import Link from 'next/link';
import Image from 'next/image';

import styles from './home.module.css'

const HomePage = () => {

  return (
    <main className={styles.main}>

      <div className={styles.bgTextWrapper}>
        <div className={styles.bgText}>
          <header className={styles.header}>
            <span className='heading5'>So, you want to travel to</span>
            <h1 className={`heading1 ${styles.mainHeading}`}>Space</h1>
          </header>

          <p>
            Let&rsquo;s face it; if you want to go to space, you might as well genuinely go to
            outer space and not hover kind of on the edge of it. Well sit back, and relax
            because we&rsquo;ll give you a truly out of this world experience!
          </p>

        </div>
        <Link
          className={`heading4 ${styles.exploreBtn}`}
          href='/destination'
        >Explore</Link>
      </div>

      <div className='bgImageWrapper'>

        <Image
          className={`bgImage bgImageMobile`}
          src='/assets/images/home/background-home-mobile.jpg'
          alt=''
          quality={100}
          sizes='100vw'
          fill
        />
        <Image
          className={`bgImage bgImageTablet`}
          src='/assets/images/home/background-home-tablet.jpg'
          alt=''
          quality={100}
          sizes='100vw'
          fill
        />
        <Image
          className={`bgImage bgImageDesktop`}
          src='/assets/images/home/background-home-desktop.jpg'
          alt=''
          quality={100}
          sizes='100vw'
          fill
        />
      </div>
    </main>
  )
}

export default HomePage;