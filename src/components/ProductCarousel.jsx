import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    description: "Immersive sound quality with noise cancellation"
  },
  {
    id: 2,
    name: "Smart Watch Elite",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    description: "Track your fitness and stay connected"
  },
  {
    id: 3,
    name: "Pro Camera Lens",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500",
    description: "Capture moments in stunning detail"
  },
  {
    id: 4,
    name: "Designer Sneakers",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    description: "Comfort meets style in every step"
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
    <div className="relative overflow-hidden py-8">
      <div className="flex justify-center items-center gap-8">
        {visibleProducts.map((product, index) => (
          <div key={product.id} className={`transform transition-all duration-500 ${
            index === 1 ? 'scale-110 z-10' : 'scale-90 opacity-70'
          }`}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}