
'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2">
            <img 
              src="https://static.readdy.ai/image/7287dcd8714649f87b3169e43a183267/3e7638720126f1e9493cb2444ff44992.png" 
              alt="CarCare Logo" 
              className="h-10 sm:h-12 w-auto mb-3 sm:mb-4"
            />
            <p className="text-gray-400 mb-4 sm:mb-6 max-w-md text-sm sm:text-base leading-relaxed">
              Your trusted partner for premium car care services in Colombo, Sri Lanka. 
              We provide professional auto detailing, repair, and maintenance services.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="bg-gray-800 p-2 sm:p-3 rounded-lg hover:bg-red-600 transition-colors cursor-pointer">
                <i className="ri-facebook-fill w-4 sm:w-5 h-4 sm:h-5 flex items-center justify-center"></i>
              </a>
              <a href="#" className="bg-gray-800 p-2 sm:p-3 rounded-lg hover:bg-red-600 transition-colors cursor-pointer">
                <i className="ri-instagram-line w-4 sm:w-5 h-4 sm:h-5 flex items-center justify-center"></i>
              </a>
              <a href="#" className="bg-gray-800 p-2 sm:p-3 rounded-lg hover:bg-red-600 transition-colors cursor-pointer">
                <i className="ri-twitter-line w-4 sm:w-5 h-4 sm:h-5 flex items-center justify-center"></i>
              </a>
              <a href="#" className="bg-gray-800 p-2 sm:p-3 rounded-lg hover:bg-red-600 transition-colors cursor-pointer">
                <i className="ri-youtube-line w-4 sm:w-5 h-4 sm:h-5 flex items-center justify-center"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Services</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
              <li><a href="#services" className="hover:text-white transition-colors cursor-pointer">Car Washing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors cursor-pointer">Auto Detailing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors cursor-pointer">Engine Repair</a></li>
              <li><a href="#services" className="hover:text-white transition-colors cursor-pointer">Brake Service</a></li>
              <li><a href="#services" className="hover:text-white transition-colors cursor-pointer">Oil Changes</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
              <li><a href="#home" className="hover:text-white transition-colors cursor-pointer">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors cursor-pointer">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors cursor-pointer">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors cursor-pointer">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © 2024 CarCare Auto Detailing & Repair. All rights reserved. | Colombo, Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
}
