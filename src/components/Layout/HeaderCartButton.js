/** Component is showing Your Cart section on top of Header */

import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    const [isBtnHighlighted, setIsBtnHighlighted] = useState(false);

    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0)

    const btnClasses = `${classes.button} ${isBtnHighlighted ? classes.bump : ''}`

    useEffect(() =>{
        if(items.length == 0){
            return;
        }
        setIsBtnHighlighted(true);

         const timer = setTimeout(() => {
            setIsBtnHighlighted(false);
         }, 300)

        // this fun will act as a garbage collector and clean the timer
        return () => {
            clearTimeout(timer);
        };

    }, [items])

    return <button className={btnClasses} onClick={props.onClick} >
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span> Your Cart</span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>
    </button>
}

export default HeaderCartButton;