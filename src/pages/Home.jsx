import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      {/* হিরো টেক্সট */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-6">
        Welcome to IdeaVault!
      </h1>
      
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10">
        আপনার আইডিয়াগুলো নিরাপদে রাখুন এবং সবার সাথে শেয়ার করুন। আমাদের প্ল্যাটফর্মটি আপনার সৃজনশীলতাকে নতুন উচ্চতায় নিয়ে যাবে।
      </p>

      {/* গ্লোয়িং বাটন */}
      <div className="flex gap-4">
        <Link 
          to="/ideas" 
          className="btn bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-none px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.6)]"
        >
          Explore Ideas
        </Link>
        
        <Link 
          to="/add-idea" 
          className="btn btn-outline border-purple-600 text-purple-600 px-8 py-3 text-lg transition-all duration-300 hover:bg-purple-600 hover:text-white"
        >
          Add New Idea
        </Link>
      </div>
    </div>
  );
};

export default Home;