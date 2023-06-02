import { Metadata } from 'next'
import { useLocale, useTranslations } from 'next-intl'
import { Bitter, Inter } from 'next/font/google'
import { notFound } from 'next/navigation'
import LocaleSwitcherSelect from './components/LocaleSwitcherSelect'
import SideBar from './components/Sidebar'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const bitter = Bitter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
    title: 'Данила Фролов — фронтенд разработчик',
    description:
        'Я помогаю воплощать ваши идеи в красивые, функциональные и производительные сайты. Сделаю для вас лендинг, многостраничный функциональный сайт или веб приложение. Напишите мне и мы обсудим все детали.',
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
}

export default function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: any
}) {
    const locale = useLocale()
    const t = useTranslations('LocaleSwitcher')
    const translate = useTranslations('Index')

    if (params.locale !== locale) {
        notFound()
    }
    return (
        <html lang={locale} className={inter.className}>
            <body className='bg-neutral-900 antialiased max-w-5xl mb-40 flex flex-col items-start md:flex-row mx-6 mt-8 md:mt-20 lg:mt-32 lg:mx-auto'>
                <div className='md:sticky md:top-10'>
                    <aside className=' mb-4 md:mb-0 md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif'>
                        <div className={bitter.className}>
                            <LocaleSwitcherSelect defaultValue={locale}>
                                {['ru', 'en'].map(element => (
                                    <option
                                        className='bg-neutral-900 font-semibold'
                                        key={element}
                                        value={element}
                                    >
                                        {t('locale', { locale: element })}
                                    </option>
                                ))}
                            </LocaleSwitcherSelect>
                        </div>

                        {/* <SideBar
                            locale={locale}
                            headerLink_1={translate('header_link1')}
                            headerLink_2={translate('header_link2')}
                            headerLink_3={translate('header_link3')}
                            headerLink_4={translate('header_link4')}
                        /> */}
                    </aside>
                </div>
                {children}
            </body>
        </html>
    )
}
