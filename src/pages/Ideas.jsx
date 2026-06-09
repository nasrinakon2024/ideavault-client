import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase.config'; 
import LoadingSpinner from '../components/LoadingSpinner'; 

const Ideas = () => {
    const [ideas, setIdeas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchIdeas = async () => {
            try {
                
                const querySnapshot = await getDocs(collection(db, 'ideas'));
                const ideasData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setIdeas(ideasData);
            } catch (error) {
                console.error("Error fetching ideas: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchIdeas();
    }, []);

    if (loading) return <LoadingSpinner />; 

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold text-center text-purple-700 mb-10">Community Ideas</h1>
            
            {ideas.length === 0 ? (
                <p className="text-center text-gray-500">No ideas found yet. Be the first to share one!</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ideas.map((idea) => (
                        <div key={idea.id} className="card bg-white shadow-xl p-6 rounded-2xl border border-purple-100 hover:shadow-2xl transition-shadow">
                            <h2 className="text-2xl font-semibold text-purple-800 mb-2">{idea.title}</h2>
                            <p className="text-gray-600 mb-4">{idea.description}</p>
                            <div className="badge badge-primary badge-outline">Posted by: {idea.userEmail || 'Anonymous'}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Ideas;