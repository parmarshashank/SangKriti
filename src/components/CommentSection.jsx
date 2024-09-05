import React, { useState } from 'react';

const CommentSection = ({ articleId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <form onSubmit={handleCommentSubmit} className="mb-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded-lg mb-2"
        />
        <button 
          type="submit" 
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-slate-50 hover:text-black transition duration-300"
        >
          Post Comment
        </button>
      </form>
      <div className="space-y-4">
        {comments.length === 0 && <p className="text-gray-400">No comments yet.</p>}
        {comments.map((comment, index) => (
          <div key={index} className="bg-gray-900 p-4 rounded-lg text-white">
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
