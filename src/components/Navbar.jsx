import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-lg px-4 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-purple-700 rounded-box w-52">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/ideas">Ideas</Link></li>
            <li><Link to="/my-ideas">My Ideas</Link></li>
            <li><Link to="/my-interactions">My Interactions</Link></li>
            <li><Link to="/add-idea" className="font-bold text-yellow-300">+ Add Idea</Link></li>
          </ul>
        </div>
        <Link to="/" className="text-3xl font-extrabold italic tracking-tighter">IdeaVault</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4 font-semibold text-lg">
          <li><Link to="/" className="hover:text-yellow-300 transition-all">Home</Link></li>
          <li><Link to="/ideas" className="hover:text-yellow-300 transition-all">Ideas</Link></li>
          <li><Link to="/my-ideas" className="hover:text-yellow-300 transition-all">My Ideas</Link></li>
          <li><Link to="/my-interactions" className="hover:text-yellow-300 transition-all">My Interactions</Link></li>
          <li><Link to="/add-idea" className="font-bold text-yellow-300">+ Add Idea</Link></li>
        </ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <button 
            onClick={handleLogOut} 
            className="btn bg-white text-purple-700 hover:bg-yellow-300 border-none transition-all duration-300 hover:scale-110 shadow-xl"
          >
            Logout
          </button>
        ) : (
          <Link 
            to="/login" 
            className="btn bg-white text-purple-700 hover:bg-yellow-300 border-none transition-all duration-300 hover:scale-110 shadow-xl"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;