// components/CommentSection.jsx
'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function CommentSection() {
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({ name: '', comment: '' });

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const res = await axios.get('https://comment-be.onrender.com/api/comments');
    setComments(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.comment) return;

    await axios.post('https://comment-be.onrender.com/api/comments', formData);
    // await axios.post('http://localhost:5000/api/comments', formData);
    setFormData({ name: '', comment: '' });
    fetchComments();
  };

  return (
    <div className="bg-gray-200 shadow-lg rounded-2xl p-6 max-w-full mx-auto mt-10 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">💬 Leave a Comment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border text-black rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <textarea
          placeholder="Your Comment"
          className="w-full px-4 py-2 border rounded-xl text-black border-gray-300 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={formData.comment}
          onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition duration-300"
        >
          Post Comment
        </button>
      </form>

      <div className="mt-6 space-y-4">
        {comments.map((c) => (
          <div key={c._id} className="bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-100">
            <p className="font-semibold text-gray-700">{c.name}</p>
            <p className="text-gray-600 text-sm">{c.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
