import { useEffect, useState } from 'react';
import axios from 'axios';
import "./Product.css";
import '../../App.css';

function Product() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true); // للتحكم بظهور زر Load More

  const fetchProducts = async (pageNumber) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://flowers.devtech.click/api/v1/products?paginate=12&page=${pageNumber}`
      );
      const newProducts = response.data.data.data || [];

      setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      if (newProducts.length < 12) {
        setHasMore(false); // مفيش صفحات تانية
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

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

      {hasMore && (
        <div style={{ textAlign: "center", margin: "20px" }}>
          <button onClick={handleLoadMore} disabled={isLoading} className="load-more-btn">
            {isLoading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </>
  );
}

export default Product;
