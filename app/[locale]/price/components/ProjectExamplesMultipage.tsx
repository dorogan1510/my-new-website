'use client'

import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment, JSX, SVGProps } from 'react'

import React from 'react'

const ProjectExamplesMultipage = ({
    examples,
    example_multipage_1,
    example_multipage_2,
}: {
    examples: string
    example_multipage_1: string
    example_multipage_2: string
}) => {
    return (
        <div>
            <Menu as='div' className='relative inline-block text-left'>
                <div>
                    <Menu.Button className='inline-flex w-full justify-center items-center gap-1 rounded-md bg-gradient-to-br from-neutral-900 to-neutral-800 border border-zinc-600 px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:hover:border-zinc-400 transition-all  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
                        {examples}
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='w-4 h-4'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                            />
                        </svg>
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                >
                    <Menu.Items className='absolute transition-all border border-zinc-600 left-0 sm:left-auto sm:right-0  mt-2 w-56 origin-top-right divide-y divide-zinc-600 rounded-md bg-gradient-to-br from-neutral-900 to-neutral-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        <div>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        className={`${
                                            active
                                                ? 'bg-neutral-800 text-white'
                                                : 'text-zinc-400'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        href={'https://www.welcometospb.ru/'}
                                        target='_blank'
                                    >
                                        {example_multipage_1}
                                    </Link>
                                )}
                            </Menu.Item>
                        </div>
                        <div>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        className={`${
                                            active
                                                ? 'bg-neutral-800 text-white'
                                                : 'text-zinc-400'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        href={
                                            'https://vocal-donut-4e3013.netlify.app/'
                                        }
                                        target='_blank'
                                    >
                                        {example_multipage_2}
                                    </Link>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}

export default ProjectExamplesMultipage
