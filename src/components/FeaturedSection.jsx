export default function FeaturedSection() {
    const features = [
      {
        title: "Premium Quality",
        description: "Carefully selected products that meet our high standards.",
        iconPath:
          "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
      },
      {
        title: "Fast Delivery",
        description: "Quick and reliable shipping to your doorstep.",
        iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      },
      {
        title: "24/7 Support",
        description: "Always here to help with your questions.",
        iconPath:
          "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      },
      {
        title: "Secure Payment",
        description: "Your payment information is protected with us.",
        iconPath:
          "M12 12c-2.21 0-4-1.79-4-4 0-.21 0-.41.02-.61l3.1-.51L12 4.92l.88 1.98 3.1.51c.02.2.02.4.02.61 0 2.21-1.79 4-4 4z",
      },
      {
        title: "Money-Back Guarantee",
        description: "Satisfaction guaranteed or your money back.",
        iconPath:
          "M12 3v2M15.1 5.1l1.4 1.4M18 12h2M15.1 18.9l-1.4 1.4M12 19v2M8.9 18.9l-1.4-1.4M6 12H4M8.9 5.1L7.5 3.7",
      },
      {
        title: "Eco-Friendly Packaging",
        description: "Sustainable and recyclable packaging materials for a greener planet.",
        iconPath:
          "M12 2a10 10 0 1010 10A10 10 0 0012 2zm3 14H9v-4h6v4zm-3-7a2 2 0 110-4 2 2 0 010 4z",
      },
    ];
  
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose ShopMart
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 shadow-lg rounded-lg bg-white transition-transform transform hover:scale-105">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={feature.iconPath}
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
























