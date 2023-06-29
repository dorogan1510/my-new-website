import { useTranslations } from 'next-intl'
import FramerWrapper from '../components/FramerWrapper'
import { bitter } from '../layout'
import AboutMeDescription from './components/AboutMeDescription'
import SwiperComponent from './components/SwiperComponent'
import Technologies from './components/Technologies'

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
                <AboutMeDescription />
                <SwiperComponent />
                <Technologies />
            </main>
        </FramerWrapper>
    )
}

export default About
