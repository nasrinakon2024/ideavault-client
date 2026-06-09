import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate যোগ করা হয়েছে
import toast from 'react-hot-toast'; // তোস্ট নোটিফিকেশনের জন্য

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate(); // রেজিস্ট্রেশনের পর অন্য পেজে পাঠানোর জন্য

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // Firebase-এ ইউজার তৈরি
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("Registration Successful!"); 
                
                form.reset();
                navigate('/'); 
            })
            .catch(error => {
                console.error(error);
               
                toast.error(error.message.split('auth/')[1].replace(/-/g, ' '));
            });
    };

    return (
        <div className="flex justify-center items-center min-h-[70vh] px-4">
            <form onSubmit={handleRegister} className="card w-full max-w-sm bg-white shadow-2xl p-8 rounded-2xl border border-purple-100">
                <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">Register</h2>
                
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    className="input input-bordered w-full mb-4 border-purple-200 focus:ring-2 focus:ring-purple-200" 
                    required 
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    className="input input-bordered w-full mb-6 border-purple-200 focus:ring-2 focus:ring-purple-200" 
                    required 
                />
                
                <button 
                    type="submit" 
                    className="btn bg-gradient-to-r from-purple-600 to-indigo-600 text-white w-full border-none mb-6 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                    Register
                </button>
                
                <p className="text-center text-gray-600">
                    Already have an account? <Link to="/login" className="text-purple-600 font-bold hover:underline">Login</Link>
                </p>
            </form>
        </div>
    );
};

export default Register;