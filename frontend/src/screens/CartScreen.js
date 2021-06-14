import React from 'react'

const CartScreen = ({ match, location, history}) => {

    const productId = match.params.id

    return (
        <div>
            Cart
        </div>
    )
}

export default CartScreen
