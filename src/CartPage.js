import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'
import './CartPage.css'

function CartPage({ items, onAddOne, onRemoveOne, total }) {
  if (!items.length) {
    return (
      <h2 className="empty-cart-message">
        Your cart is empty. Add some products to it.
      </h2>
    )
  }
  return (
    <div>
      <ul className="CartPage-items">
        {items.map((item) => (
          <li key={item.id} className="CartPage-item">
            <Item item={item}>
              <div className="CartItem-controls">
                <button
                  className="CartItem-removeOne"
                  onClick={() => onRemoveOne(item)}
                >
                  &ndash;
                </button>
                <span className="CartItem-count">{item.count}</span>
                <button
                  className="CartItem-addOne"
                  onClick={() => onAddOne(item)}
                >
                  +
                </button>
              </div>
            </Item>
          </li>
        ))}
      </ul>
      <div className="total-message">
        {`The total of your cart is: ${total}`}
      </div>
    </div>
  )
}

CartPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired,
}

export default CartPage
