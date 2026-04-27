function Footer() {
  return (
    <footer className="bg-ferrari-dark text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="text-xl font-bold text-ferrari-red mb-4">Ferrari Showcase</h4>
            <p className="text-gray-400">
              Experience the pinnacle of luxury sports car engineering with our curated collection of iconic Ferrari models.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-ferrari-red transition-colors">HomeTest</a></li>
              <li><a href="/cars" className="hover:text-ferrari-red transition-colors">Cars</a></li>
              <li><a href="#" className="hover:text-ferrari-red transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-ferrari-red transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-xl font-bold mb-4">Information</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-ferrari-red transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-ferrari-red transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-ferrari-red transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-ferrari-red transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:info@ferrari.com" className="hover:text-ferrari-red transition-colors">info@ferrari.com</a>
              </li>
              <li className="flex items-center gap-2">
                <span>📱</span>
                <a href="tel:+1234567890" className="hover:text-ferrari-red transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="text-sm">© 2024 Ferrari Showcase. All rights reserved.</li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 pt-8 flex justify-center gap-6">
          <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-ferrari-red flex items-center justify-center transition-colors">
            f
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-ferrari-red flex items-center justify-center transition-colors">
            𝕏
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-ferrari-red flex items-center justify-center transition-colors">
            📷
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-ferrari-red flex items-center justify-center transition-colors">
            🎥
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
