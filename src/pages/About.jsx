import PageTransition from '../components/PageTransition'
import useScrollAnimation from '../hooks/useScrollAnimation'

function About() {
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation()
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation()
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation()
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation()

  return (
    <PageTransition>
    <div>
      {/* Header */}
      <section className="relative h-80 bg-gradient-to-b from-ferrari-red/20 to-transparent overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 h-full flex items-center">
          <div className="py-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              Discover the passion, heritage, and innovation behind Ferrari's most iconic supercars
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={storyRef} className={`section bg-white dark:bg-ferrari-dark transition-all duration-1000 ${storyVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-ferrari-red">Story</span>
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Founded in 1947, Ferrari represents the pinnacle of Italian engineering and design excellence. For over 75 years, we've been crafting supercars that combine raw power with timeless beauty.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Each Ferrari is more than just a car—it's a masterpiece. Every curve, every engine note, every acceleration tells a story of passion, precision, and perfection.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Our commitment to innovation means we're constantly pushing boundaries, whether it's hybrid technology with the SF90 Stradale or the legendary power of the F8 Tributo.
              </p>
            </div>
            <div className="animate-slide-up h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80"
                alt="Ferrari Heritage"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section ref={valuesRef} className={`section bg-gray-50 dark:bg-gray-800 transition-all duration-1000 ${valuesVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Our <span className="text-ferrari-red">Values</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Performance',
                description: 'Uncompromising power and speed'
              },
              {
                icon: '🎨',
                title: 'Design',
                description: 'Iconic aesthetics and elegance'
              },
              {
                icon: '💎',
                title: 'Quality',
                description: 'Handcrafted excellence in every detail'
              },
              {
                icon: '🏆',
                title: 'Heritage',
                description: 'Legendary motorsport legacy since 1947'
              },
              {
                icon: '🌍',
                title: 'Innovation',
                description: 'Leading edge technology and sustainability'
              },
              {
                icon: '❤️',
                title: 'Passion',
                description: 'Pure automotive enthusiasm and soul'
              },
              {
                icon: '🔧',
                title: 'Craftsmanship',
                description: 'Master engineering and precision'
              },
              {
                icon: '⭐',
                title: 'Exclusivity',
                description: 'Limited production for the elite'
              }
            ].map((value, index) => (
              <div
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="animate-slide-up card p-8 text-center hover:border-ferrari-red border border-transparent transition-all duration-300 hover:shadow-lg"
              >
                <p className="text-5xl mb-4">{value.icon}</p>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By The Numbers */}
      <section ref={statsRef} className={`section bg-white dark:bg-ferrari-dark transition-all duration-1000 ${statsVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            By The <span className="text-ferrari-red">Numbers</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '75+', label: 'Years of Excellence', icon: '📅' },
              { number: '220K+', label: 'Cars Produced', icon: '🏭' },
              { number: '16', label: 'World Championships', icon: '🏆' },
              { number: '340+', label: 'km/h Top Speed', icon: '⚡' }
            ].map((stat, index) => (
              <div
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="animate-slide-up text-center"
              >
                <p className="text-6xl mb-4">{stat.icon}</p>
                <p className="text-5xl font-bold text-ferrari-red mb-2">{stat.number}</p>
                <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className={`section bg-gray-50 dark:bg-gray-800 transition-all duration-1000 ${teamVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Our <span className="text-ferrari-red">Leadership</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto">
            Visionary leaders dedicated to pushing the boundaries of automotive engineering
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                name: 'Benedetto Vigna',
                title: 'Chief Executive Officer',
                bio: 'Leading Ferrari into a new era of hybrid and electric innovation'
              },
              {
                name: 'Enrico Galliera',
                title: 'Chief Commercial Officer',
                bio: 'Expanding Ferrari\'s presence globally with exclusive experiences'
              },
              {
                name: 'Gianmaria Fulgenzi',
                title: 'Chief Technology Officer',
                bio: 'Pioneering next-generation automotive engineering excellence'
              }
            ].map((member, index) => (
              <div
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="animate-slide-up card overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-64 bg-gradient-to-br from-ferrari-red/20 to-red-500/20 flex items-center justify-center">
                  <span className="text-6xl">👤</span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-ferrari-red font-semibold mb-4">{member.title}</p>
                  <p className="text-gray-600 dark:text-gray-400">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section bg-gradient-to-r from-ferrari-red/10 to-red-500/10 dark:from-ferrari-red/20 dark:to-red-500/20">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            To create the world's most desirable supercars—blending cutting-edge technology, Italian craftsmanship, and uncompromising performance. Every Ferrari tells a story of passion, precision, and the pursuit of perfection. We don't just build cars; we craft experiences that inspire legend.
          </p>
        </div>
      </section>
    </div>
    </PageTransition>
  )
}

export default About
