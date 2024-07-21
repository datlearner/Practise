/**
 * Exercise 3: Product Component
Objective: Create a Product component that displays product information based on props.

Instructions:

Create a Product component in a new file.
The component should accept name, price, and inStock props.
Display the product name and price.
If inStock is true, display "In Stock".
If inStock is false, display "Out of Stock".
Use this component in your App component with different products.

 */

import PropTypes from 'prop-types'

function Product (props) {
    return (
        <div>
            <p>Name: {props.name} </p>
            <p>Price: {props.price} </p>
            <p>inStock: {props.instock}</p>
        </div>
    );
}

Product.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    instock: PropTypes.bool
}

export default Product