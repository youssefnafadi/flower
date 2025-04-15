import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import BestSellerProducts from './component/Home/Best_seller/Best_seller'
import Featured from './component/Home/Featured/Featured'
import New_arrivel from './component/Home/New_arrival/New_arrival'
import Product from './component/Product/Product' 
import Home from './component/Home/Home'
import About from './component/Home/About/About'

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <nav className='navbar'>
          <div className='nav-logo'>My App</div>
          <div className="nav-link">
            <Link to="/">Home</Link>
            <Link to="/BestSellerProducts">BestSellerProducts</Link>
            <Link to="/Product">Product</Link>
            <Link to="/Featured">Featured</Link>
            <Link to="/New_arrival">New Arrival</Link>
            <Link to="/About">About</Link>
          </div>
        </nav>
      </div>

      {/* Routes */}
      <div className="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/BestSellerProducts' element={<BestSellerProducts />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/Featured' element={<Featured />} />
          <Route path='/New_arrival' element={<New_arrivel />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}
export default App;