import React, { useEffect } from "react";
import Button from "../components/Button";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 | This Wasn’t Supposed to Happen - The Code Factory";
  }, []);

  return (
    <>
      <div className="bg-tan h-screen text-center px-6 lg:px-12 flex flex-col  items-center pt-48">
        <p className="font-primary font-bold text-4xl lg:text-6xl text-primary ">
          You found the gap in our perfection.
        </p>
        <p className="mx-12 font-primary text-dark-brown text-xl mb-12">
          It’s like a developer totally forgot to make this. We’ll add it to the
          growing list of regrets.
        </p>
        <Button
          title="Abort Mission"
          to={"/"}
          style={{ padding: "", fontSize: "1.3rem" }}
        />
      </div>
    </>
  );
};

export default NotFound;
