import React from 'react'
import Link from 'next/link'
import { bitter } from '../layout'
import SwiperComponent from './components/SwiperComponent'
import Technologies from './components/Technologies'
import { useLocale, useTranslations } from 'next-intl'
import { Balancer } from 'react-wrap-balancer'

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
                <p className='m-0 mb-2'>
                    <Balancer>
                        {t('p_about')}
                        <br />
                        <br />
                        {t('p_about_description')}
                    </Balancer>
                </p>
                <hr className='border border-zinc-700/40 my-6' />
                <p className='m-0'>
                    <Balancer>{t('p_about_travel')}</Balancer>
                </p>
            </div>
            <SwiperComponent />
            <Technologies />
        </main>
    )
}

export default About
