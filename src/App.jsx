import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import BestSellerProducts from './component/Home/Best_seller/Best_seller'
import Featured from './component/Home/Featured/Featured'
import New_arrivel from './component/Home/New_arrival/New_arrival'
import Product from './component/Product/Product' 
import Home from './component/Home/Home'
import About from './component/About/About'
import Contact from './component/Contact/Contact'
import './App.css'

function App() {
  return (
    <>
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <nav className='navbar'>
          <div className='nav-logo'>Flowers</div>
          <div className="nav-link">
            <Link to="/">Home</Link>
            <Link to="/best_seller_products">Best Seller</Link>
            <Link to="/products">All Products</Link>
            <Link to="/featured_products">Featured</Link>
            <Link to="/new_arrival_products">New Arrival</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
      </div>
      {/* Routes */}
      <div className="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/best_seller_products' element={<BestSellerProducts />} />
          <Route path='/products' element={<Product />} />
          <Route path='/featured_products' element={<Featured />} />
          <Route path='/new_arrival_products' element={<New_arrivel />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
    </>
    
  )
}
export default App;