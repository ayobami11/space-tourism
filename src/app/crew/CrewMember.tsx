import Image from "next/image";

import { Crew } from "../types/crew";

import styles from './crew.module.css';

const CrewMember = ({ name, images, role, bio }: Crew) => {

    return (
        <figure className={styles.figure}>
            <div className={styles.imgWrapper}>
                <Image
                    className={styles.img}
                    src={images.webp}
                    alt={name}
                    width={0}
                    height={0}
                    style={{ width: '100%', height: 'auto' }}
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
            </div>
            <hr className={styles.hr} />
            <figcaption className={styles.figcaption}>
                <header className={styles.figcaptionHeader}>
                    <span className={`heading4 ${styles.role}`}>{role}</span>
                    <h2 className={`heading3 ${styles.name}`}>{name}</h2>
                </header>
                <p>{bio}</p>
            </figcaption>
        </figure>
    )
}

export default CrewMember;