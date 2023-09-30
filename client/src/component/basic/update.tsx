import { useState, useEffect } from "react";

const Update = () => {
  const [isPopoverOpen, setPopoverOpen] = useState(true);

  useEffect(() => {
    if (isPopoverOpen) {
      const timeout = setTimeout(() => {
        setPopoverOpen(false);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [isPopoverOpen]);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 transform transition-transform ${
        isPopoverOpen
          ? "translate-y-0 duration-300 ease-in"
          : "translate-y-full duration-300 ease-out"
      }`}
    >
      <div
        className="bg-green-200 p-4 rounded-lg shadow-lg mx-auto sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4"
      >
        <h3 className="text-lg font-semibold text-center">Updated</h3>
      </div>
    </div>
  );
};

export default Update;
