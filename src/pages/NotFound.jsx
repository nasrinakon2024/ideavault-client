import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
            <h1 className="text-9xl font-extrabold text-primary">404</h1>
            <h2 className="text-3xl font-bold mt-4">Page Not Found</h2>
            <p className="text-gray-600 mt-2 mb-8">
                দুঃখিত, আপনি যে পেজটি খুঁজছেন তা আমাদের ওয়েবসাইটে নেই।
            </p>
            <Link to="/" className="btn btn-primary px-8">
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;