import { useEffect, useState } from "react";
import { fetchProducts } from "../api";
import productsStore from "../store";

const ProductList = () => {
  // logic

  const {products, setproducts,filters} = productsStore();
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      const response = await fetchProducts(filters,page)
      setproducts(response.results)
      setNextPage(response.next)
      setPrevPage(response.previous)
    }

    loadProducts()
  },[filters,setproducts,page]) 

  const handleNextPage = () => {
    if (nextPage) setPage(page+1)

  }

  const handlePrevPage = () => {
    if (prevPage) setPage(page-1)
    
  }






  // ui + logic 
  return (
    <div className="">
      <h2>Product List</h2>
      <div className="row mt-5">
        { products.map(product => (
                  <div key={product.id} className="col-lg-4 my-2">
                    <div className="card">
                      <img
                        src={product.image}
                        className="card-img-top product-img"
                        alt="Product"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">
                          {product.price}$
                        </p>
                        <a href="#" className="btn btn-primary">add to cart</a>
                      </div>
                    </div>
                </div>
        ))}

      {/* pageination */}

      <div className="mt-5">
        <button
        className="btn btn-primary"
        onClick={handlePrevPage}
        disabled={!prevPage}
        > Previous </button>
        <button
        className="btn btn-primary"
        onClick={handleNextPage}
        disabled={!nextPage}
        > Next </button>
        
      </div>


      </div>
    </div>
  );
}

export default ProductList;
