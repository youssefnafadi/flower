import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import Footer from '../Footer/Footer';
export default function Home() {
  return (
    <>
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to Flowers</h1>
        <p className="hero-description">
          Discover the beauty of fresh flowers! Whether it’s for a special occasion or just to brighten someone's day,
          our collection offers the best quality and variety. 💐
        </p>
        <Link to="/best_seller_products" className="hero-button">
          Shop Best Sellers
        </Link>
      </div>
    </div>
    </>
  );
}
