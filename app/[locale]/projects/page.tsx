import { useTranslations } from 'next-intl'
import FramerWrapper from '../components/FramerWrapper'
import { bitter } from '../layout'
import AllProjects from './components/AllProjects'

const Projects = () => {
    const t = useTranslations('Projects')

    return (
        <FramerWrapper>
            <main>
                <div className={bitter.className}>
                    <h1 className='text-3xl md:text-4xl font-bold mb-4'>
                        {t('myProjects')}
                    </h1>
                </div>
                <AllProjects />
            </main>
        </FramerWrapper>
    )
}

export default Projects
