import React, { useState, useRef } from "react";

const FAQCard = ({ title, desc }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div
      className="bg-light-yellow px-6 py-4 rounded-lg cursor-pointer transition-all duration-300"
      onClick={() => setIsOpen(prev => !prev)}
      aria-expanded={isOpen}
    >
      <div className="flex justify-between items-start">
        <h2 className="font-semibold text-xl text-dark-brown">{title}</h2>
        <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
      </div>

      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-500 ease-in-out`}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <p className="text-brown font-medium text-lg mt-4">{desc}</p>
      </div>
    </div>
  );
};

export default FAQCard;
