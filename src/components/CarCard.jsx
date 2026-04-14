import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function CarCard({ car }) {
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    setIsFavorite(favorites.includes(car.id))
  }, [car.id])

  const toggleFavorite = (e) => {
    e.preventDefault()
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    if (isFavorite) {
      const updated = favorites.filter(id => id !== car.id)
      localStorage.setItem('favorites', JSON.stringify(updated))
    } else {
      favorites.push(car.id)
      localStorage.setItem('favorites', JSON.stringify(favorites))
    }
    setIsFavorite(!isFavorite)
  }

  return (
    <Link to={`/car/${car.id}`}>
      <div className="card overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-ferrari-red/30">
        {/* Image Container */}
        <div className="relative h-64 md:h-72 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-800">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Favorite Button */}
          <button
            onClick={toggleFavorite}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/90 dark:bg-gray-900/90 hover:bg-ferrari-red hover:text-white transition-all duration-300 z-10"
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              {car.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{car.model}</p>
          </div>

          {/* Price & Key Stats */}
          <div className="space-y-2">
            <p className="text-ferrari-red font-bold text-lg">{car.price}</p>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div className="text-center">
                <p className="font-semibold text-gray-900 dark:text-white">{car.speed}</p>
                <p className="text-xs text-gray-500">km/h</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-900 dark:text-white">{car.horsepower}</p>
                <p className="text-xs text-gray-500">HP</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-900 dark:text-white">{car.acceleration}</p>
                <p className="text-xs text-gray-500">0-100</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
            {car.description}
          </p>

          {/* View Details Button */}
          <div className="pt-4 border-t dark:border-gray-700">
            <button className="w-full py-2 text-center font-semibold text-ferrari-red hover:bg-ferrari-red/10 rounded-lg transition-colors duration-300">
              View Details →
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CarCard
