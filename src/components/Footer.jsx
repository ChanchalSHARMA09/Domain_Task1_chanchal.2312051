import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white shadow-lg mt-8">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <p className="text-gray-600">
              We provide high-quality products with exceptional customer service.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Email: info@example.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Store St, City, State</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <FaGithub className="text-2xl" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Your Store Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}