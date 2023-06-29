import { useTranslations } from 'next-intl'
import FramerWrapper from '../components/FramerWrapper'
import { bitter } from '../layout'
import PriceCard from './components/PriceCard'

const Price = () => {
    const t = useTranslations('Price')

    return (
        <FramerWrapper>
            <main>
                <div className={bitter.className}>
                    <h1 className='text-3xl md:text-4xl font-bold mb-4'>
                        {t('Prices')}
                    </h1>
                </div>
                <PriceCard />
            </main>
        </FramerWrapper>
    )
}

export default Price
