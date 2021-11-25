// Product.js

export const Product = (props) => {
    const { productId, name, description, features, stockLevel, images, price, addedToCart} = props.product

    return (
        <article className="product">
            <h3>{name}</h3>
            {images.map(image => <img src={image.imageSrc} />)}
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
                <button>
                Add to cart
                </button>
            </div>            
        </article>
    )
}