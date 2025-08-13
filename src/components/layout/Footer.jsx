export default function Footer() {
  return (
    <footer className="bg-black py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-white text-xl font-bold mb-6">
          Subscribe to get our Newsletter
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-black px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            Subscribe
          </button>
        </div>
        
        <div className="flex justify-center gap-6 mt-8 text-gray-400 text-sm">
          <a href="#" className="hover:text-white transition-colors">Careers</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  )
}
