
'use client';

export default function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Modern%20professional%20car%20detailing%20service%20center%20with%20pristine%20white%20background%2C%20luxury%20cars%20being%20serviced%2C%20clean%20minimal%20environment%20with%20professional%20equipment%2C%20bright%20lighting%2C%20sleek%20modern%20interior%20design%2C%20automotive%20service%20bay%20with%20polished%20floors%20and%20professional%20tools&width=1920&height=1080&seq=hero-bg&orientation=landscape')`
      }}
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 text-center text-white pt-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
          Premium Car Care <br />
          <span className="text-red-500">Services</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
          Professional auto detailing, repair, and maintenance services in Colombo, Sri Lanka. 
          Your car deserves the best care.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-lg sm:max-w-none mx-auto">
          <button 
            onClick={scrollToServices}
            className="bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-red-700 transition-colors cursor-pointer whitespace-nowrap w-full sm:w-auto"
          >
            View Services
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors cursor-pointer whitespace-nowrap w-full sm:w-auto"
          >
            Get Quote
          </button>
        </div>
      </div>
    </section>
  );
}
