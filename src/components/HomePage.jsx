import HeroSection from './HeroSection';
import FeaturedSection from './FeaturedSection';
import ProductCarousel from './ProductCarousel';

export default function HomePage() {
  return (
    <div className="space-y-12">
      <HeroSection />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <ProductCarousel />
      </div>
      <FeaturedSection />
    </div>
  );
}