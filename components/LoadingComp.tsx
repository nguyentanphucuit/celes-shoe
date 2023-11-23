import React from "react";

const LoadingComp = () => {
  return (
    <div className="w-full flex flex-row justify-center">
      <span className=" loading loading-dots loading-lg"></span>
    </div>
  );
};

const LoadingSpinner = () => {
  return (
    <div className="w-full flex flex-row justify-center">
      <span className="loading loading-spinner loading-md"></span>
    </div>
  );
};

export { LoadingComp, LoadingSpinner };
