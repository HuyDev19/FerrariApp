import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 dark:from-gray-900 to-white dark:to-ferrari-dark overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 py-16 grid md:grid-cols-2 items-center gap-8">
        {/* Left Content */}
        <div className="space-y-6 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-ferrari-red/10 rounded-full">
            <span className="text-ferrari-red font-semibold">🏁 Premium Collection</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Experience the <span className="text-ferrari-red">Pinnacle</span> of Luxury
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Discover the world's most iconic supercars. From the hybrid innovation of the SF90 Stradale to the timeless elegance of the F8 Tributo, each Ferrari tells a story of passion, performance, and prestige.
          </p>
          <div className="flex gap-4 pt-4">
            <Link
              to="/cars"
              className="btn btn-primary hover:shadow-xl hover:shadow-ferrari-red/50 transform hover:scale-105"
            >
              Explore Cars
            </Link>
            <button className="btn btn-outline">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-96 md:h-full animate-slide-up">
          <div className="absolute inset-0 bg-gradient-to-r from-ferrari-red/20 to-transparent rounded-3xl blur-3xl"></div>
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80"
            alt="Ferrari Hero"
            className="w-full h-full object-cover rounded-3xl shadow-2xl relative z-10"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-ferrari-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
