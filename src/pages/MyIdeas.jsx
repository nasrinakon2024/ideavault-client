import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase.config';
import LoadingSpinner from '../components/LoadingSpinner';
import toast from 'react-hot-toast';

const MyIdeas = () => {
    const { user } = useContext(AuthContext);
    const [myIdeas, setMyIdeas] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMyIdeas = async () => {
        if (user?.email) {
            const q = query(collection(db, 'ideas'), where("userEmail", "==", user.email));
            const querySnapshot = await getDocs(q);
            const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setMyIdeas(data);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMyIdeas();
    }, [user]);

    // ডিলিট করার ফাংশন
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this idea?")) {
            try {
                await deleteDoc(doc(db, 'ideas', id));
                toast.success("Deleted successfully!");
                fetchMyIdeas(); 
            } catch (error) {
                toast.error("Error deleting!");
            }
        }
    };

    if (loading) return <LoadingSpinner />;

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">My Ideas</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {myIdeas.map(idea => (
                    <div key={idea.id} className="card bg-white shadow-xl p-6 rounded-2xl border border-purple-100">
                        <h2 className="text-xl font-semibold">{idea.title}</h2>
                        <p className="my-4">{idea.description}</p>
                        <div className="flex gap-4">
                            <button onClick={() => handleDelete(idea.id)} className="btn btn-error btn-sm text-white">Delete</button>
                            <button className="btn btn-warning btn-sm text-white">Edit</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default MyIdeas;