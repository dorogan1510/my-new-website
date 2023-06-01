'use client'

import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next-intl/client'
import { ChangeEvent, ReactNode, useTransition } from 'react'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { bitter } from '../layout'
import { Dropdown } from 'flowbite-react'

type Props = {
    children: ReactNode
    defaultValue: string
}

const LocaleSwitcherSelect = ({ children, defaultValue }: Props) => {
    const router = useRouter()
    const pathname = usePathname()
    const [isPending, startTransition] = useTransition()

    function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        startTransition(() => {
            router.replace(`/${event.target.value}${pathname}`)
        })
    }

    return (
        <label
            className={clsx(
                'text-neutral-500',
                isPending && 'transition-opacity [&:disabled]:opacity-30'
            )}
        >
            <select
                className='text-sm sm:text-base mx-4 md:mx-0 mb-2 inline-flex appearance-none border-2 rounded-2xl border-neutral-500 hover:border-neutral-400 transition-all bg-transparent py-2 pl-2 pr-3  font-bold'
                defaultValue={defaultValue}
                disabled={isPending}
                onChange={onSelectChange}
            >
                {children}
            </select>
        </label>
    )
}

export default LocaleSwitcherSelect
