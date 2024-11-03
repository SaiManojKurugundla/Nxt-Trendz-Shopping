// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'
const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(each => {
        total += each.price * each.quantity
      })
      return (
        <div className="cart-summary-container">
          <div className="cart-summary-description">
            <h1 className="cart-summary-heading">
              Order Total:
              <span className="cart-summary-total"> Rs {total}/-</span>
            </h1>
            <p className="cart-summary-para">
              <span className="cart-summary-count">{cartList.length}</span>{' '}
              items in cart
            </p>
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
