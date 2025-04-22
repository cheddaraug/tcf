import { useEffect } from "react";
import Button from "../components/Button";

const Legal = () => {
  useEffect(() => {
    document.title = "TCF Legal - The Code Factory";
  }, []);
  return (
    <>
      <div>
        <div className="bg-tan h-screen text-center px-6 lg:px-12 flex flex-col  items-center pt-48">
          <p className="font-primary font-bold text-4xl lg:text-6xl text-primary ">
            The Lawyers Are Still Fighting.
          </p>
          <p className="mx-12 font-primary text-dark-brown text-xl mb-12">
            Our legal page is currently undergoing a "slight" rewrite. Something
            about too much sarcasm and not enough compliance. We’ll be back once
            the lawyers calm down.
          </p>
          <Button
            title="Escape the Legal Abyss"
            to={"/"}
            style={{ padding: "", fontSize: "1.3rem" }}
          />
        </div>
      </div>
    </>
  );
};

export default Legal;
