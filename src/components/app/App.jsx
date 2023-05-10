import './App.css';
import Navbar from '../navbar/Navbar';
import {Route, Switch} from 'react-router-dom';
import Home from '../home/Home';
import Products from '../products/Products';
import ProductsCreateForm from '../productsCreateForm/ProductsCreateForm';
import Register from '../register/Register';


function App() {
  
  return (
    <div className='home'>
      <Navbar />
      
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/products">
            <Products />
        </Route>
        <Route exact path="/products/create">
            <ProductsCreateForm />
        </Route>
        <Route exact path="/users/register">
            <Register />
        </Route>
        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  )
}

export default App
