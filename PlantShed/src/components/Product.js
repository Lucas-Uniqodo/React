// Product.js

import { Image } from './Image.js'

export const Product = (props) => {
    const { productId, name, description, features, stockLevel, images, price, addedToCart, quantity} = props.product

    return (
        <article className="product">
            <h3>{name}</h3>
            {images.map(image => <Image image={image} stockLevel={stockLevel}/>)}
            <p>
                {description}
            </p>
            <ul>
                {features.map(feature => <li>{feature}</li>)}
            </ul>
            <p>&pound;{ price }</p>
            <div className="promo-blocks__actions">
                <a className="button--anchor">
                Full Details
                </a>        
                <button onClick={() => { props.addToCart(props.product) }}>
                    Add to cart
                </button> {quantity}
            </div>            
        </article>
    )
}