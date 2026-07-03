import React from "react";

const NotFoundContact = () => {
  return (
    <>
      <div className="flex h-[70vh] flex-col items-center justify-center gap-4 text-center">
        <div>
          <img
            src="/Contact.png"
            alt="Contact Not Found"
            className="w-32 sm:w-40 md:w-48"
          />
        </div>

        <h3 className="text-xl font-semibold text-white sm:text-2xl">
          Not Found
        </h3>
      </div>
    </>
  );
};

export default NotFoundContact;
