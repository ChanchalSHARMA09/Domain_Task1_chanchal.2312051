import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'; 

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-lg mt-12">
      <div className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Us Section */}
          <div>
            <h3 className="font-bold text-xl mb-4">About Us</h3>
            <p className="text-gray-200">
              We offer high-quality products with a commitment to exceptional customer service, ensuring your satisfaction.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-200">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-200">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-200">FAQs</a></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="font-bold text-xl mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: <a href="mailto:ShopMart@gmail.com" className="hover:text-white transition duration-200">ShopMart@gmail.com</a></li>
              <li>Phone: <a href="tel:+5551234567" className="hover:text-white transition duration-200">(555) 123-4567</a></li>
              <li>Address: 123A ShopMart Store, Varanasi, Uttar Pradesh</li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="font-bold text-xl mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-white transition duration-200">
                <FaTwitter className="text-3xl" />
              </a>
              <a href="#" aria-label="Github" className="text-gray-300 hover:text-white transition duration-200">
                <FaGithub className="text-3xl" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-white transition duration-200">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-blue-300 mt-8 pt-8 text-center text-gray-200">
          <p>© {new Date().getFullYear()} ShopMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
