'use client'

import React from 'react'
import img1 from '@/public/img/travel/img(1).webp'
import img10 from '@/public/img/travel/img(10).webp'
import img11 from '@/public/img/travel/img(11).webp'
import img12 from '@/public/img/travel/img(12).webp'
import img13 from '@/public/img/travel/img(13).webp'
import img14 from '@/public/img/travel/img(14).webp'
import img15 from '@/public/img/travel/img(15).webp'
import img16 from '@/public/img/travel/img(16).webp'
import img17 from '@/public/img/travel/img(17).webp'
import img18 from '@/public/img/travel/img(18).webp'
import img19 from '@/public/img/travel/img(19).webp'
import img2 from '@/public/img/travel/img(2).webp'
import img20 from '@/public/img/travel/img(20).webp'
import img21 from '@/public/img/travel/img(21).webp'
import img22 from '@/public/img/travel/img(22).webp'
import img23 from '@/public/img/travel/img(23).webp'
import img24 from '@/public/img/travel/img(24).webp'
import img25 from '@/public/img/travel/img(25).webp'
import img3 from '@/public/img/travel/img(3).webp'
import img4 from '@/public/img/travel/img(4).webp'
import img5 from '@/public/img/travel/img(5).webp'
import img6 from '@/public/img/travel/img(6).webp'
import img7 from '@/public/img/travel/img(7).webp'
import img8 from '@/public/img/travel/img(8).webp'
import img9 from '@/public/img/travel/img(9).webp'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/effect-cards'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, EffectCoverflow } from 'swiper'
const SwiperComponent = () => {
    const imageArrayForGallery = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14,
        img15,
        img16,
        img17,
        img18,
        img19,
        img20,
        img21,
        img22,
        img23,
        img24,
        img25,
    ]
    return (
        <div className='w-[200px] mb-8 ml-10 '>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className='w-full '
                spaceBetween={50}
                // loop={true}
            >
                {imageArrayForGallery.map((data, index) => (
                    <SwiperSlide
                        className='bg-center bg-cover !w-48 h-auto'
                        key={index}
                    >
                        <Image
                            src={data}
                            alt={'image'}
                            className='block w-full h-auto rounded-md'
                            priority
                            placeholder='blur'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default SwiperComponent
