import React from 'react'
import Link from 'next/link'
import { bitter } from '../layout'
import SwiperComponent from './components/SwiperComponent'
import Technologies from './components/Technologies'
import { useLocale, useTranslations } from 'next-intl'

const About = () => {
    const t = useTranslations('About')
    return (
        <main>
            <div className={bitter.className}>
                <h1 className='text-3xl md:text-4xl font-bold mb-4'>
                    {t('h1_about')}
                </h1>
            </div>

            <div className=' mb-4'>
                <p className='m-0 mb-6'>{t('p_about')}</p>
            </div>
            <SwiperComponent />
            <Technologies />
        </main>
    )
}

export default About
