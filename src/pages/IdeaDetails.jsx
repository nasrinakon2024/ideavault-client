import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { db } from '../firebase/firebase.config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import toast from 'react-hot-toast';

const IdeaDetails = ({ ideaId }) => { 
    const { user } = useContext(AuthContext);
    const [commentText, setCommentText] = useState('');

    const handleCommentSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            return toast.error("Please login to comment!");
        }

        try {
            
            await addDoc(collection(db, "comments"), {
                text: commentText,
                userEmail: user.email, 
                ideaId: ideaId, 
                timestamp: serverTimestamp() 
            });
            
            toast.success("Comment added successfully!");
            setCommentText(''); 
        } catch (error) {
            toast.error("Something went wrong!");
        }
    };

    return (
        <div>
            {/* আইডিয়া ডিটেইলস এখানে থাকবে */}
            
            {/* কমেন্ট সেকশন */}
            <form onSubmit={handleCommentSubmit} className="mt-6">
                <textarea 
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    className="textarea textarea-bordered w-full"
                    placeholder="Write your comment..."
                    required
                />
                <button type="submit" className="btn btn-primary mt-2">Post Comment</button>
            </form>
        </div>
    );
};

export default IdeaDetails;