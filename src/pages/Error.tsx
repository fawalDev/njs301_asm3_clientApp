import { useRouteError } from 'react-router-dom';
import MainNav from '../components/layout/MainNav';

function Error() {
    const error: any = useRouteError()
    let title = 'An error has occurred!'
    let message = 'Something went wrong!'

    // message = JSON.parse(error.data).message
    if (error.status === 404) {
        title = 'Not Found!'
        message = 'Could not find resoure or page.'
    }
    else if (error.status === 401) {
        title = 'Not Authorize!'
        message = error.data.message || 'You do not have permission for this resoure.'
        // message = error.data.message
    }
    else if (error.status === 500)
        message = error.data.message

    return (
        <>
            <MainNav />
            <div className='h-32 lg:h-60'></div>
            <div className='flex flex-col items-center w-full gap-5'>
                <h3 className='uppercase text-3xl font-bold '>{title}</h3>
                <p>{message}</p>
            </div>
            <div className='h-96'></div>
        </>
    );
}

export default Error;