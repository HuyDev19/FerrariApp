import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import PageTransition from '../components/PageTransition'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { ferrariCars } from '../data/ferrariCars'

function CarDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const car = ferrariCars.find(c => c.id === parseInt(id))
  const [isFavorite, setIsFavorite] = useState(false)
  const { ref: specsRef, isVisible: specsVisible } = useScrollAnimation()
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation()
  const { ref: relatedRef, isVisible: relatedVisible } = useScrollAnimation()

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    setIsFavorite(favorites.includes(parseInt(id)))
  }, [id])

  if (!car) {
    return (
      <PageTransition>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Car Not Found</h1>
          <button onClick={() => navigate('/cars')} className="btn btn-primary">
            Back to Cars
          </button>
        </div>
      </div>
      </PageTransition>
    )
  }

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    if (isFavorite) {
      const updated = favorites.filter(fav => fav !== parseInt(id))
      localStorage.setItem('favorites', JSON.stringify(updated))
    } else {
      favorites.push(parseInt(id))
      localStorage.setItem('favorites', JSON.stringify(favorites))
    }
    setIsFavorite(!isFavorite)
  }

  return (
    <PageTransition>
    <div>
      {/* Breadcrumb */}
      <section className="section py-4 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="flex items-center gap-2 text-sm">
            <button onClick={() => navigate('/')} className="hover:text-ferrari-red transition-colors">Home</button>
            <span className="text-gray-400">/</span>
            <button onClick={() => navigate('/cars')} className="hover:text-ferrari-red transition-colors">Cars</button>
            <span className="text-gray-400">/</span>
            <span className="text-ferrari-red font-semibold">{car.name}</span>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="relative h-96 md:h-screen max-h-[600px] overflow-hidden bg-gray-900">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{car.name}</h1>
            <p className="text-xl text-gray-200">{car.model} • {car.year}</p>
          </div>
        </div>

        {/* Favorite Button */}
        <button
          onClick={toggleFavorite}
          className="absolute top-6 right-6 p-4 rounded-full bg-white/80 hover:bg-ferrari-red hover:text-white transition-all duration-300 backdrop-blur-sm z-10 text-2xl"
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container grid md:grid-cols-3 gap-12">
          {/* Left Column - Main Info */}
          <div className="md:col-span-2 space-y-8">
            {/* Description */}
            <div>
              <h2 className="text-3xl font-bold mb-4">About</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {car.description}
              </p>
            </div>

            {/* Key Specifications */}
            <div ref={specsRef} className={`transition-all duration-1000 ${specsVisible ? 'opacity-100' : 'opacity-0'}`}>
              <h2 className="text-3xl font-bold mb-6">Key Specifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { label: 'Top Speed', value: `${car.speed} km/h` },
                  { label: 'Horsepower', value: `${car.horsepower} HP` },
                  { label: 'Acceleration', value: car.acceleration },
                  { label: 'Engine', value: car.engine },
                  { label: 'Year', value: car.year },
                  { label: 'Type', value: car.model },
                ].map((spec, index) => (
                  <div key={index} style={{ animationDelay: `${index * 0.05}s` }} className="animate-slide-up bg-gray-100 dark:bg-gray-800 p-4 rounded-lg hover:shadow-lg transition-all duration-300">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{spec.label}</p>
                    <p className="text-xl font-bold">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div ref={featuresRef} className={`transition-all duration-1000 ${featuresVisible ? 'opacity-100' : 'opacity-0'}`}>
              <h2 className="text-3xl font-bold mb-6">Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {car.features.map((feature, index) => (
                  <div key={index} style={{ animationDelay: `${index * 0.05}s` }} className="animate-slide-up flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
                    <span className="text-ferrari-red text-2xl">✓</span>
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Price Card */}
            <div className="card p-8 bg-gradient-to-br from-ferrari-red/10 to-red-500/10 dark:from-ferrari-red/20 dark:to-red-500/20 border border-ferrari-red/20">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Starting Price</p>
              <h3 className="text-4xl font-bold text-ferrari-red mb-6">{car.price}</h3>
              <button className="w-full btn btn-primary">
                Inquire Now
              </button>
            </div>

            {/* Quick Stats */}
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-6">Quick Stats</h3>
              <div className="space-y-4">
                <div className="border-b dark:border-gray-700 pb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Top Speed</p>
                  <div className="flex items-end justify-between">
                    <span className="text-2xl font-bold">{car.speed}</span>
                    <span className="text-sm">km/h</span>
                  </div>
                </div>
                <div className="border-b dark:border-gray-700 pb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Horsepower</p>
                  <div className="flex items-end justify-between">
                    <span className="text-2xl font-bold">{car.horsepower}</span>
                    <span className="text-sm">HP</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">0-100 km/h</p>
                  <div className="flex items-end justify-between">
                    <span className="text-2xl font-bold">{car.acceleration}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Share */}
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Share</h3>
              <div className="flex gap-2">
                <button className="flex-1 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-ferrari-red hover:text-white transition-colors">
                  f
                </button>
                <button className="flex-1 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-ferrari-red hover:text-white transition-colors">
                  𝕏
                </button>
                <button className="flex-1 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-ferrari-red hover:text-white transition-colors">
                  📧
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Cars */}
      <section ref={relatedRef} className={`section bg-gray-50 dark:bg-gray-800 transition-all duration-1000 ${relatedVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Other Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ferrariCars.filter(c => c.id !== car.id).map((relatedCar, index) => (
              <div key={relatedCar.id} style={{ animationDelay: `${index * 0.1}s` }} className="animate-slide-up card overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105" onClick={() => navigate(`/car/${relatedCar.id}`)}>
                <div className="h-48 overflow-hidden">
                  <img
                    src={relatedCar.image}
                    alt={relatedCar.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold mb-2">{relatedCar.name}</h4>
                  <p className="text-ferrari-red font-semibold">{relatedCar.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </PageTransition>
  )
}

export default CarDetail
