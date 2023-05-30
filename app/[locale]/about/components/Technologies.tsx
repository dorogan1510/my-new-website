import { bitter } from '@/app/layout'
import React from 'react'

const Technologies = () => {
    return (
        <>
            <h2 className='text-center md:text-left mb-8 text-xl  text-zinc-800 dark:text-zinc-100 lg:text-2xl'>
                Технологии которые я использую в своей работе
            </h2>
            <div className='lg:mx-auto'>
                <section className='mb-8'>
                    <div className='flex flex-col md:flex-row md:justify-center gap-4 '>
                        <div className='flex-1 border-0 pl-0 lg:col-span-2 text-zinc-800 dark:text-zinc-100 md:pl-6 md:border-l md:border-zinc-200  md:dark:border-zinc-700/40'>
                            <h2 className='sticky top-5'>
                                Языки програмирования, библиотеки и фреймворки
                            </h2>
                        </div>
                        <div className='flex-1'>
                            <ul className='space-y-16'>
                                <li>
                                    <h3 className='text-base  tracking-tight text-zinc-800 dark:text-zinc-100'>
                                        JavaScript
                                    </h3>
                                    <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                                        ES5: если приходится работать со старым
                                        кодом. ES6+: во всех остальных случаях
                                    </p>
                                </li>
                                <li>
                                    <h3 className='text-base  tracking-tight text-zinc-800 dark:text-zinc-100'>
                                        Typescript
                                    </h3>
                                    <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                                        На данный момент использую его во всех
                                        новых сайтах и приложениях
                                    </p>
                                </li>
                                <li>
                                    <h3 className='text-base  tracking-tight text-zinc-800 dark:text-zinc-100'>
                                        React.js
                                    </h3>
                                    <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                                        Next.js 13: использую во всех новых
                                        сайтах и приложениях, в том числе и на
                                        этом сайте
                                    </p>
                                </li>
                                <li>
                                    <h3 className='text-base  tracking-tight text-zinc-800 dark:text-zinc-100'>
                                        Стейт менеджеры
                                    </h3>
                                    <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                                        Redux Toolkit, MobX
                                    </p>
                                </li>
                                <li>
                                    <h3 className='text-base  tracking-tight text-zinc-800 dark:text-zinc-100'>
                                        CSS библиотеки и препроцессоры
                                    </h3>
                                    <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                                        SCSS/SASS, CSS modules, Tailwind,
                                        MaterialUI, Bootstrap
                                    </p>
                                </li>
                                <li>
                                    <h3 className='text-base  tracking-tight text-zinc-800 dark:text-zinc-100'>
                                        Анимации
                                    </h3>
                                    <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                                        Framer-motion, React Transition Group
                                    </p>
                                </li>
                                <li>
                                    <h3 className='text-base  tracking-tight text-zinc-800 dark:text-zinc-100'>
                                        Система контроля версий
                                    </h3>
                                    <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                                        Git, Github
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <hr className='border-zinc-200  dark:border-zinc-700/40 sm:hidden my-8' />

                <section className='mb-8'>
                    <div className='flex flex-col md:flex-row md:justify-center gap-4 '>
                        <div className=' flex-1 border-0 pl-0 lg:col-span-2 text-zinc-800 dark:text-zinc-100 md:pl-6 md:border-l md:border-zinc-200  md:dark:border-zinc-700/40'>
                            <h2 className='sticky top-5'>
                                Сборщики и упаковщики
                            </h2>
                        </div>
                        <div className='flex-1'>
                            <ul className='space-y-16'>
                                <li>
                                    <h3 className='text-base  tracking-tight text-zinc-800 dark:text-zinc-100'>
                                        Laravel mix
                                    </h3>
                                    <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                                        Использую в том случае, если я пишу сайт
                                        на чистом html/css/javascript без
                                        дополнительных библиотек и фреймворков
                                    </p>
                                </li>
                                <li>
                                    <h3 className='text-base  tracking-tight text-zinc-800 dark:text-zinc-100'>
                                        Turbopack
                                    </h3>
                                    <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                                        Используется по умолчанию начиная с
                                        версии NEXT.js 13
                                    </p>
                                </li>
                                <li>
                                    <h3 className='text-base  tracking-tight text-zinc-800 dark:text-zinc-100'>
                                        Webpack
                                    </h3>
                                    <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                                        Используется по умолчанию в библиотеке
                                        React.js
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <hr className='border-zinc-200  dark:border-zinc-700/40 sm:hidden my-8' />

                <section className='pb-8'>
                    <div className='flex flex-col md:flex-row md:justify-center gap-4 '>
                        <h2 className='flex-1 border-0 pl-0 lg:col-span-2 text-zinc-800 dark:text-zinc-100 md:pl-6 md:border-l md:border-zinc-200  md:dark:border-zinc-700/40'>
                            Дизайн
                        </h2>
                        <div className='flex-1'>
                            <ul className='space-y-16'>
                                <li>
                                    <h3 className='text-base  tracking-tight text-zinc-800 dark:text-zinc-100'>
                                        Figma
                                    </h3>
                                    <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                                        Использую чаще всего в разработке веб
                                        дизайна
                                    </p>
                                </li>
                                <li>
                                    <h3 className='text-base  tracking-tight text-zinc-800 dark:text-zinc-100'>
                                        Adobe Photoshop
                                    </h3>
                                    <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                                        Использую в работе с изображениями
                                    </p>
                                </li>
                                <li>
                                    <h3 className='text-base  tracking-tight text-zinc-800 dark:text-zinc-100'>
                                        Adobe XD
                                    </h3>
                                    <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                                        Использую в случае, если по каким-то
                                        причинам не получается использовать
                                        фигму
                                    </p>
                                </li>
                                <li>
                                    <h3 className='text-base  tracking-tight text-zinc-800 dark:text-zinc-100'>
                                        Adobe After Effects
                                    </h3>
                                    <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                                        Использую в работе с моушн дизайном
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Technologies
