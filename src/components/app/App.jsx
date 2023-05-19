import React, {useState} from 'react'
import './App.css';
import Navbar from '../navbar/Navbar';
import {Route, Switch} from 'react-router-dom';
import Home from '../home/Home';
import Products from '../products/Products';
import Register from '../register/Register';
import Login from '../login/Login';
import ProductsDetail from '../productsDetail/ProductsDetail';
import SearchResult from '../searchResult/SearchResult';


function App() {
  
  const [results, setResults] = useState([]);

  return (
    <div className='home'>
      <Navbar setResults={setResults} />
      <SearchResult results={results} />
      
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/products">
            <Products />
        </Route>
        <Route exact path="/products/detail/:id">
            <ProductsDetail />
        </Route>
        <Route exact path="/users/register">
            <Register />
        </Route>
        <Route exact path="/users/login">
            <Login />
        </Route>
        
        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  )
}

export default App
