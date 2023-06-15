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
import Footer from '../footer/footer';
import Cookie from 'js-cookie'



function App() {
  
  const [results, setResults] = useState([]);
  const [user, setUser] = useState(null)
  const [newRegister, setNewRegister] = useState();
  const [productsCart, setProductsCart] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const userLogin = Cookie.get('userLogin')
  
  useEffect(() => {
    
    userLogin && setUser(userLogin)

    },[])
  

  return (
    <>
      <Navbar 
      setResults={setResults} 
      user={user} 
      setUser={setUser} 
      productsCart={productsCart} 
      setProductsCart={setProductsCart} 
      totalProducts={totalProducts}
      setTotalProducts={setTotalProducts}
      countProducts={countProducts}
      setCountProducts={setCountProducts} />

    <div className='home'>
      {
        results.length > 0 ? 
        <SearchResult results={results} />
        :
        ''
      }
      
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/products">
            <Products 
            setProductsCart={setProductsCart} 
            productsCart={productsCart} 
            totalProducts={totalProducts}
            setTotalProducts={setTotalProducts}
            countProducts={countProducts}
            setCountProducts={setCountProducts} />
        </Route>
        <Route exact path="/products/detail/:id">
            <ProductsDetail />
        </Route>
        <Route exact path="/users/register">
            <Register setNewRegister={setNewRegister} />
        </Route>
        <Route exact path="/users/login">
           <Login setUser={setUser} newRegister={newRegister} />
        </Route>
        
        {/* <Route component={NotFound} /> */}
      </Switch>
      <Footer />
    </div>
      </>
  )
}

export default App
