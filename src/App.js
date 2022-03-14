import React, { useState } from 'react'
import ItemPage from './ItemPage'
import CartPage from './CartPage'
import { items } from './static-data'
import Nav from './Nav'
import './App.css'

//To remember how the reduce function works basically

// const letters = ['R', 'e', 'a', 'c', 't'];
// `reduce` takes 2 arguments:
// - a function to do the reducing (you might say, a "reducer")
// - an initial value for accumulatedResult
// const word = letters.reduce(
// function(accumulatedResult, arrayItem) {
// return accumulatedResult + arrayItem;
// },
// ''); // <-- notice this empty string argument: it's the initial value
// console.log(word) // => "React"

const summarizeCart = (cart) => {
  const groupedItems = cart.reduce((summary, item) => {
    summary[item.id] = summary[item.id] || {
      ...item,
      count: 0,
    }
    summary[item.id].count++
    return summary
  }, {})

  return Object.values(groupedItems)
}

const App = () => {
  const [activeTab, setActiveTab] = useState('items')
  const [cart, setCart] = useState([])

  //Updater functional form of SetCart, where we pass it a function and it calls that function with the previous cart value.
  //It implicitly returns the new array, which replaces the old
  //cart and then re-renders.
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item])
  }

  const remoteItem = (item) => {
    let index = cart.findIndex((i) => i.id === item.id)
    if (index >= 0) {
      setCart((cart) => {
        const copy = [...cart]
        copy.splice(index, 1)
        return copy
      })
    }
  }

  return (
    <div className="App">
      <Nav activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="App-content">
        <Content
          tab={activeTab}
          onAddToCart={addToCart}
          onRemoveItem={remoteItem}
          cart={summarizeCart(cart)}
        />
      </main>
    </div>
  )
}

const Content = ({ tab, onAddToCart, onRemoveItem, cart }) => {
  switch (tab) {
    default:
    case 'items':
      return <ItemPage items={items} onAddToCart={onAddToCart} />
    case 'cart':
      return (
        <CartPage
          items={cart}
          onAddOne={onAddToCart}
          onRemoveOne={onRemoveItem}
        />
      )
  }
}

export default App
