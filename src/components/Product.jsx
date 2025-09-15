function Product({ product }) {
    return (
        <div className='product'>
            <img
                src={product.image}
                alt={product.name}
            />
            <p>
                <span className='pr-name'>{product.name}</span>
                <span className='pr-price'>${product.price}</span>
            </p>
        </div>
    );
}

export default Product;
