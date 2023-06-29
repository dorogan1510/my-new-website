import { useTranslations } from 'next-intl'
import Balancer from 'react-wrap-balancer'
import { bitter } from '../../layout'

const AboutMeDescription = () => {
    const t = useTranslations('About')

    return (
        <>
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
        </>
    )
}

export default AboutMeDescription
