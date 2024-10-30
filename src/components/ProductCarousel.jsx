import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
  },
  {
    id: 3,
    name: "Camera Lens",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500"
  },
  {
    id: 4,
    name: "Sneakers",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
  }
];

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const visibleProducts = [
    products[(currentIndex - 1 + products.length) % products.length],
    products[currentIndex],
    products[(currentIndex + 1) % products.length],
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="flex justify-center items-center">
        {visibleProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
} 