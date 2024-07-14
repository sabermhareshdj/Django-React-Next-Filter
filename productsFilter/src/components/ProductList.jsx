const ProductList = () => {
  // logic

  // ui + logic 
  return (
    <div className="">
      <h3>Product List</h3>
      <div className="row mt-5">
        <div className="col-lg-4">
          <div className="card">
            <img
              src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_hero_09142021_inline.jpg.large.jpg"
              className="card-img-top"
              alt="Product"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                1200$
              </p>
              <a href="#" className="btn btn-primary">add to cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
