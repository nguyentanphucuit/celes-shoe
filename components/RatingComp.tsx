import { RatingProps } from "@/types";
import { StarIcon } from "@heroicons/react/20/solid";
import React from "react";

const RatingComp = (props: RatingProps) => {
  const _rating = Math.round(props.rating);
  return (
    <div className="flex items-center">
      {props.type === "small" ? (
        <>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {props.rating}
          </span>
          <StarIcon className="w-4 h-4 text-yellow-300 mr-1" />
        </>
      ) : (
        <>
          {Array.from(Array(_rating)).map((r, index) => (
            <div key={index}>
              <StarIcon className="w-4 h-4 text-yellow-300 mr-1" />
            </div>
          ))}
          {Array.from(Array(5 - _rating)).map((r, index) => (
            <div key={index}>
              <StarIcon className="w-4 h-4 text-gray-200 dark:text-gray-600 mr-1" />
            </div>
          ))}
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {props.rating}
          </span>
        </>
      )}
    </div>
  );
};

export default RatingComp;
