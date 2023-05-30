'use client'

import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { LayoutGroup, motion } from 'framer-motion'
import { bitter } from '../layout'
import {
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
    Button,
} from '@material-tailwind/react'
import { useLocale, useTranslations } from 'next-intl'
import LocaleSwitcherSelect from './LocaleSwitcherSelect'

const navItems = {
    '/': {
        name: 'Главная',
    },
    '/about': {
        name: 'Обо мне',
    },
    '/projects': {
        name: 'Проекты',
    },
    '/price': {
        name: 'Цены',
    },
}

export default function Sidebar() {
    let pathname = usePathname() || '/'
    if (pathname.includes('/about/')) {
        pathname = '/about'
    }
    const t = useTranslations('LocaleSwitcher')
    const locale = useLocale()

    return (
        <aside className='mb-4 md:mb-0 md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif'>
            <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
                {['en', 'de'].map(cur => (
                    <option key={cur} value={cur}>
                        {t('locale', { locale: cur })}
                    </option>
                ))}
            </LocaleSwitcherSelect>
            <div className='md:sticky md:top-20'>
                <LayoutGroup>
                    <nav
                        className='flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative'
                        id='nav'
                    >
                        <div className=' flex flex-row md:flex-col space-x-0 md:pr-10 mb-2 mt-2 md:mt-0'>
                            {Object.entries(navItems).map(
                                ([path, { name }]) => {
                                    const isActive = path === pathname
                                    return (
                                        <div
                                            key={path}
                                            className={bitter.className}
                                        >
                                            <Link
                                                href={path}
                                                className={clsx(
                                                    'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
                                                    {
                                                        'text-neutral-500':
                                                            !isActive,
                                                        'font-bold': isActive,
                                                    }
                                                )}
                                            >
                                                <span className='text-sm sm:text-base relative py-[5px] px-[10px]'>
                                                    {name}
                                                    {path === pathname ? (
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
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    </nav>
                </LayoutGroup>
            </div>
        </aside>
    )
}
