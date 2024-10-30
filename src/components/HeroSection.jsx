import { FaArrowRight } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Discover Exceptional Products
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Explore our curated collection of premium products designed to elevate your lifestyle.
            Find the perfect items that match your unique style.
          </p>
          <div className="flex space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 flex items-center">
              Shop Now <FaArrowRight className="ml-2" />
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}