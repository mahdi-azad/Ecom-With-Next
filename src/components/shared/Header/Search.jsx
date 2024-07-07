import { useState } from "react";

let searchedProducts = '';


const Search = () => {
    const [query, setQuery] = useState('')
    return (
        <div className="search_wrapper">
            <input
                // onKeyDown={(e) => handleKey(e)}
                // value={query}
                // onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for..."
            >
            </input>
            <i
                // onClick={() => handlePush()}
                className="fas fa-search"
            ></i>

            <div className={`search_overlay ${searchedProducts.length == 0 && "d-none"}`}>
                <div className="search_products">
                    
                        {/* {

                            searchedProducts?.map((product, index) => {
                                return (
                                    <Link key={index} href={`/product/${product.slug}`}>
                                        <a>
                                            <div className="items">
                                                <img src={product.thumbnail}></img>
                                                <h5>{product.name}</h5>
                                                <div className="product-price">
                                                    {
                                                        product?.discount?.value > 0 ?
                                                            <>
                                                                <span className="old-price">${product.price}</span>
                                                                {
                                                                    product.discount.discountType === 'flat' ?
                                                                        <span className="new-price">${product.price - product.discount.value}</span> :
                                                                        <span className="new-price">${product.price - Math.floor((product.price * (product.discount.value / 100)))}</span>
                                                                }

                                                            </> :
                                                            <span className="new-price">${product.price}</span>
                                                    }


                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                )
                            })
                        } */}
                </div>
            </div>
        </div>
    )
}

export default Search