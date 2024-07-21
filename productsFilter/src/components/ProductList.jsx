import { useEffect } from "react";
import { fetchProducts } from "../api";
import productsStore from "../store";

const ProductList = () => {
  // logic

  const {products, setproducts,filters} = productsStore();

  useEffect(() => {
    fetchProducts(filters).then(setproducts)
  },[filters,setproducts]) //call useEffect when filters or products change

  // ui + logic 
  return (
    <div className="">
      <h2>Product List</h2>
      <div className="row mt-5">
        { products.map(product => (
                  <div key={product.id} className="col-lg-4">
                    <div className="card">
                      <img
                        src={product.image}
                        className="card-img-top"
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

      </div>
    </div>
  );
}

export default ProductList;
