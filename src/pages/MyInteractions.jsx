import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase.config';
import LoadingSpinner from '../components/LoadingSpinner';

const MyInteractions = () => {
    const { user } = useContext(AuthContext);
    const [myComments, setMyComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchComments = async () => {
            if (!user?.email) {
                setLoading(false);
                return;
            }

            try {
                
                const q = query(collection(db, 'comments'), where("userEmail", "==", user.email));
                const querySnapshot = await getDocs(q);
                const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setMyComments(data);
            } catch (error) {
                console.error("Error fetching comments:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchComments();
    }, [user]);

    if (loading) return <LoadingSpinner />;

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-purple-800 mb-6">My Interactions</h1>
            {myComments.length === 0 ? (
                <div className="text-center py-10">
                    <p className="text-gray-500 text-lg">You haven't commented on any ideas yet.</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {myComments.map(comment => (
                        <div key={comment.id} className="p-6 border border-purple-100 rounded-2xl shadow-sm bg-white hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-semibold text-purple-700">Idea ID: {comment.ideaId}</h3>
                            <p className="text-gray-700 my-2 italic">"{comment.text}"</p>
                            <p className="text-xs text-gray-400">
                                Date: {comment.timestamp?.toDate ? new Date(comment.timestamp.toDate()).toLocaleDateString() : 'N/A'}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyInteractions;