const ProcessCard = ({ processData, index }) => {
  const { image, title, desc, steps } = processData;

  const flexDirection = index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row";

  return (
    <div
      className={`flex flex-col ${flexDirection} gap-4 lg:gap-24 lg:items-start`}
    >
      <img
        src={image}
        alt=""
        className="border-2 rounded-xl border-primary lg:w-[40%] lg:h-[30%]"
      />
      <div>
        <p className="font-primary font-bold text-dark-brown text-3xl lg:text-4xl">
          {title}
        </p>
        <p className="text-gray font-bold mt-4 text-lg">
          <span className="text-dark-brown font-primary font-bold lg:text-lg">
            {desc.title}
          </span>
          <br />
          {desc.desc}
        </p>
        <ul className="flex flex-col gap-2 list-disc list-inside mt-4">
          {steps.map((step, index) => (
            <li key={index} className="text-gray text-lg">
              <span className="font-bold text-dark-brown font-primary">
                {step.sub}
              </span>
              <br /> {step.desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProcessCard;
