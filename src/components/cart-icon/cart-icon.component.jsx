import React from 'react';
import { connect } from 'react-redux';

import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { toggleCardHidden } from '../../redux/cart/cart.action';
import CartItem from '../cart-item/cart-item.component';


import './cart-icon.styles.scss'




const CartIcon = ({ toggleCardHidden, itemCount }) => (
    <div className="cart-icon" onClick={toggleCardHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'> { itemCount }</span>
    </div>
)

const mapStateToProps = ({cart:{cartItems}}) => ({
    itemCount:cartItems.reduce((accumalatedQuantity, CartItem) => accumalatedQuantity + CartItem.quantity,0)
})

const mapDispatchToProps = dispatch => ({
    toggleCardHidden: () => dispatch(toggleCardHidden())
})

export default connect(mapStateToProps,mapDispatchToProps) (CartIcon);