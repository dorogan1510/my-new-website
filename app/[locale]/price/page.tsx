import { CheckIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { bitter } from '../layout'
import { Balancer } from 'react-wrap-balancer'
import { useTranslations } from 'next-intl'

const includedFeatures = [
    'Private forum access',
    'Member resources',
    'Entry to annual conference',
    'Official member t-shirt',
]

const Price = () => {
    const t = useTranslations('Price')

    const ALL_PRICE_TEXT = [
        {
            id: 1,
            h1_text: t('Landing.h1_landing'),
            p_text: t('Landing.description_landing'),
            include: [
                t('Landing.whatsInclude1_landing'),
                t('Landing.whatsInclude2_landing'),
                t('Landing.whatsInclude3_landing'),
                t('Landing.whatsInclude4_landing'),
            ],
            not_include: [
                t('Landing.whatsNotInclude1_landing'),
                t('Landing.whatsNotInclude2_landing'),
                t('Landing.whatsNotInclude3_landing'),
            ],
            whats_include: t('Landing.whatsInclude_landing'),
            whats_not_include: t('Landing.whatsNotInclude_landing'),
            price: t('Landing.price_landing'),
            button: t('Landing.button_landing'),
            workTime: t('Landing.workTime_landing'),
        },
        {
            id: 2,
            h1_text: t('Multipage.h1_multipage'),
            p_text: t('Multipage.description_multipage'),
            include: [
                t('Multipage.whatsInclude1_multipage'),
                t('Multipage.whatsInclude2_multipage'),
                t('Multipage.whatsInclude3_multipage'),
                t('Multipage.whatsInclude4_multipage'),
            ],
            not_include: [
                t('Multipage.whatsNotInclude1_multipage'),
                t('Multipage.whatsNotInclude2_multipage'),
                t('Multipage.whatsNotInclude3_multipage'),
            ],
            whats_include: t('Multipage.whatsInclude_multipage'),
            whats_not_include: t('Multipage.whatsNotInclude_multipage'),
            price: t('Multipage.price_multipage'),
            button: t('Multipage.button_multipage'),
            workTime: t('Multipage.workTime_multipage'),
        },
        {
            id: 3,
            h1_text: t('BusinessCard.h1_businessCard'),
            p_text: t('BusinessCard.description_businessCard'),
            include: [
                t('BusinessCard.whatsInclude1_businessCard'),
                t('BusinessCard.whatsInclude2_businessCard'),
                t('BusinessCard.whatsInclude3_businessCard'),
                t('BusinessCard.whatsInclude4_businessCard'),
            ],
            not_include: [
                t('BusinessCard.whatsNotInclude1_businessCard'),
                t('BusinessCard.whatsNotInclude2_businessCard'),
                t('BusinessCard.whatsNotInclude3_businessCard'),
            ],
            whats_include: t('BusinessCard.whatsInclude_businessCard'),
            whats_not_include: t('BusinessCard.whatsNotInclude_businessCard'),
            price: t('BusinessCard.price_businessCard'),
            button: t('BusinessCard.button_businessCard'),
            workTime: t('BusinessCard.workTime_businessCard'),
        },
    ]

    interface IALL_PRICE_TEXT {
        id: number
        h1_text: string
        p_text: string
        include: Array<string>
        not_include: Array<string>
        whats_include: string
        whats_not_include: string
        price: string
        button: string
        workTime: string
    }

    return (
        <main>
            <div className={bitter.className}>
                <h1 className='text-3xl md:text-4xl font-bold mb-4'>
                    {t('Prices')}
                </h1>
            </div>
            <div className='grid grid-cols-1 gap-6'>
                {ALL_PRICE_TEXT.map((data: IALL_PRICE_TEXT) => (
                    <div
                        key={data.id}
                        className='max-w-4xl mb-8  border rounded-xl md:gap-8 border-zinc-600 bg-gradient-to-br from-neutral-900 to-neutral-800 '
                    >
                        <article className=' w-full p-4 md:p-8'>
                            <h2
                                id='featured-post'
                                className='mb-4 text-3xl font-bold text-zinc-100  font-display'
                            >
                                {data.h1_text}
                            </h2>
                            <div className='flex flex-col md:flex-row  items-center md:items-start gap-2 md:gap-8 '>
                                <div>
                                    <p className='mb-4   duration-150 text-zinc-400 '>
                                        {data.p_text}
                                    </p>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                        <div>
                                            <p className='mb-2 text-zinc-400'>
                                                {data.whats_include}
                                            </p>
                                            <ul className=' text-zinc-400'>
                                                {data.include.map(
                                                    (
                                                        nestedData: string,
                                                        index
                                                    ) => (
                                                        <div
                                                            className='grid grid-cols-12 mb-3'
                                                            key={index}
                                                        >
                                                            <svg
                                                                xmlns='http://www.w3.org/2000/svg'
                                                                fill='none'
                                                                viewBox='0 0 24 24'
                                                                strokeWidth={
                                                                    1.5
                                                                }
                                                                stroke='currentColor'
                                                                className='w-6 h-6 col-span-2'
                                                            >
                                                                <path
                                                                    strokeLinecap='round'
                                                                    strokeLinejoin='round'
                                                                    d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                                                                />
                                                            </svg>
                                                            <li className=' text-sm col-span-10'>
                                                                {nestedData}
                                                            </li>
                                                        </div>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                        <div>
                                            <p className='mb-2 text-zinc-400'>
                                                {data.whats_not_include}
                                            </p>
                                            <ul className=' text-zinc-400'>
                                                {data.not_include.map(
                                                    (
                                                        nestedData: string,
                                                        index
                                                    ) => (
                                                        <div
                                                            className='grid grid-cols-12 mb-3'
                                                            key={index}
                                                        >
                                                            <svg
                                                                xmlns='http://www.w3.org/2000/svg'
                                                                fill='none'
                                                                viewBox='0 0 24 24'
                                                                strokeWidth={
                                                                    1.5
                                                                }
                                                                stroke='currentColor'
                                                                className='w-6 h-6 col-span-2'
                                                            >
                                                                <path
                                                                    strokeLinecap='round'
                                                                    strokeLinejoin='round'
                                                                    d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                                                                />
                                                            </svg>

                                                            <li className=' text-sm col-span-10'>
                                                                {nestedData}
                                                            </li>
                                                        </div>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center  items-center gap-4'>
                                    <p className=' text-4xl text-center font-bold'>
                                        {data.price}
                                    </p>
                                    <button
                                        className=' border-2  transition-all ease-in  hover:border-zinc-400 border-zinc-600  group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-full'
                                        type='button'
                                    >
                                        <span className='flex items-center transition-all    rounded-full text-base px-6 py-3 border border-transparent'>
                                            {data.button}
                                        </span>
                                    </button>
                                    <div className='text-center  text-zinc-400'>
                                        {data.workTime}
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Price
