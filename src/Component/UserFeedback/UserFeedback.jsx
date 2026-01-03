import React from "react";
import UserFeedbackCard from "./UserFeedBackCard";

const UserFeedback = () => {
  const feedbackData = [
    {
      name: "Rahim Ahmed",
      comment:
        "The platform is super easy to use and helped me import products quickly!",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Aisha Rahman",
      comment:
        "Great experience! Real-time updates and smooth UI make managing exports effortless.",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Nusrat Zaman",
      comment:
        "Highly recommended for importers. Clean interface and secure data handling.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    },
  ];

  return (
    
    <section className="py-8 px-5">
        <div className="w-11/12 mx-auto py-10">
        <div className="max-w-xl mx-auto pb-10 text-center">
      <h2 className="text-4xl font-bold  mb-5 text-lime-600">
        What Our Users Say
      </h2>
      <p className="text-gray-500">
        Hear from our users! Discover what our customers have to say about
        Import Export Hub. From seamless importing and exporting to real-time
        updates and secure account management, our platform makes global trade
        effortless.
      </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {feedbackData.map((user, index) => (
          <UserFeedbackCard key={index} user={user} />
        ))}
      </div>
      </div>
    </section>

  );
};

export default UserFeedback;
