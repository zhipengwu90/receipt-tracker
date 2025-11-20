import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100">
      {/* Header/Navigation */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Image 
                src="/appImg/apple-touch-icon.png" 
                alt="Receipt Tracker Icon" 
                width={40} 
                height={40}
                className="rounded-lg"
              />
              <h1 className="text-2xl font-bold text-gray-900">Receipt Tracker</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#screenshots" className="text-gray-600 hover:text-blue-600 transition-colors">Screenshots</a>
              <a href="#download" className="text-gray-600 hover:text-blue-600 transition-colors">Download</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Track Your 
                <span className="text-blue-600"> Receipts</span>
                <br />Effortlessly
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Never lose track of your expenses again. Receipt Tracker helps you organize, 
                analyze, and manage all your receipts in one beautiful, intuitive app.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="https://apps.apple.com/app/receipt-tracker/id6754727047"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl text-center inline-flex items-center justify-center space-x-2"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span>Download on App Store</span>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Image 
                  src="/appImg/Home.png" 
                  alt="Receipt Tracker Home Screen" 
                  width={300} 
                  height={600}
                  className="mx-auto rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-20 scale-110"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Smart Tracking
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to stay on top of your expenses and make informed financial decisions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">Receipt Organization</h4>
              <p className="text-gray-600">
                Easily capture, categorize, and organize all your receipts with smart categorization and tagging.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-green-50 hover:bg-green-100 transition-colors">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">Smart Analytics</h4>
              <p className="text-gray-600">
                Get detailed insights into your spending patterns with beautiful charts and comprehensive reports.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-purple-50 hover:bg-purple-100 transition-colors">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">Easy Export</h4>
              <p className="text-gray-600">
                Export your data in various formats for tax purposes, accounting, or personal record keeping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              See It In Action
            </h3>
            <p className="text-xl text-gray-600">
              Experience the beautiful, intuitive interface designed for efficiency
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <Image 
                  src="/appImg/Home.png" 
                  alt="Home Screen" 
                  width={200} 
                  height={400}
                  className="mx-auto rounded-xl"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mt-4">Home Dashboard</h4>
              <p className="text-gray-600 text-sm">Quick overview of your recent receipts and spending</p>
            </div>

            <div className="text-center">
              <div className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <Image 
                  src="/appImg/Analysis.png" 
                  alt="Analysis Screen" 
                  width={200} 
                  height={400}
                  className="mx-auto rounded-xl"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mt-4">Smart Analytics</h4>
              <p className="text-gray-600 text-sm">Detailed insights and spending analysis</p>
            </div>

            <div className="text-center">
              <div className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <Image 
                  src="/appImg/receipt_group.png" 
                  alt="Receipt Groups" 
                  width={200} 
                  height={400}
                  className="mx-auto rounded-xl"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mt-4">Receipt Groups</h4>
              <p className="text-gray-600 text-sm">Organize receipts by category or project</p>
            </div>

            <div className="text-center">
              <div className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <Image 
                  src="/appImg/export.png" 
                  alt="Export Features" 
                  width={200} 
                  height={400}
                  className="mx-auto rounded-xl"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mt-4">Export & Share</h4>
              <p className="text-gray-600 text-sm">Export data in multiple formats</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">50K+</div>
              <div className="text-blue-100 text-lg">Active Users</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">1M+</div>
              <div className="text-blue-100 text-lg">Receipts Tracked</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">4.8★</div>
              <div className="text-blue-100 text-lg">App Store Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Loved by Users Worldwide
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {"★".repeat(5)}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;This app has completely transformed how I manage my business expenses. The analytics feature is incredible!&rdquo;
              </p>
              <div className="font-semibold text-gray-900">Sarah Chen</div>
              <div className="text-gray-500 text-sm">Small Business Owner</div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {"★".repeat(5)}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;So easy to use and the export feature makes tax season a breeze. Highly recommend!&rdquo;
              </p>
              <div className="font-semibold text-gray-900">Michael Rodriguez</div>
              <div className="text-gray-500 text-sm">Freelancer</div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {"★".repeat(5)}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;Beautiful design and powerful features. This is exactly what I needed for expense tracking.&rdquo;
              </p>
              <div className="font-semibold text-gray-900">Emily Johnson</div>
              <div className="text-gray-500 text-sm">Marketing Manager</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-20 bg-linear-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Take Control of Your Expenses?
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of users who are already saving time and money with Receipt Tracker
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://apps.apple.com/app/receipt-tracker/id6754727047"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span>Download on App Store</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image 
                  src="/appImg/apple-touch-icon.png" 
                  alt="Receipt Tracker Icon" 
                  width={32} 
                  height={32}
                  className="rounded-lg"
                />
                <h4 className="text-xl font-bold">Receipt Tracker</h4>
              </div>
              <p className="text-gray-400">
                The smart way to track and manage all your receipts and expenses.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Product</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Updates</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Connect</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2024 Receipt Tracker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
