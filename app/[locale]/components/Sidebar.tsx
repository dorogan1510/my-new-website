'use client'

import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { LayoutGroup, motion } from 'framer-motion'
import { bitter } from '../layout'
import { useLocale, useTranslations } from 'next-intl'
import LocaleSwitcherSelect from './LocaleSwitcherSelect'

export default function Sidebar({
    locale,
    headerLink_1,
    headerLink_2,
    headerLink_3,
    headerLink_4,
}: {
    locale: any
    headerLink_1: string
    headerLink_2: string
    headerLink_3: string
    headerLink_4: string
}) {
    const pathname = usePathname()

    interface ILinks {
        name: string
        href: string
    }

    const links = [
        {
            name: headerLink_1,
            href: `/${locale}`,
        },
        {
            name: headerLink_2,
            href: `/${locale}/about`,
        },
        {
            name: headerLink_3,
            href: `/${locale}/projects`,
        },
        {
            name: headerLink_4,
            href: `/${locale}/price`,
        },
    ]

    return (
        <LayoutGroup>
            <nav
                className='flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative'
                id='nav'
            >
                <div className=' flex flex-row md:flex-col space-x-0 md:pr-10 mb-2 mt-2 md:mt-0'>
                    {links.map((data: ILinks) => {
                        const isActive = data.href === pathname
                        return (
                            <Link
                                key={data.name}
                                href={data.href}
                                className={clsx(
                                    'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
                                    {
                                        'text-neutral-500': !isActive,
                                        'font-bold': isActive,
                                    }
                                )}
                            >
                                <span className='text-sm sm:text-base relative py-[5px] px-[10px]'>
                                    {data.name}
                                    {data.href === pathname ? (
                                        <motion.div
                                            className='absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]'
                                            layoutId='sidebar'
                                            transition={{
                                                type: 'spring',
                                                stiffness: 350,
                                                damping: 30,
                                            }}
                                        />
                                    ) : null}
                                </span>
                            </Link>
                        )
                    })}
                </div>
            </nav>
        </LayoutGroup>
    )
}
