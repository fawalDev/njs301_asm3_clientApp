import AdditionalInformation from '../../components/layout/AdditionalInformation';
import HomeBanner from './comps/HomeBanner';
import CategoriesBrowser from '../../components/layout/CategoriesBrowser';
import useScrollToTopPage from '../../hooks/useScrollToTopPage';
import TrendingProduct from './comps/TrendingProduct';

export default function HomeIndex() {
    useScrollToTopPage()
    return (
        <div className='flex flex-col gap-24 mb-12'>
            <HomeBanner />
            <CategoriesBrowser />
            <TrendingProduct />
            <AdditionalInformation />
        </div>
    );
}
