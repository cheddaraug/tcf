import React from "react";

const BouncingArrowDown = () => {
  return (
    <>
      <div className="flex justify-center mt-8">
        <svg
          className="animate-bounce w-6 h-6 text-primary"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </>
  );
};

export default BouncingArrowDown;
