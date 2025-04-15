import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>🌸 Flowers Shop</h3>
        <p>We deliver beauty to your doorstep. Fresh flowers, always blooming.</p>
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/products">Products</a>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Flowers Shop. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
