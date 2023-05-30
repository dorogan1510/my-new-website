import React from 'react'
import Link from 'next/link'
import { bitter } from '../layout'
import SwiperComponent from './components/SwiperComponent'
import Technologies from './components/Technologies'

const about = () => {
    return (
        <main>
            <div className={bitter.className}>
                <h1 className='text-3xl md:text-4xl font-bold mb-4'>Обо мне</h1>
            </div>

            <div className=' mb-4'>
                <p className='m-0 mb-6'>
                    Я фронтенд разработчик, фрилансер и путешественник Я
                    путешествую по миру, знакомлюсь с культурой разных стран и
                    работаю в процессе. Сейчас я живу в Таиланде.
                </p>
            </div>
            <SwiperComponent />
            <Technologies />
        </main>
    )
}

export default about
