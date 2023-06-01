'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import React, { useState } from 'react'

const PriceCurrencySwitcher = ({
    price_usd,
    price_rub,
    price_from_word,
}: {
    price_usd: string
    price_rub: string
    price_from_word: string
}) => {
    const [isRuble, setIsRuble] = useState<boolean>(true)

    interface ICurrency {
        state: boolean
        setState: boolean
        currency: string
    }

    const currency = [
        {
            state: isRuble,
            setState: true,
            currency: 'RUB',
        },
        {
            state: !isRuble,
            setState: false,
            currency: 'USD',
        },
    ]

    return (
        <>
            <div className='flex border border-zinc-600 rounded-full px-2 py-1'>
                {currency.map((data: ICurrency) => (
                    <button
                        key={data.currency}
                        onClick={() => setIsRuble(data.setState)}
                        className={clsx(
                            'text-sm  transition-all hover:text-neutral-200  flex align-middle',
                            {
                                'text-neutral-500': !data.state,
                                'font-bold': data.state,
                            }
                        )}
                    >
                        <span className=' relative py-[5px] px-[10px]'>
                            {data.currency}
                            {data.state ? (
                                <motion.div
                                    className='absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]'
                                    transition={{
                                        type: 'spring',
                                        stiffness: 350,
                                        damping: 30,
                                    }}
                                />
                            ) : null}
                        </span>
                    </button>
                ))}
            </div>
            <p className='text-4xl text-center font-bold'>
                <span className='text-2xl'>{price_from_word} </span>
                {isRuble ? price_rub : price_usd}
            </p>
        </>
    )
}

export default PriceCurrencySwitcher
