
'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Get In Touch</h2>
          <p className="text-lg sm:text-xl text-gray-300">
            Ready to give your car the care it deserves? Contact us today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Information</h3>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-red-600 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <i className="ri-map-pin-line text-white w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">Address</h4>
                  <p className="text-gray-300 text-sm sm:text-base">123 Galle Road, Colombo 03, Sri Lanka</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-red-600 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <i className="ri-phone-line text-white w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">Phone</h4>
                  <p className="text-gray-300 text-sm sm:text-base">+94 11 234 5678</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-red-600 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <i className="ri-mail-line text-white w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">Email</h4>
                  <p className="text-gray-300 text-sm sm:text-base">info@carcare.lk</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-red-600 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <i className="ri-time-line text-white w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">Working Hours</h4>
                  <p className="text-gray-300 text-sm sm:text-base">Mon - Sat: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-300 text-sm sm:text-base">Sunday: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8">
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Find Us</h4>
              <div className="bg-gray-800 rounded-lg overflow-hidden h-48 sm:h-64">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.794423530467!2d79.8408644!3d6.9267607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a2c1e6cb7c3%3A0x3ae25a2c1e6cb7c3!2sGalle%20Road%2C%20Colombo!5e0!3m2!1sen!2slk!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:mt-0">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Book Your Service</h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-white text-sm sm:text-base"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-white text-sm sm:text-base"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-white text-sm sm:text-base"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">Service Required</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-white pr-8 text-sm sm:text-base"
                >
                  <option value="">Select a service</option>
                  <option value="washing">Car Washing & Detailing</option>
                  <option value="repair">Auto Repair Services</option>
                  <option value="maintenance">Maintenance Services</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Additional Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  maxLength={500}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-white resize-none text-sm sm:text-base"
                  placeholder="Tell us more about your requirements..."
                ></textarea>
                <p className="text-sm text-gray-400 mt-1">{formData.message.length}/500 characters</p>
              </div>
              
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 sm:py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors cursor-pointer whitespace-nowrap text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
