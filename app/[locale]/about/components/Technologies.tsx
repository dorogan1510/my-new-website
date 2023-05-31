import { useTranslations } from 'next-intl'
import React from 'react'

const Technologies = () => {
    const t = useTranslations('About')
    return (
        <>
            <h2 className='text-center md:text-left mb-8 text-xl   text-zinc-100 lg:text-2xl'>
                {t('whatIUseInMyWork')}
            </h2>
            <div className='lg:mx-auto'>
                <section className='mb-8'>
                    <div className='flex flex-col md:flex-row md:justify-center gap-4 '>
                        <div className='flex-1 border-0 pl-0 lg:col-span-2  text-zinc-100 md:pl-6 md:border-l md:border-zinc-200  md:border-zinc-700/40'>
                            <h2 className='sticky top-5'>
                                {t('programmingLanguages_about')}
                            </h2>
                        </div>
                        <div className='flex-1'>
                            <ul className='space-y-16'>
                                <li>
                                    <h3 className='text-base  tracking-tight  text-zinc-100'>
                                        {t('javascript_about')}
                                    </h3>
                                    <p className='relative z-10 mt-2 text-sm  text-zinc-400'>
                                        {t('javascriptDescription_about')}
                                    </p>
                                </li>
                                <li>
                                    <h3 className='text-base  tracking-tight  text-zinc-100'>
                                        {t('typescript_about')}
                                    </h3>
                                    <p className='relative z-10 mt-2 text-sm  text-zinc-400'>
                                        {t('typescriptDescription_about')}
                                    </p>
                                </li>
                                <li>
                                    <h3 className='text-base  tracking-tight  text-zinc-100'>
                                        {t('react_about')}
                                    </h3>
                                    <p className='relative z-10 mt-2 text-sm  text-zinc-400'>
                                        {t('reactDescription_about')}
                                    </p>
                                </li>
                                <li>
                                    <h3 className='text-base  tracking-tight  text-zinc-100'>
                                        {t('stateManager_about')}
                                    </h3>
                                    <p className='relative z-10 mt-2 text-sm  text-zinc-400'>
                                        {t('stateManagerDescription_about')}
                                    </p>
                                </li>
                                <li>
                                    <h3 className='text-base  tracking-tight  text-zinc-100'>
                                        {t('cssFrameworks_about')}
                                    </h3>
                                    <p className='relative z-10 mt-2 text-sm  text-zinc-400'>
                                        {t('cssFrameworksDescription_about')}
                                    </p>
                                </li>
                                <li>
                                    <h3 className='text-base  tracking-tight  text-zinc-100'>
                                        {t('animation_about')}
                                    </h3>
                                    <p className='relative z-10 mt-2 text-sm  text-zinc-400'>
                                        {t('animationDescription_about')}
                                    </p>
                                </li>
                                <li>
                                    <h3 className='text-base  tracking-tight  text-zinc-100'>
                                        {t('controlVersionSystem_about')}
                                    </h3>
                                    <p className='relative z-10 mt-2 text-sm  text-zinc-400'>
                                        {t(
                                            'controlVersionSystemDescription_about'
                                        )}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <hr className='border-zinc-200  border-zinc-700/40 sm:hidden my-8' />

                <section className='mb-8'>
                    <div className='flex flex-col md:flex-row md:justify-center gap-4 '>
                        <div className=' flex-1 border-0 pl-0 lg:col-span-2  text-zinc-100 md:pl-6 md:border-l md:border-zinc-200  md:border-zinc-700/40'>
                            <h2 className='sticky top-5'>
                                {t('bundlers_about')}
                            </h2>
                        </div>
                        <div className='flex-1'>
                            <ul className='space-y-16'>
                                <li>
                                    <h3 className='text-base  tracking-tight  text-zinc-100'>
                                        {t('laravelMix_about')}
                                    </h3>
                                    <p className='relative z-10 mt-2 text-sm  text-zinc-400'>
                                        {t('laravelMixDescription_about')}
                                    </p>
                                </li>
                                <li>
                                    <h3 className='text-base  tracking-tight  text-zinc-100'>
                                        {t('turbopack_about')}
                                    </h3>
                                    <p className='relative z-10 mt-2 text-sm  text-zinc-400'>
                                        {t('turbopackDescription_about')}
                                    </p>
                                </li>
                                <li>
                                    <h3 className='text-base  tracking-tight  text-zinc-100'>
                                        {t('webpack_about')}
                                    </h3>
                                    <p className='relative z-10 mt-2 text-sm  text-zinc-400'>
                                        {t('webpackDescription_about')}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <hr className='border-zinc-200  border-zinc-700/40 sm:hidden my-8' />

                <section className='pb-8'>
                    <div className='flex flex-col md:flex-row md:justify-center gap-4 '>
                        <h2 className='flex-1 border-0 pl-0 lg:col-span-2  text-zinc-100 md:pl-6 md:border-l md:border-zinc-200  md:border-zinc-700/40'>
                            {t('design_about')}
                        </h2>
                        <div className='flex-1'>
                            <ul className='space-y-16'>
                                <li>
                                    <h3 className='text-base  tracking-tight  text-zinc-100'>
                                        {t('figma_about')}
                                    </h3>
                                    <p className='relative z-10 mt-2 text-sm  text-zinc-400'>
                                        {t('figmaDescription_about')}
                                    </p>
                                </li>
                                <li>
                                    <h3 className='text-base  tracking-tight  text-zinc-100'>
                                        {t('adobePhotoshop_about')}
                                    </h3>
                                    <p className='relative z-10 mt-2 text-sm  text-zinc-400'>
                                        {t('adobePhotoshopDescription_about')}
                                    </p>
                                </li>
                                <li>
                                    <h3 className='text-base  tracking-tight  text-zinc-100'>
                                        {t('AdobeXd_about')}
                                    </h3>
                                    <p className='relative z-10 mt-2 text-sm  text-zinc-400'>
                                        {t('AdobeXdDescription_about')}
                                    </p>
                                </li>
                                <li>
                                    <h3 className='text-base  tracking-tight  text-zinc-100'>
                                        {t('adobeAfterEffects_about')}
                                    </h3>
                                    <p className='relative z-10 mt-2 text-sm  text-zinc-400'>
                                        {t(
                                            'adobeAfterEffectsDescription_about'
                                        )}
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
