'use client'

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, notFound } from 'next/navigation';

import { Destination } from '../../types/destination';

import data from '../../data.json';

import styles from '../destination.module.css';

export async function generateStaticParams() {
    const { destinations } = data;

    return destinations.map((destination) => ({
        name: destination.name.toLowerCase()
    }));
}

const DestinationPage = ({ params }: { params: { name: string } }) => {

    const pathName = usePathname();

    const { destinations } = data;

    const currentDestination = destinations.find((destination: Destination) => params.name === destination.name.toLowerCase());


    return (
        <article>
            {
                currentDestination ?
                    (
                        <section className={styles.section}>
                            <div className={styles.imgWrapper}>
                                <Image
                                    className={styles.img}
                                    src={currentDestination.images.webp}
                                    alt={currentDestination.name}
                                    width={0}
                                    height={0}
                                    style={{ width: '100%', height: 'auto' }}
                                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                />
                            </div>
                            <div className={styles.sectionText}>
                                <nav className={`navText ${styles.nav}`}>
                                    <ul className={styles.navList}>
                                        <li>
                                            <Link className={`${styles.navLink} ${pathName.startsWith('/destination/moon') ? styles.activeNavLink : ''}`} href='/destination/moon'>Moon</Link>
                                        </li>
                                        <li>
                                            <Link className={`${styles.navLink} ${pathName.startsWith('/destination/mars') ? styles.activeNavLink : ''}`} href='/destination/mars'>Mars</Link>
                                        </li>
                                        <li>
                                            <Link className={`${styles.navLink} ${pathName.startsWith('/destination/europa') ? styles.activeNavLink : ''}`} href='/destination/europa'>Europa</Link>
                                        </li>
                                        <li>
                                            <Link className={`${styles.navLink} ${pathName.startsWith('/destination/titan') ? styles.activeNavLink : ''}`} href='/destination/titan'>Titan</Link>
                                        </li>
                                    </ul>
                                </nav>
                                <h2 className='heading2'>{currentDestination.name}</h2>
                                <p>{currentDestination.description}</p>

                                <hr className={styles.hr} />

                                <dl className={styles.travelDetails}>
                                    <div>
                                        <dt className={`subheading2 ${styles.destinationTerms}`}>Avg. distance</dt>
                                        <dd className='subheading1'>{currentDestination.distance}</dd>
                                    </div>
                                    <div>
                                        <dt className={`subheading2 ${styles.destinationTerms}`}>Est. travel time</dt>
                                        <dd className='subheading1'>{currentDestination.travel}</dd>
                                    </div>
                                </dl>
                            </div>
                        </section>
                    ) : notFound()
            }
        </article>
    )
}

export default DestinationPage;