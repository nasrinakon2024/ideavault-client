import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast'; // ইমপোর্ট করা হলো

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-gray-800">
      {/* টোস্টার যুক্ত করা হলো যাতে সব পেজ থেকে টোস্ট কাজ করে */}
      <Toaster position="top-right" reverseOrder={false} />
      
      {/* নেভিগেশন বার */}
      <Navbar />
      
      {/* মেইন কন্টেন্ট - এখানে রাউট অনুযায়ী পেজগুলো লোড হবে */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 py-8">
        <Outlet />
      </main>
      
      {/* ফুটার */}
      <Footer />
    </div>
  );
}

export default App;