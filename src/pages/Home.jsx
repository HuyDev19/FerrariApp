import Hero from '../components/Hero'
import CarCard from '../components/CarCard'
import PageTransition from '../components/PageTransition'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { ferrariCars } from '../data/ferrariCars'

function Home() {
  const { ref: featuredRef, isVisible: featuredVisible } = useScrollAnimation()
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation()
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation()

  return (
    <PageTransition>
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Featured Cars Section */}
      <section ref={featuredRef} className={`section bg-gray-50 dark:bg-gray-800 transition-all duration-1000 ${featuredVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-ferrari-red">Collection</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our handpicked selection of the world's finest supercars
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ferrariCars.map((car, index) => (
              <div key={car.id} style={{ animationDelay: `${index * 0.1}s` }} className="animate-slide-up">
                <CarCard car={car} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className={`section bg-white dark:bg-ferrari-dark transition-all duration-1000 ${featuresVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Why Choose <span className="text-ferrari-red">Ferrari</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Unmatched Performance',
                description: 'Experience raw power with advanced engineering'
              },
              {
                icon: '🎨',
                title: 'Iconic Design',
                description: 'Timeless aesthetics that turn heads everywhere'
              },
              {
                icon: '💎',
                title: 'Premium Quality',
                description: 'Handcrafted excellence in every detail'
              },
              {
                icon: '🏆',
                title: 'Heritage & Legacy',
                description: 'Over 75 years of motorsport excellence'
              }
            ].map((feature, index) => (
              <div key={index} style={{ animationDelay: `${index * 0.1}s` }} className="animate-slide-up card p-8 text-center hover:border-ferrari-red border border-transparent transition-all duration-300 hover:shadow-lg">
                <p className="text-5xl mb-4">{feature.icon}</p>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className={`section bg-gradient-to-r from-ferrari-red/20 to-red-500/20 dark:from-ferrari-red/10 dark:to-red-500/10 transition-all duration-1000 ${ctaVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Explore?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Dive into our complete collection and discover your dream Ferrari
          </p>
          <a href="/cars" className="btn btn-primary inline-block hover:shadow-xl hover:shadow-ferrari-red/50 transform hover:scale-105 transition-all duration-300">
            Browse All Cars
          </a>
        </div>
      </section>
    </div>
    </PageTransition>
  )
}

export default Home
