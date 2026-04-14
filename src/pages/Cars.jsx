import { useState } from 'react'
import CarCard from '../components/CarCard'
import PageTransition from '../components/PageTransition'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { ferrariCars } from '../data/ferrariCars'

function Cars() {
  const [sortBy, setSortBy] = useState('name')
  const [filterYear, setFilterYear] = useState('all')
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation()

  const years = ['all', ...new Set(ferrariCars.map(car => car.year))]

  let filteredCars = ferrariCars
  if (filterYear !== 'all') {
    filteredCars = ferrariCars.filter(car => car.year === parseInt(filterYear))
  }

  filteredCars.sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name)
      case 'price-low':
        return parseInt(a.price) - parseInt(b.price)
      case 'price-high':
        return parseInt(b.price) - parseInt(a.price)
      case 'speed':
        return b.speed - a.speed
      case 'horsepower':
        return b.horsepower - a.horsepower
      default:
        return 0
    }
  })

  return (
    <PageTransition>
    <div className="bg-white dark:bg-ferrari-dark min-h-screen">
      {/* Header */}
      <section className="section bg-gradient-to-b from-gray-100 dark:from-gray-900 to-transparent">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            All <span className="text-ferrari-red">Cars</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Discover our complete collection of legendary supercars
          </p>
        </div>
      </section>

      {/* Filters & Sort */}
      <section className="section py-8">
        <div className="container">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Filter by Year */}
              <div>
                <label className="block text-sm font-semibold mb-3">Filter by Year</label>
                <select
                  value={filterYear}
                  onChange={(e) => setFilterYear(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-ferrari-red"
                >
                  {years.map(year => (
                    <option key={year} value={year}>
                      {year === 'all' ? 'All Years' : year}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-semibold mb-3">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-ferrari-red"
                >
                  <option value="name">Name (A-Z)</option>
                  <option value="price-low">Price (Low to High)</option>
                  <option value="price-high">Price (High to Low)</option>
                  <option value="speed">Top Speed</option>
                  <option value="horsepower">Horsepower</option>
                </select>
              </div>
            </div>

            <div className="text-sm text-gray-600 dark:text-gray-400">
              Showing <span className="font-bold">{filteredCars.length}</span> car(s)
            </div>
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section ref={gridRef} className={`section py-12 transition-all duration-1000 ${gridVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container">
          {filteredCars.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCars.map((car, index) => (
                <div key={car.id} style={{ animationDelay: `${index * 0.05}s` }} className="animate-slide-up">
                  <CarCard car={car} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-2xl font-bold mb-4">No cars found</p>
              <p className="text-gray-600 dark:text-gray-400">Try adjusting your filters</p>
            </div>
          )}
        </div>
      </section>
    </div>
    </PageTransition>
  )
}

export default Cars
