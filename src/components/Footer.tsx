export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary-400 mb-4">TJL Consulting</h3>
            <p className="text-secondary-300 mb-4">
              Professional consulting services to help your business grow and succeed.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-secondary-300">
              <li><a href="/services" className="hover:text-white transition-colors">Business Strategy</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Technology Solutions</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Project Management</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-secondary-300">
              <li><a href="/contact" className="hover:text-white transition-colors">Get in Touch</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-700 mt-8 pt-8 text-center text-secondary-400">
          <p>&copy; {new Date().getFullYear()} TJL Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}