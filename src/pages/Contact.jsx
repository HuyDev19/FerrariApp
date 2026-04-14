import { useState } from 'react'
import PageTransition from '../components/PageTransition'
import useScrollAnimation from '../hooks/useScrollAnimation'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation()
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, send to backend API
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    
    // Show success message for 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <PageTransition>
    <div>
      {/* Header */}
      <section className="relative h-80 bg-gradient-to-b from-ferrari-red/20 to-transparent overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 h-full flex items-center">
          <div className="py-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              Get in touch with our team to discuss your Ferrari dreams and exclusive offerings
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section">
        <div className="container grid md:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div ref={infoRef} className={`transition-all duration-1000 ${infoVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-3xl font-bold mb-10 animate-slide-up">Get In Touch</h2>

            <div className="space-y-8">
              {/* Address */}
              <div className="animate-slide-up" style={{ animationDelay: '0s' }}>
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🏢</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Via Emilia Est 472<br />
                      41122 Modena<br />
                      Italy
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-start gap-4">
                  <span className="text-3xl">📱</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Phone</h3>
                    <a href="tel:+390592407611" className="text-ferrari-red hover:underline">
                      +39 (059) 240 7611
                    </a>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                      Available Monday - Friday, 9AM - 6PM CET
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-start gap-4">
                  <span className="text-3xl">📧</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Email</h3>
                    <a href="mailto:info@ferrari.com" className="text-ferrari-red hover:underline">
                      info@ferrari.com
                    </a>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-start gap-4">
                  <span className="text-3xl">⏰</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12 pt-8 border-t dark:border-gray-700">
              <h3 className="text-xl font-bold mb-6">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-ferrari-red/10 hover:bg-ferrari-red hover:text-white flex items-center justify-center transition-all duration-300">
                  f
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-ferrari-red/10 hover:bg-ferrari-red hover:text-white flex items-center justify-center transition-all duration-300">
                  𝕏
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-ferrari-red/10 hover:bg-ferrari-red hover:text-white flex items-center justify-center transition-all duration-300">
                  📷
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-ferrari-red/10 hover:bg-ferrari-red hover:text-white flex items-center justify-center transition-all duration-300">
                  🎥
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef} className={`md:col-span-2 transition-all duration-1000 ${formVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="card p-8 bg-gray-50 dark:bg-gray-800 animate-slide-up">
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>

              {submitted && (
                <div className="mb-8 p-6 bg-green-100 dark:bg-green-900/30 border border-green-400 rounded-lg animate-fade-in">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✅</span>
                    <div>
                      <h3 className="font-bold text-green-800 dark:text-green-300">Message Sent Successfully!</h3>
                      <p className="text-green-700 dark:text-green-400 text-sm mt-1">
                        Thank you for reaching out. We'll get back to you shortly.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="animate-slide-up" style={{ animationDelay: '0s' }}>
                  <label className="block text-sm font-semibold mb-3">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-ferrari-red transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div className="animate-slide-up" style={{ animationDelay: '0.05s' }}>
                  <label className="block text-sm font-semibold mb-3">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-ferrari-red transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone */}
                <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  <label className="block text-sm font-semibold mb-3">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-ferrari-red transition-all duration-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                {/* Subject */}
                <div className="animate-slide-up" style={{ animationDelay: '0.15s' }}>
                  <label className="block text-sm font-semibold mb-3">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-ferrari-red transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="inquiry">Car Inquiry</option>
                    <option value="appointment">Schedule Appointment</option>
                    <option value="support">Customer Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <label className="block text-sm font-semibold mb-3">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-ferrari-red transition-all duration-300 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <div className="animate-slide-up" style={{ animationDelay: '0.25s' }}>
                  <button
                    type="submit"
                    className="w-full btn btn-primary hover:shadow-xl hover:shadow-ferrari-red/50 transform hover:scale-105 transition-all duration-300"
                  >
                    Send Message
                  </button>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-3 text-center">
                    * Required fields. We respect your privacy and will only use your information to respond to your inquiry.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-gray-100 dark:bg-gray-900">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Visit Our <span className="text-ferrari-red">Headquarters</span>
          </h2>
          <div className="card overflow-hidden h-96 hover:shadow-xl transition-all duration-300">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              title="Ferrari Headquarters"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2843.0989203568346!2d10.873933!3d44.632222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477c60f79f8b0001%3A0xe1f8b8b8b8b8b8b8!2sFerrari!5e0!3m2!1sen!2s!4v1234567890"
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white dark:bg-ferrari-dark">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">
            Frequently Asked <span className="text-ferrari-red">Questions</span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'How do I schedule a test drive?',
                a: 'You can schedule a test drive by contacting our sales team via phone, email, or by filling out the contact form above. We\'ll arrange a convenient time for you to experience your dream Ferrari.'
              },
              {
                q: 'What financing options are available?',
                a: 'We offer flexible financing solutions through our partners. Contact us for details on competitive rates and terms tailored to your needs.'
              },
              {
                q: 'Do you offer after-sales service?',
                a: 'Yes! Ferrari provides comprehensive after-sales service including maintenance, repairs, and genuine spare parts at authorized service centers.'
              },
              {
                q: 'Can I customize my Ferrari?',
                a: 'Absolutely! Each Ferrari can be customized with your choice of colors, interior materials, and special editions. Contact us to discuss your preferences.'
              },
              {
                q: 'What is the delivery time?',
                a: 'Delivery times vary based on model and customization options. Typically, expect 6-12 months from order confirmation. We\'ll keep you updated throughout the process.'
              }
            ].map((item, index) => (
              <div
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="animate-slide-up card p-6 hover:border-ferrari-red border border-transparent transition-all duration-300"
              >
                <h3 className="text-lg font-bold mb-3 flex items-start gap-3">
                  <span className="text-ferrari-red text-2xl">Q:</span>
                  {item.q}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 flex items-start gap-3 pl-9">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </PageTransition>
  )
}

export default Contact
