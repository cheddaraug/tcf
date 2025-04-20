const CompaniesCard = ({ company }) => {
  return (
    <>
      <div className="bg-dark-tan w-fit px-4 py-4 rounded-lg  flex flex-col gap-4">
        <div>{company.icon}</div>
        <div>
          <p className="font-primary font-semibold text-brown text-2xl">
            {company.value}
          </p>
        </div>
      </div>
    </>
  );
};

export default CompaniesCard;
