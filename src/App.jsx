import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-red-950 text-white flex flex-col">
      {/* Header / Branding Title */}
      <header className="w-full bg-gradient-to-r from-red-900 to-black py-6 shadow-2xl border-b border-red-600/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            PawPrint America Custom T-Shirts
          </h1>
          <p className="mt-3 text-lg sm:text-xl md:text-2xl text-gray-300 font-medium">
            Upload Front & Back Designs • Spin 360° to Preview Both Sides • Print Ready on Our New Machine!
          </p>
          <p className="mt-2 text-base text-gray-400">
            FL/NY Locations • Local Pickup or Nationwide Shipping • Fast Turnaround
          </p>
        </div>
      </header>

      {/* Main Content Area – keeps the original stack */}
      <main className="flex-grow transition-all ease-in flex flex-col md:flex-row">
        <Home />
        <div className="flex-grow relative">
          <Canvas />
        </div>
        <Customizer />
      </main>

      {/* Footer */}
      <footer className="w-full bg-black/80 py-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">
            Ready to print? Email your final design to <span className="text-red-400 font-semibold">print@pawprintamerica.com</span>
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Questions? Call/WhatsApp: 305-335-7856 • Powered by PawPrint America – 25+ Years of Rebel Printing
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
