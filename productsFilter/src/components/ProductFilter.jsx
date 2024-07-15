import productsStore from "../store";
import { fetchCategory } from "../api";
import { useEffect } from "react";

const ProductFilter = () => {
  // Logic
  const { categories, setcategories } = productsStore();

  useEffect(() => {
    fetchCategory().then(setcategories);
  });

  // UI + Logic 
  return (
    <div className="">
      <h2>Filter Products</h2>
      <div className="mt-5">
        <h5>Categories</h5>
        {categories.map(category => (
          <div className="form-check" >
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label" >
              {category.name}
            </label>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <h5>Price Range</h5>
        <div className="row g-2">
          <div className="col">
            <input type="number" className="form-control" placeholder="Min Price" />
          </div>
          <div className="col">
            <input type="number" className="form-control" placeholder="Max Price" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;