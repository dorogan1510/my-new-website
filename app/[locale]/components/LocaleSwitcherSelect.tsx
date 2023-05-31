'use client'

import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next-intl/client'
import { ChangeEvent, ReactNode, useTransition } from 'react'

type Props = {
    children: ReactNode
    defaultValue: string
    label: string
}

export default function LocaleSwitcherSelect({
    children,
    defaultValue,
    label,
}: Props) {
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
                ' text-gray-400',
                isPending && 'transition-opacity [&:disabled]:opacity-30'
            )}
        >
            <select
                className='text-sm sm:text-base mx-4 md:mx-0 mb-2 inline-flex appearance-none border-2 rounded-2xl border-neutral-500 hover:border-neutral-400 transition-all bg-transparent py-2 pl-2 pr-3 text-neutral-500'
                defaultValue={defaultValue}
                disabled={isPending}
                onChange={onSelectChange}
            >
                {children}
            </select>
        </label>
    )
}
