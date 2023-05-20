import React, {useState, useEffect} from 'react'
import './App.css';
import Navbar from '../navbar/Navbar';
import {Route, Switch} from 'react-router-dom';
import Home from '../home/Home';
import Products from '../products/Products';
import Register from '../register/Register';
import Login from '../login/Login';
import ProductsDetail from '../productsDetail/ProductsDetail';
import SearchResult from '../searchResult/SearchResult';
import Cookie from 'js-cookie'


function App() {
  
  const [results, setResults] = useState([]);
  const [user, setUser] = useState(null)
  const userLogin = Cookie.get('userLogin')
  
  useEffect(() => {
    
    userLogin && setUser(userLogin)

    },[])
  

  return (
    <div className='home'>
      <Navbar setResults={setResults} user={user} setUser={setUser} />
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
           <Login setUser={setUser} />
        </Route>
        
        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  )
}

export default App
