
'use client';

import { useState } from 'react';

export default function Services() {
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      title: "Car Washing & Detailing",
      description: "Complete exterior and interior cleaning with premium products and techniques",
      features: ["Exterior wash", "Interior cleaning", "Wax application", "Tire care"],
      image: "https://readdy.ai/api/search-image?query=Professional%20car%20washing%20service%20with%20foam%20and%20high-pressure%20cleaning%20equipment%2C%20clean%20white%20background%2C%20modern%20automotive%20detailing%20bay%2C%20sparkling%20clean%20cars%20being%20washed%20with%20professional%20tools%20and%20foam%20cannons&width=600&height=400&seq=wash-service&orientation=landscape",
      detailedInfo: "Our comprehensive car washing and detailing service includes thorough exterior cleaning with premium soaps and waxes, complete interior vacuuming and sanitization, dashboard and upholstery care, and tire shine application. We use eco-friendly products and advanced techniques to ensure your vehicle looks pristine."
    },
    {
      title: "Auto Repair Services",
      description: "Expert mechanical repairs and diagnostics by certified technicians",
      features: ["Engine diagnostics", "Brake repair", "Transmission service", "Electrical work"],
      image: "https://readdy.ai/api/search-image?query=Professional%20automotive%20repair%20garage%20with%20modern%20diagnostic%20equipment%2C%20clean%20workshop%20environment%20with%20cars%20on%20lifts%2C%20experienced%20mechanics%20working%20with%20advanced%20tools%2C%20bright%20clean%20service%20bay&width=600&height=400&seq=repair-service&orientation=landscape",
      detailedInfo: "Our certified technicians provide complete auto repair services using state-of-the-art diagnostic equipment. We handle everything from engine repairs and brake services to transmission work and electrical system troubleshooting. All repairs come with warranty coverage and we use only genuine or high-quality aftermarket parts."
    },
    {
      title: "Maintenance Services",
      description: "Regular maintenance to keep your vehicle running at peak performance",
      features: ["Oil changes", "Filter replacement", "Tire rotation", "Preventive care"],
      image: "https://readdy.ai/api/search-image?query=Car%20maintenance%20service%20center%20with%20organized%20tools%20and%20equipment%2C%20professional%20technicians%20performing%20routine%20maintenance%2C%20clean%20modern%20automotive%20service%20environment%20with%20proper%20lighting%20and%20equipment&width=600&height=400&seq=maintenance-service&orientation=landscape",
      detailedInfo: "Regular maintenance is key to vehicle longevity. Our maintenance services include scheduled oil changes with premium lubricants, air and fuel filter replacements, tire rotation and balancing, fluid level checks, and comprehensive multi-point inspections to catch potential issues before they become costly repairs."
    },
    {
      title: "Paint Protection & Coating",
      description: "Advanced paint protection services to preserve your vehicle's finish",
      features: ["Ceramic coating", "Paint correction", "Scratch removal", "UV protection"],
      image: "https://readdy.ai/api/search-image?query=Car%20paint%20protection%20service%20with%20ceramic%20coating%20application%2C%20professional%20detailing%20technician%20applying%20protective%20coating%20to%20luxury%20vehicle%2C%20clean%20modern%20detailing%20bay%20with%20specialized%20equipment&width=600&height=400&seq=paint-service&orientation=landscape",
      detailedInfo: "Protect your vehicle's paint with our advanced coating services. We offer ceramic coating applications that provide long-lasting protection against UV rays, scratches, and environmental contaminants. Our paint correction services remove swirl marks and minor scratches, restoring your vehicle's original shine."
    },
    {
      title: "AC Service & Repair",
      description: "Complete air conditioning system service and repair for optimal comfort",
      features: ["AC gas refill", "Compressor repair", "Filter cleaning", "System diagnostics"],
      image: "https://readdy.ai/api/search-image?query=Automotive%20air%20conditioning%20service%20with%20technician%20checking%20AC%20system%2C%20professional%20diagnostic%20equipment%20for%20car%20AC%20repair%2C%20clean%20workshop%20environment%20with%20AC%20service%20tools%20and%20gauges&width=600&height=400&seq=ac-service&orientation=landscape",
      detailedInfo: "Keep cool with our comprehensive AC service. We provide complete air conditioning system diagnostics, refrigerant recharging, compressor repairs, evaporator and condenser cleaning, and cabin air filter replacement. Our technicians ensure your AC system operates efficiently in Sri Lanka's tropical climate."
    },
    {
      title: "Tire Services",
      description: "Complete tire care including installation, balancing, and alignment",
      features: ["Tire installation", "Wheel balancing", "Alignment service", "Puncture repair"],
      image: "https://readdy.ai/api/search-image?query=Professional%20tire%20service%20center%20with%20modern%20tire%20changing%20equipment%2C%20wheel%20balancing%20machines%2C%20and%20alignment%20tools%2C%20clean%20automotive%20service%20bay%20with%20organized%20tire%20storage%20and%20professional%20technicians&width=600&height=400&seq=tire-service&orientation=landscape",
      detailedInfo: "Our tire services ensure optimal vehicle performance and safety. We offer professional tire installation, precise wheel balancing, computerized wheel alignment, puncture repairs, and tire rotation services. We stock premium tire brands suitable for Sri Lankan road conditions and climate."
    }
  ];

  const displayedServices = showAll ? services : services.slice(0, 3);

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Services</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive car care services to keep your vehicle in perfect condition
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {displayedServices.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{service.description}</p>
                {showAll && (
                  <p className="text-gray-700 mb-3 sm:mb-4 text-sm leading-relaxed">{service.detailedInfo}</p>
                )}
                <ul className="space-y-1 sm:space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 text-sm sm:text-base">
                      <i className="ri-check-line text-red-600 mr-2 w-4 h-4 flex items-center justify-center flex-shrink-0"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="bg-red-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-red-700 transition-colors cursor-pointer whitespace-nowrap text-base sm:text-lg font-semibold"
          >
            {showAll ? 'Show Less Services' : 'Show All Services'}
          </button>
        </div>
      </div>
    </section>
  );
}
