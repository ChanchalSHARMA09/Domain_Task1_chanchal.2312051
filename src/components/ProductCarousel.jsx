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
    image: "https://images.unsplash.com/photo-1690136813536-5cccb844b270?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Comfort meets style in every step"
  },
  {
    id: 5,
    name: "Smartphone Pro Max",
    price: 999.99,
    image: "https://bsmedia.business-standard.com/_media/bs/img/article/2023-10/02/full/1696225756-5527.jpg",
    description: "Experience cutting-edge technology in your pocket"
  },
  {
    id: 6,
    name: "4K Ultra HD TV",
    price: 799.99,
    image:"https://plus.unsplash.com/premium_photo-1682274001252-cd39d7158ae3?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Enjoy your favorite shows in stunning clarity"
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: 49.99,
    image: "https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/750x750/Rechargeable-Powerful-Bluetooth-Speaker-with-FM-1.jpg",
    description: "Portable sound for every adventure"
  },
  {
    id: 8,
    name: "Gaming Laptop",
    price: 1499.99,
    image: "https://images.unsplash.com/photo-1640695257754-7e2932f9ad0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "High-performance gaming on the go"
  },
  {
    id: 9,
    name: "Smart Home Assistant",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1519558260268-cde7e03a0152?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Control your smart home with your voice"
  },
{
    id: 10,
    name: "Fitness Tracker",
    price: 59.99,
    image: "https://plus.unsplash.com/premium_photo-1681433383783-661b519b154a?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Stay active and monitor your health"
  },
  {
    id: 11,
    name: "Wireless Charging Pad",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1636297461709-0812290a9dcc?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Convenient charging for your devices"
  },
  {
    id: 12,
    name: "VR Headset",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1728571195314-5979a49acd12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Immerse yourself in virtual reality"
  },
  {
    id: 13,
    name: "Electric Toothbrush",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1695073623266-7cec9986c652?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Advanced cleaning for a brighter smile"
  },
  {
    id: 14,
    name: "Portable Projector",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1638154320403-1bc308a01398?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Enjoy movies anywhere you go"
  },
  {
    id: 15,
    name: "Noise-Cancelling Earbuds",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Listen without distractions"
  }
];

// export default function ProductCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
//     }, 3000);

//     return () => clearInterval(timer);
//   }, []);

//   const visibleProducts = [
//     products[(currentIndex - 1 + products.length) % products.length],
//     products[currentIndex],
//     products[(currentIndex + 1) % products.length],
//   ];

//   return (
//     <div className="relative overflow-hidden py-8">
//       <div className="flex justify-center items-center gap-8">
//         {visibleProducts.map((product, index) => (
//           <div key={product.id} className={`transform transition-all duration-500 ${index === 1 ? 'scale-110 z-10' : 'scale-90 opacity-70'}`}>
//             <ProductCard product={product} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }










export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  // Calculate the indices of the visible products
  const visibleProducts = Array.from({ length: 5 }, (_, index) => 
    products[(currentIndex + index) % products.length]
  );

  return (
    <div className="relative overflow-hidden py-8">
      <div className="flex justify-center items-center gap-8">
        {visibleProducts.map((product, index) => (
          <div key={product.id} className={`transform transition-all duration-500 ${index === 2 ? 'scale-110 z-10' : 'scale-90 opacity-70'}`}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
