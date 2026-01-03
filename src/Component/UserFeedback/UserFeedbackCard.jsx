import React from 'react';
import { Star } from "lucide-react";

const UserFeedbackCard = ({ user }) => {
  const { name, comment, rating, avatar } = user;

  return (
    <div
      className="bg-blue-50 rounded-2xl p-5 shadow-md flex flex-col items-center text-center"
    >
      {/* Avatar */}
      <img
        src={avatar}
        alt={name}
        className="w-26 h-26 rounded-full mb-3 object-cover "
      />

      {/* User Name */}
      <h3 className="text-lg font-bold text-primary">{name}</h3>

      {/* Rating */}
      <div className="flex justify-center mt-2 mb-3">
        {[1, 2, 3, 4,5].map((num) => (
          <Star
            key={num}
            size={20}
            className={`${
              rating >= num ? "text-yellow-800 fill-yellow-400" : "text-yellow-800"
            }`}
          />
        ))}
      </div>

      {/* Comment */}
      <p className="text-gray-600">{comment}</p>
    </div>
  );
};

export default UserFeedbackCard;