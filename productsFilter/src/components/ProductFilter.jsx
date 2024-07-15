

const ProductFilter = () => {
  //logic



  // ui + logic 
  return(
    <div className="">
      <h2> Filter Products</h2>
      <div className="mt-5">
        <h5> Categories </h5>
        <div className="form-check">
          <input type="checkbox" className="form-check-input"/>
          <label className="form-check-label">
            Apple 
          </label>
        </div>

        <div className="form-check">
          <input type="checkbox" className="form-check-input"/>
          <label className="form-check-label">
            Samsung 
          </label>
        </div>

        <div className="mt-5">
          <h5> Price Range </h5>
          <div className="row  g-2">
            <div className="col">
              <input type="number" className="form-control" placeholder="Min Price" />
            </div>
            <div className="col">
              <input type="number" className="form-control" placeholder="Max Price" />
          </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductFilter