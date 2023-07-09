import { Barlow, Barlow_Condensed, Bellefair } from 'next/font/google';

export const barlow = Barlow({
    weight: '400',
    variable: '--font-barlow',
    subsets: ['latin'],
    fallback: ['sans-serif']
});

export const barlow_condensed = Barlow_Condensed({
    weight: ['400', '700'],
    variable: '--font-barlow-condensed',
    subsets: ['latin'],
    fallback: ['sans-serif']
});

export const bellefair = Bellefair({
    weight: '400',
    variable: '--font-bellefair',
    subsets: ['latin'],
    fallback: ['sans-serif']
});