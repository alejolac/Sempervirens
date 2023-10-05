const infoProduct = ({ product }) => {
    return (
        <div className="col-3 container-info-product">
            <div className="product-name">
                <h2>{product.name}</h2>
                <p className="lead product-category">{product.category}</p>
            </div>
            <div className="product-price">
                <p>{product.price}</p>
            </div>
            <div className="product-description">
                <p>
                    {product.description}
                </p>
            </div>
            <div className="product-btn">
                <a href={product.url}><button className="btn btn-success btnProduct">Ir a comprar
                    <svg className="svg-product" style={{ marginLeft: "10px" }} width="24px" height="24px" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M21 3h-6m6 0l-9 9m9-9v6" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h6" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                </button></a>
            </div>
        </div>
    )
}

export default infoProduct