import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/firebase.config';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddIdea = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddIdea = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;

        const newIdea = {
            title,
            description,
            userEmail: user?.email,
            createdAt: new Date()
        };

        try {
            await addDoc(collection(db, 'ideas'), newIdea);
            toast.success("Idea added successfully!");
            form.reset();
            navigate('/ideas'); 
        } catch (error) {
            console.error("Error adding idea: ", error);
            toast.error("Failed to add idea");
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-8 bg-white shadow-xl rounded-2xl border border-purple-100">
            <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">Share Your Idea</h2>
            <form onSubmit={handleAddIdea}>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Idea Title" 
                    className="input input-bordered w-full mb-4" 
                    required 
                />
                <textarea 
                    name="description" 
                    placeholder="Write your idea details here..." 
                    className="textarea textarea-bordered w-full mb-6 h-32" 
                    required 
                />
                <button type="submit" className="btn bg-purple-600 text-white w-full hover:bg-purple-700">
                    Submit Idea
                </button>
            </form>
        </div>
    );
};

export default AddIdea;