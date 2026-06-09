import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext); 
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        signIn(email, password)
            .then(() => navigate('/'))
            .catch(error => console.error(error));
    };

    // গুগল লগইন হ্যান্ডলার
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(() => navigate('/'))
            .catch(error => console.error(error));
    };

    return (
        <div className="flex justify-center items-center min-h-[70vh] px-4">
            <form onSubmit={handleLogin} className="card w-full max-w-sm bg-white shadow-2xl p-8 rounded-2xl border border-purple-100">
                <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">Login</h2>
                
                <input name="email" type="email" placeholder="Email" className="input input-bordered w-full mb-4" required />
                <input name="password" type="password" placeholder="Password" className="input input-bordered w-full mb-6" required />
                
                <button type="submit" className="btn bg-purple-600 text-white w-full mb-4">Login</button>
                
                {/* গুগল লগইন বাটন */}
                <button 
                    type="button" 
                    onClick={handleGoogleLogin} 
                    className="btn btn-outline w-full mb-6"
                >
                    Login with Google
                </button>
                
                <p className="text-center">New here? <Link to="/register" className="text-purple-600 font-bold">Register</Link></p>
            </form>
        </div>
    );
};

export default Login;