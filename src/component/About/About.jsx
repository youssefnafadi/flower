import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p className="intro">
        Welcome to <strong>Flowers</strong> – your destination for fresh, elegant, and handpicked flowers that speak from the heart.
      </p>

      <div className="about-section">
        <h2>🌷 Our Story</h2>
        <p>
          It all started with a love for flowers and the joy they bring. We founded Flowers with a mission to deliver happiness,
          one bouquet at a time. Every flower in our shop is carefully selected to ensure freshness and quality.
        </p>
      </div>

      <div className="about-section">
        <h2>💡 Our Mission</h2>
        <p>
          To make flower gifting simple, joyful, and memorable. We believe flowers are more than just gifts – they are emotions,
          stories, and memories.
        </p>
      </div>

      <div className="about-section">
        <h2>🌍 Why Choose Us?</h2>
        <ul>
          <li>Fresh and locally sourced flowers</li>
          <li>Elegant arrangements for every occasion</li>
          <li>Fast and reliable delivery</li>
          <li>Friendly customer support</li>
        </ul>
      </div>
    </div>
  );
}
