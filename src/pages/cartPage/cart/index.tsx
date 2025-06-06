import CartItemsTable from './CartItemsTable';
import CartTotal from './CartTotal';
import NavigationAcitons from '../NavigationActions';

// css
import classes from '../CartLayout.module.scss';


export default function Cart() {
    return (
        <div className={classes['cart-layout']}>
            <CartItemsTable className={classes['cart']} />
            <CartTotal className={classes['total']} />
            <NavigationAcitons className={classes['rest']} />
        </div>
    );
}