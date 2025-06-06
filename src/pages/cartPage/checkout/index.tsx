import BillingDetail from './BillingDetail';
// css
import classes from '../CartLayout.module.scss';
import CheckoutTotal from './CheckoutTotal';
import SuccessOrderModal from './SuccessOrderModal';

function Checkout() {
    return (
        <div className={classes['cart-layout']}>
            <SuccessOrderModal />
            <BillingDetail className={classes['cart']} />
            <CheckoutTotal className={classes['total']} />
            <div className={classes['rest']} />
        </div>
    );
}

export default Checkout;