import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    // লোডিং অবস্থায় থাকলে একটি স্পিনার বা লোডিং টেক্সট দেখাবে
    if (loading) {
        return <div className="text-center mt-20 text-purple-600 font-bold">Checking authentication...</div>;
    }

    // ইউজার লগইন করা থাকলে পেজ দেখাবে, না থাকলে লগইন পেজে পাঠাবে
    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;