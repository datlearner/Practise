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

Product.propsType = {
    name: PropTypes.string,
    price: PropTypes.number,
    instock: PropTypes.bool
}

export default Product