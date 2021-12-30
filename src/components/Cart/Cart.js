/* responsible for showing cart details using Modal */

import React, { Fragment, useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import Checkout from './Checkout/Checkout';

const Cart = (props) => {
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    const cartCtx = useContext(CartContext);

    const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
    

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = item => {
        cartCtx.addItem({...item, amount:1});
    };

    const orderHandler =() => {
        setIsCheckout(true);
    };

    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true);
        await fetch(process.env.REACT_APP_ORDER_URL,{
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items
            })
        });
        setIsSubmitting(false);
        setDidSubmit(true);
        cartCtx.clearCart();
    }; 

    const cartItems = 
        <ul className={classes['cart-items']}>
            {cartCtx.items.map(item => (
                <CartItem
                 key={item.id}
                 name={item.name}
                 price={item.price}
                 amount={item.amount}
                 onRemove={cartItemRemoveHandler.bind(null, item.id)}
                 onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>;

    const modalActions = (<div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button> }
        </div>
        );
    
    const cartModalContent = (
        <Fragment>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>

            {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose}/> }
            {!isCheckout && modalActions}
        </Fragment>
    );
    
    const isSubmittingModalContent = <p>Sending order data..</p>;
       
    const didSubmitModalContent = <Fragment>
            <p>Successfully sent the order!</p>
            <div className={classes.actions}>
                <button className={classes.button} onClick={props.onClose}>Close</button>
            </div>
        </Fragment>;

    return <Modal onClose={props.onClose}>
       {!isSubmitting && !didSubmit && cartModalContent}
       {isSubmitting && isSubmittingModalContent}
       {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
};

export default Cart;