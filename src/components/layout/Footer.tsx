import { Link } from 'react-router-dom';
import Container from '../UI/Container';


interface FooterRowProps {
    title: string
    children: any
}

function FooterRow({ title, children }: FooterRowProps) {
    return (
        <span>
            <h5 className='uppercase text-xl font-medium mb-5'>{title}</h5>
            <div className='flex flex-col gap-1 capitalize font-thin text-sm'>
                {children}
            </div>
        </span>
    )
}

function Row_1() {
    return (
        <FooterRow title='Customer Services'>
            <Link to=''>Help & Contact Us</Link>
            <Link to=''>Returns & Refunds</Link>
            <Link to=''>Online Stores</Link>
            <Link to=''>Term & Conditions</Link>
        </FooterRow>
    )
}

function Row_2() {
    return (
        <FooterRow title='Company'>
            <Link to=''>What we do</Link>
            <Link to=''>Available services</Link>
            <Link to=''>Latest Posts</Link>
            <Link to=''>FAQs</Link>
        </FooterRow>
    )
}

function Row_3() {
    return (
        <FooterRow title='Social Media'>
            <Link to=''>Twitter</Link>
            <Link to=''>Instagram</Link>
            <Link to=''>Facebook</Link>
            <Link to=''>Pinterest</Link>
        </FooterRow>
    )
}


function Footer() {
    return (
        <footer className='bg-black text-white italic py-8 md:py-10 lg:py-28'>
            <Container className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <Row_1 />
                <Row_2 />
                <Row_3 />
            </Container>
        </footer>
    );
}

export default Footer;

