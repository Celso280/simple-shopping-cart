import React from 'react'

function Header(props) {
    const {countCartItems} = props
  return (
    <div className='row center block'>
        <a href='#/'>
            <h2>Simple shopping cart</h2>
        </a>
        <div>
            <a href='#/cart'>CART
            {countCartItems ? (<button className='badge'>{countCartItems}</button>) : ('')}
            </a> {' '} <a href='#/signin'>Sign in</a>
        </div>
    </div>
    
  )
}

export default Header