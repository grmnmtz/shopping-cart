import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'
import './CartPage.css'

function CartPage({ items, onAddOne, onRemoveOne }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} className="CartPage-item">
          <Item item={item}>
            <div className="cartItem-controls">
              <button
                className="CartItem-removeOne"
                onClick={() => onRemoveOne(item)}
              >
                &ndash;
              </button>
              <span className="CartItem-count">{item.count}</span>
            </div>
            <button className="CartItem-addOne" onClick={() => onAddOne(item)}>
              +
            </button>
          </Item>
        </li>
      ))}
    </ul>
  )
}

CartPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired,
}

export default CartPage
