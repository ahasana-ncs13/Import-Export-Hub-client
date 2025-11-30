import React from 'react';
import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-400 py-4">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => setOpen(!open)}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <span className="text-2xl">{open ? "-" : "+"}</span>
      </button>

      {open && <p className="mt-2 text-primary leading-relaxed">{answer}</p>}
    </div>
  );
};

export default FAQItem;