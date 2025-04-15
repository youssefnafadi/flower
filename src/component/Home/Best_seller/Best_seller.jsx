import { useEffect, useState } from 'react';
import axios from 'axios';
import "./Best_seller.css"

function BestSellerProducts() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchHomePageData = async () => {
      try {
        const response = await axios.get('https://flowers.devtech.click/api/v1/home_page');
        setProducts(response.data.data.best_seller_products || []);
      } catch (error) {
        console.error('Error fetching home page data:', error);
      }
    };

    fetchHomePageData();
  }, []);

  return (
    <>
      <h2>Best Seller Products</h2>
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

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default BestSellerProducts;