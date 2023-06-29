import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { Balancer } from 'react-wrap-balancer'
import FramerWrapper from './components/FramerWrapper'
import { bitter } from './layout'
import MainDescription from './components/MainDescription'

export const metadata: Metadata = {
    title: 'Данила Фролов — фронтенд разработчик',
    description: 'Воплощаю ваши идеи в красивые и функциональные сайты',
    generator: 'Next.js',
    applicationName: 'Next.js',
    keywords: [
        'Данила Фролов',
        'Фронтенд',
        'Фронтенд девелопер',
        'Лендинг',
        'Заказать лендинг',
        'Лэндинг',
        'Заказать сайт',
        'Сайт визитка',
        'Создание лендинг пейдж',
        'Разработка сайта',
        'Сайт на заказ',
        'Сайт под ключ',
        'Создание сайта',
        'купить сайт',
        'одностраничный сайт',
        'продающая страница',
        'danfrolov',
        'Danila Frolov',
        'Frontend',
        'Front-end developer',
        'Landing',
        'Order landing',
        'To order a site',
        'Business card website',
        'Creating a landing page',
        'website development',
        'Website to order',
        'Turnkey website',
        'Website Creation',
        'buy website',
        'single page website',
        'selling page',
    ],
    authors: [{ name: 'Danila Frolov', url: 'https://danfrolov.ru' }],
    creator: 'Danila Frolov',
    openGraph: {
        title: 'Данила Фролов',
        description: 'Воплощаю ваши идеи в красивые и функциональные сайты',
        url: 'https://danfrolov.ru',
        siteName: 'Данила Фролов',
        images: [
            {
                url: 'public/img/me_metadata.webp',
                width: 1000,
                height: 1000,
            },
        ],
        locale: 'ru-RU',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function Home() {
    const t = useTranslations('Index')

    return (
        <FramerWrapper>
            <main>
                <div className={bitter.className}>
                    <h1 className='text-3xl md:text-4xl font-bold mb-4'>
                        {t('h1_main')}
                    </h1>
                </div>
                <MainDescription />
            </main>
        </FramerWrapper>
    )
}
