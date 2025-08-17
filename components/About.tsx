
'use client';

export default function About() {
  const features = [
    {
      icon: "ri-award-line",
      title: "Expert Technicians",
      description: "Certified professionals with years of experience"
    },
    {
      icon: "ri-tools-line",
      title: "Modern Equipment",
      description: "State-of-the-art tools and diagnostic systems"
    },
    {
      icon: "ri-time-line",
      title: "Quick Service",
      description: "Efficient service without compromising quality"
    },
    {
      icon: "ri-shield-check-line",
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all services"
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Choose CarCare?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Located in the heart of Colombo, Sri Lanka, CarCare has been providing exceptional 
              automotive services for over a decade. We combine traditional craftsmanship with 
              modern technology to deliver outstanding results for every vehicle.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-red-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <i className={`${feature.icon} text-red-600 text-lg sm:text-xl w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center`}></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative mt-8 lg:mt-0">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20automotive%20service%20center%20in%20Colombo%20Sri%20Lanka%2C%20modern%20clean%20garage%20facility%20with%20experienced%20technicians%20working%20on%20luxury%20cars%2C%20well-organized%20workshop%20with%20professional%20equipment%20and%20tools%2C%20bright%20lighting%20and%20clean%20environment&width=600&height=600&seq=about-image&orientation=squarish"
              alt="CarCare Service Center"
              className="rounded-lg shadow-lg object-cover object-top w-full h-80 sm:h-96"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
