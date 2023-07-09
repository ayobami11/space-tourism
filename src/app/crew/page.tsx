import { Metadata } from "next";

import styles from './crew.module.css';

import CrewCarousel from './CrewCarousel';

export const metadata: Metadata = {
    title: 'Crew'
}

const CrewPage = () => {

    return (
        <section className={styles.crewSection}>
            <CrewCarousel />
        </section>
    )
}

export default CrewPage;