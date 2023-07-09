'use client'

import { notFound, usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import data from '../../data.json';

import styles from '../technology.module.css';

export async function generateStaticParams() {
    const { technology } = data;

    return technology.map((tech) => ({
        name: tech.slug
    }));
}

export default function Page({ params }: { params: { name: string } }) {

    const pathName = usePathname();

    const currentTechnology = data.technology.find(tech => tech.slug === params.name);

    return (
        <>
            {
                currentTechnology ? (
                    <section className={styles.section}>
                        <div className={styles.sectionText}>
                            <nav className={styles.techIndexNavMobile}>
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
                            <header className={styles.sectionHeader}>
                                <span className={`navText ${styles.sectionHeaderTerm}`}>The terminology</span>
                                <h2 className={`heading3`}>{currentTechnology.name}</h2>
                            </header>
                            <p>{currentTechnology.description}</p>
                        </div>
                        <div className={styles.imgWrapper}>
                            <Image
                                className={`${styles.img} ${styles.imgMobile}`}
                                src={currentTechnology.images.landscape}
                                alt={currentTechnology.name}
                                width={0}
                                height={0}
                                style={{ width: '100%', height: 'auto' }}
                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                            />
                            <Image
                                className={`${styles.img} ${styles.imgDesktop}`}
                                src={currentTechnology.images.portrait}
                                alt={currentTechnology.name}
                                width={0}
                                height={0}
                                style={{ width: '100%', height: 'auto' }}
                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                            />
                        </div>
                    </section>
                ) : notFound()
            }
        </>
    )
}