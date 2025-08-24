import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-secondary-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary-600">
              TJL Consulting
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-secondary-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-secondary-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-secondary-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-secondary-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button className="text-secondary-700 hover:text-primary-600 p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}