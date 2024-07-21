import productsStore from "../store";
import { fetchCategory } from "../api";
import { useEffect } from "react";

const ProductFilter = () => {
  // Logic
  const { categories, setcategories , filters, setfilters} = productsStore();

  useEffect(() => {
    fetchCategory().then(setcategories);
  },[]);

  const handleCategoryChange = (e) => {
    const {value, checked} = e.target
    //console.log(value, checked)

    const newCategories = checked
    ? [...filters.categories, parseInt(value)]
    : filters.categories.filters(id => id != parseInt(value))
    setfilters({categories: newCategories})


  }

  const handlePriceChange = (e) => {
    
  }

  // UI + Logic 
  return (
    <div className="">
      <h2>Filter Products</h2>
      <div className="mt-5">
        <h5>Categories</h5>
        {categories.map(category => (
          <div className="form-check" >
            <input 
            type="checkbox" 
            className="form-check-input" 
            value={category.id}
            onChange={handleCategoryChange}
            />
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
            <input
            type="number" 
            className="form-control" 
            placeholder="Min Price" 
            value={filters.price_range[0]}
            onChange={handlePriceChange}
            />
          </div>
          <div className="col">
            <input 
            type="number" 
            className="form-control" 
            placeholder="Max Price"
            value={filters.price_range[1]}
            onChange={handlePriceChange} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;