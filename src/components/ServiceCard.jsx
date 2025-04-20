import webDev from "../assets/images/web-dev.png";

const ServiceCard = ({ title, desc, image }) => {
  return (
    <>
      <div className="bg-dark-tan rounded-lg px-6 py-4  flex items-start justify-between flex-col lg:flex-row w-full lg:w-fit gap-4 lg:gap-6 lg:py-6 lg:px-8">
        <img src={image} alt="" className="w-[3rem] lg:w-[5rem]" />
        <div className="lg:w-[24rem]">
          <h3 className="font-bold font-primary lg:text-2xl uppercase text-dark-brown rounded-bl-xl">
            {title}
          </h3>
          <p className="text-brown text-base lg:text-lg font-medium w-fit">
            {desc}
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
