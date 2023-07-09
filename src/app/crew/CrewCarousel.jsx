'use client'

import { useEffect, useRef } from "react";
import { register } from 'swiper/element/bundle';

import data from '../data.json';

import CrewMember from "./CrewMember";

// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

register();

const CrewCarousel = () => {

    const {crew} = data;

    const swiperRef = useRef(null);

    useEffect(() => {
        // Object with parameters
        const params = {
            loop: true,
            autoplay: {
                delay: 5000
            },
            pagination: {
                clickable: true,
            },
            injectStyles: [
                `  
                    .swiper {
                        display: flex;
                        flex-direction: column-reverse;
                    }

                    .swiper-pagination {
                        // border: 1px solid red;
                        position: absolute;
                    }

                    .swiper-pagination-bullets {
                        display: flex;
                        justify-content: center;
                        gap: 1rem;
                    }
                    
                    .swiper-pagination-bullet {
                        background: rgba(var(--white-rgb), 0.174363);
                        height: 10px;
                        width: 10px;
                        transition: background 0.5s;
                    }

                    .swiper-pagination-bullet:hover {
                        background: rgba(var(--white-rgb), 0.500094);
                    }
                    
                    .swiper-pagination-bullet-active {
                        background: rgb(var(--white-rgb));
                    }
                    
                    @media (min-width: 1025px) {
                        .swiper-pagination {
                            bottom: 5% !important;
                        }

                        .swiper-pagination-bullets {
                            display: flex;
                            justify-content: flex-start;
                            gap: 1.5rem;
                        }

                        .swiper-pagination-bullet {
                            height: 15px;
                            width: 15px;
                        }
                    }

                    @media (min-width: 1100px) {
                        .swiper-pagination {
                            bottom: 15% !important;
                        }
                    }
                `
            ],
            slidesPerView: 1,
        }

        // Assign it to swiper element
        Object.assign(swiperRef.current, params);

        // initialize swiper
        swiperRef.current.initialize();
    }, []);

    return (
        <swiper-container init="false" ref={swiperRef}>
        {
            crew.map((member) => (
                <swiper-slide key={member.name}>
                    <CrewMember key={member.name} {...member} />
                </swiper-slide>
        ))}
        </swiper-container>
    )
}

export default CrewCarousel;