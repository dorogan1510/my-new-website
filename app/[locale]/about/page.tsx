import React from 'react'
import Link from 'next/link'
import { bitter } from '../layout'
import SwiperComponent from './components/SwiperComponent'
import Technologies from './components/Technologies'
import { useLocale, useTranslations } from 'next-intl'
import { Balancer } from 'react-wrap-balancer'
import FramerWrapper from '../components/FramerWrapper'

const About = () => {
    const t = useTranslations('About')
    return (
        <FramerWrapper>
            <main>
                <div className={bitter.className}>
                    <h1 className='text-3xl md:text-4xl font-bold mb-4'>
                        {t('h1_about')}
                    </h1>
                </div>

                <div className='max-w-2xl mb-4'>
                    <p className='m-0 mb-2'>
                        <Balancer>
                            {t('p_about_1')}
                            <br />
                            <br />
                            {t('p_about_2')}
                            <br />
                            <br />
                            {t('p_about_3')}
                            <br />
                            <br />
                            {t('p_about_4')}
                        </Balancer>
                    </p>
                    <hr className='border border-zinc-700/40 my-6' />
                    <p>
                        <Balancer>{t('p_about_travel')}</Balancer>
                    </p>
                </div>
                <SwiperComponent />
                <Technologies />
            </main>
        </FramerWrapper>
    )
}

export default About
