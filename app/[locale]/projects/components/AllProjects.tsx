import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import anastasia_business_card from '@/public/img/projects/anastasia_business_card.webp'
import business_card_screen from '@/public/img/projects/business_card_screen.webp'
import child_club_screen from '@/public/img/projects/child_club_screen.webp'
import evil_calculator_screen from '@/public/img/projects/evil_calculator_screen.webp'
import expense_tracker_screen from '@/public/img/projects/expense_tracker_screen.webp'
import lidiya_screen from '@/public/img/projects/lidiya_screen.webp'
import online_store_screen from '@/public/img/projects/online_store_screen.webp'
import polina_site_screen from '@/public/img/projects/polina_site_screen.webp'
import rental_screen from '@/public/img/projects/rental_screen.webp'
import todo_screen from '@/public/img/projects/todo_screen.webp'
import weather_screen from '@/public/img/projects/weather_screen.webp'
import anna_website_screen from '@/public/img/projects/anna-website.webp'

const AllProjects = () => {
    const t = useTranslations('Projects')

    const ALL_PROJECTS_TEXT1 = [
        {
            id: '5',
            h2text: t('OnlineShop.h2text'),
            p2text: t('OnlineShop.p2text'),
            litext: ['React.js/Mobx', 'MaterialUI/SASS', 'Axios/Fuse.js'],
            href: 'https://vocal-donut-4e3013.netlify.app/',
            img: online_store_screen,
        },
        {
            id: '4',
            h2text: t('TodoList.h2text'),
            p2text: t('TodoList.p2text'),
            litext: ['React.js', 'Typescript', 'React transition group'],
            href: 'https://gorgeous-quokka-121d0f.netlify.app/',
            img: todo_screen,
        },
        {
            id: '3',
            h2text: t('WeatherWidget.h2text'),
            p2text: t('WeatherWidget.p2text'),
            litext: ['JS ES6+', 'SASS', 'Laravel Mix', 'Fetch API'],
            href: 'https://dorogan1510.github.io/weather/',
            img: weather_screen,
        },
        {
            id: '2',
            h2text: t('EvilCalculator.h2text'),
            p2text: t('EvilCalculator.p2text'),
            litext: ['React.js', 'React-Bootstrap/SASS', 'useSound'],
            href: 'https://enchanting-eclair-59989f.netlify.app/',
            img: evil_calculator_screen,
        },
        {
            id: '1',
            h2text: t('ExpenseTracker.h2text'),
            p2text: t('ExpenseTracker.p2text'),
            litext: [
                'React.js/Redux toolkit',
                'Typescript',
                'Material UI',
                'Framer motion',
                'Chart.js',
            ],
            href: 'https://clever-kleicha-fffcdd.netlify.app/',
            img: expense_tracker_screen,
        },
    ]
    const ALL_PROJECTS_TEXT2 = [
        {
            id: '12',
            h2text: t('AnnaWebsite.h2text'),
            p2text: t('AnnaWebsite.p2text'),
            litext: ['Next.js 13', 'Typescript', 'Tailwind', 'Sass'],
            href: 'https://www.boomerangschool.com/',
            img: anna_website_screen,
        },
        {
            id: '11',
            h2text: t('Lidiya.h2text'),
            p2text: t('Lidiya.p2text'),
            litext: ['Next.js 13', 'Typescript', 'MaterialUI', 'Sass'],
            href: 'https://www.lidiaserdiuk.com/',
            img: lidiya_screen,
        },
        {
            id: '10',
            h2text: t('Rental.h2text'),
            p2text: t('Rental.p2text'),
            litext: ['Next.js 13', 'Typescript', 'MaterialUI', 'Sass'],
            href: 'https://www.welcometospb.ru/',
            img: rental_screen,
        },
        {
            id: '9',
            h2text: t('LanguageTutor.h2text'),
            p2text: t('LanguageTutor.p2text'),
            litext: ['Next.js 13', 'Typescript', 'MaterialUI', 'Sass'],
            href: 'https://www.zazafox.ru/',
            img: anastasia_business_card,
        },
        {
            id: '8',
            h2text: t('ChildFootbalClub.h2text'),
            p2text: t('ChildFootbalClub.p2text'),
            litext: ['Next.js 13', 'Typescript', 'MaterialUI'],
            href: 'https://www.dfk-bezenchuk.ru/',
            img: child_club_screen,
        },
        {
            id: '7',
            h2text: t('KsushaBusinessCard.h2text'),
            p2text: t('KsushaBusinessCard.p2text'),
            litext: ['JS ES6+', 'SASS', 'Laravel Mix', 'CSS animations'],
            href: 'https://easyenglishyou.ru',
            img: business_card_screen,
        },
        {
            id: '6',
            h2text: t('LanguageSchoolWebsite.h2text'),
            p2text: t('LanguageSchoolWebsite.p2text'),
            litext: ['JS ES6+', 'SASS', 'Laravel Mix'],

            href: 'https://pollyglotiki.com/',
            img: polina_site_screen,
        },
    ]

    return (
        <>
            <div className='flex flex-col md:flex-row justify-center items-start gap-4'>
                <div className='grid grid-cols-1 gap-2'>
                    {ALL_PROJECTS_TEXT2.map((data: any) => (
                        <div
                            key={data.id}
                            className='max-w-sm mb-6 overflow-hidden relative duration-700 border rounded-xl bg-zinc-800/10 hover:bg-zinc-600/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 '
                        >
                            <Link href={data.href} target='_blank'>
                                <Image
                                    src={data.img}
                                    alt={'project image'}
                                    className='w-full h-auto'
                                ></Image>
                                <article className=' w-full p-4 md:p-8'>
                                    <h2
                                        id='featured-post'
                                        className='mb-2 text-xl font-bold text-zinc-100  sm:text-2xl font-display'
                                    >
                                        {data.h2text}
                                    </h2>
                                    <p className='mb-4  duration-150 text-zinc-400 '>
                                        {data.p2text}
                                    </p>
                                    <p className='mb-1 text-zinc-400'>
                                        {t('createdWith')}
                                    </p>
                                    <ul className='mb-4 text-zinc-400'>
                                        {data.litext.map(
                                            (nestedData: any, i: any) => (
                                                <li key={nestedData[i]}>
                                                    {nestedData}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                    <p className=' text-zinc-300 hover:text-zinc-50 lg:block'>
                                        {t('lookInto')}{' '}
                                        <span aria-hidden='true'>→</span>
                                    </p>
                                </article>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className='grid grid-cols-1 gap-2'>
                    {ALL_PROJECTS_TEXT1.map((data: any) => (
                        <div
                            key={data.id}
                            className='max-w-sm mb-6 overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-600/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 '
                        >
                            <Link href={data.href}>
                                <Image
                                    src={data.img}
                                    alt={'project image'}
                                    className='w-full h-auto'
                                ></Image>
                                <article className=' w-full p-4 md:p-8'>
                                    <h2
                                        id='featured-post'
                                        className='mb-2 text-xl font-bold text-zinc-100  sm:text-2xl font-display'
                                    >
                                        {data.h2text}
                                    </h2>
                                    <p className='mb-4  duration-150 text-zinc-400 '>
                                        {data.p2text}
                                    </p>
                                    <p className='mb-1 text-zinc-400'>
                                        {t('createdWith')}
                                    </p>
                                    <ul className='mb-4 text-zinc-400'>
                                        {data.litext.map(
                                            (nestedData: any, i: any) => (
                                                <li key={nestedData[i]}>
                                                    {nestedData}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                    <p className=' text-zinc-300 hover:text-zinc-50 lg:block'>
                                        {t('lookInto')}{' '}
                                        <span aria-hidden='true'>→</span>
                                    </p>
                                </article>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AllProjects
