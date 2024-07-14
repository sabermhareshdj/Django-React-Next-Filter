
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

import ProductFilter from './components/ProductFilter';
import ProductList from './components/ProductList';

function App() {


  return (
    <div className='container my-4'>
    <div className='row'>
      <div className='col-lg-3'>
        <ProductFilter />
      </div>

      <div className='col-lg-9'>
        <ProductList />

</div>

      </div>

    </div>

  )
}

export default App
