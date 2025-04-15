import { useEffect, useState } from 'react';
import axios from 'axios';
import "./New_arrival.css"
import '../../../App.css'

function New_arrival() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchHomePageData = async () => {
      try {
        const response = await axios.get('https://flowers.devtech.click/api/v1/home_page');
        setProducts(response.data.data.new_arrival_products || []);
      } catch (error) {
        console.error('Error fetching home page data:', error);
      }
    };

    fetchHomePageData();
  }, []);

  return (
    <>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={`https://flowers.devtech.click/public/product_images/${product.images[0]?.image}`}
              alt={product.name}
              className="product-image"
            />
            <h2>{product.name}</h2>
            <p className="price">${product.price}</p>
            <p className="desc">{product.description.slice(0, 100)}...</p>
            <div className="tags">
              {product.product_tags.map((tag) => (
                <span key={tag.id} className="tag">
                  {tag.tag.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default New_arrival;