import './App.css';
import Title from './components/Title'
import ProductList from './components/ProductList'
import CartList from './components/CartList'

function App() {
  return (
    <div className="container">
      {/* TITLE : START */}
      <Title />
      {/* TITLE : END */}
      <div className="row">
        {/* LIST PRODUCT : START */}
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
          <ProductList />
        </div>
        {/* LIST PRODUCT : END */}
        {/* CART : START */}
        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
          <CartList />
        </div>
        {/* CART : END */}
      </div>
    </div>
  );
}

export default App;
