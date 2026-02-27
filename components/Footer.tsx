export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-500">
                        OM Automotive
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Quality Automotive Components.
                    </p>
                </div>

                {/* Unit Address */}
                <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Unit Address</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Plot No: 193,194,195, Block : A-18, Shyam Industrial Park - 2, Bakrol Bujarang, Daskroi, Ahmedabad, Gujarat, India
                    </p>
                    <a
                        href="https://maps.app.goo.gl/smd6JMjVnw2KMikaA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-400 hover:text-orange-300 text-sm inline-block transition-colors"
                    >
                        View on Google Maps →
                    </a>
                </div>

                {/* Support */}
                <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Support</h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="hover:text-white cursor-pointer transition-colors">FAQ</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Shipping & Returns</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Stay Connected</h4>
                    <div className="flex bg-gray-800 rounded-full p-1 border border-gray-700 focus-within:border-orange-500 transition-colors">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-transparent px-4 py-2 w-full outline-none text-sm placeholder-gray-500 text-white"
                        />
                        <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors">
                            <span className="sr-only">Subscribe</span>
                            →
                        </button>
                    </div>
                    <p className="text-xs text-gray-500">No spam, just updates.</p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-600">
                © {new Date().getFullYear()} OM Automotive. All rights reserved.
            </div>
        </footer>
    );
}
