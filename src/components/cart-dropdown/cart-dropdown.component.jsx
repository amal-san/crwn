import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selector'
import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown.styles.scss'
import { withRouter } from 'react-router-dom'
import { toggleCardHidden } from '../../redux/cart/cart.action'



const CartDropdown = ({cartItems ,history ,toggleCardHidden}) => {

    const handleClick = e => {
        history.push('checkout')
        toggleCardHidden();
    }

    return(
    <div className="cart-dropdown">
        <div className="cart-items">
            { cartItems.length ?
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>))
                : <span className="empty-message">Your cart is Empty</span>
            }
        </div>
        <CustomButton onClick={handleClick}>
            GO TO CHECKOUT
        </CustomButton>
    </div>)
}


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

const mapDispatchToProps = dispatch => ({
    toggleCardHidden: () => dispatch(toggleCardHidden())
})
 

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (CartDropdown))