import React from "react";
import FAQItem from "./FAQItem";

const FAQ = () => {
  const faqData = [
    {
      question: "What is the Import Export Hub?",
      answer:
        "It is a modern web platform where users can browse products globally, manage exports, and save items to their personal 'My Imports' section.",
    },
    {
      question: "How does the 'My Imports' feature work?",
      answer:
        "Users can add any product to the 'My Imports' section with one click, and it syncs instantly across the platform.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes. The platform uses secure authentication and ensures all user data is encrypted and protected.",
    },
    {
      question: "Can I view product details?",
      answer:
        "Yes. Each product includes detailed information like price, origin country, rating, availability, and specifications.",
    },
    {
      question: "How are the latest products selected?",
      answer:
        "Products are fetched from the database and sorted by creation date, showing the six most recently added items.",
    },
  ];

  return (
    <div className="my-15">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-center mb-2 text-primary">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600">
          Find quick answers to the most common questions about the Import
          Export Hub platform.This section helps users understand how product
          browsing, exporting, importing, and account security work across the
          system.
        </p>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-10">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
