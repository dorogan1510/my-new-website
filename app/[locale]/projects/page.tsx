import React from 'react'
import { bitter } from '../layout'

const page = () => {
    return (
        <main>
            <div className={bitter.className}>
                <h1 className='text-3xl md:text-4xl font-bold mb-4'>
                    Мои проекты
                </h1>
            </div>

            {/* <div className='flex flex-col md:flex-row justify-between  mb-4'>
                <div className='flex flex-col justify-between order-2 md:order-1'>
                    <p className='m-0 mb-6'>
                        Я фронтенд разработчик, фрилансер и путешественник Я
                        путешествую по миру, знакомлюсь с культурой разных стран
                        и работаю в процессе. Сейчас я живу в Таиланде.
                    </p>
                </div>
            </div> */}
            <div className='overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 '>
                <div className='pointer-events-none'>
                    <div className='absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]'></div>
                    <div className='absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 '></div>
                    <div className='absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100'></div>
                </div>
                <a href='/projects/planetfall'>
                    <article className=' w-full h-full p-4 md:p-8'>
                        <h2
                            id='featured-post'
                            className='mb-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display'
                        >
                            Сайт посуточной аренды квартир в Санкт-Петербурге
                        </h2>
                        <p className='mb-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300'>
                            Многостраничый сайт по аренде недвижимости в
                            Санкт-Петербурге
                        </p>
                        <div className=''>
                            <p className='hidden text-zinc-200 hover:text-zinc-50 lg:block'>
                                Read more <span aria-hidden='true'>→</span>
                            </p>
                        </div>
                    </article>
                </a>
            </div>
        </main>
    )
}

export default page
