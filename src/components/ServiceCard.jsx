const ServiceCard = ({ title, desc, image, setHovered, index, hovered }) => {
  return (
    <>
      <div
        className="bg-tan w-[48%] hover:scale-[1.03] transition-all duration-500 ease-linear lg:w-[18rem] h-[18rem] lg:h-[25rem] rounded-lg flex flex-col justify-between px-3 py-4 lg:px-4 lg:py-6 "
        onMouseEnter={() => setHovered(index + 1)}
        onMouseLeave={() => setHovered(0)}
      >
        <div
          className={`flex items-end justify-end ${hovered == index + 1 ? "scale-[1.03] rotate-45" : "scale"} transition-all duration-500 ease-initial`}
        >
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
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>

        <p className="text-lg font-semibold">{title} </p>
      </div>
    </>
  );
};

export default ServiceCard;
