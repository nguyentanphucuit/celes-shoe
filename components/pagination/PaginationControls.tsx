import React, { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PaginationControlsProps } from "@/types";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { classNames } from "@/constants/common";
import { ITEMS_PER_PAGE } from "@/constants";

const PaginationControls = ({
  hasNextPage,
  hasPreviousPage,
  totalPages,
  totalResults,
  startIndex,
}: PaginationControlsProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const current_page = +(searchParams?.get("page") ?? 1);
  const per_page = +(searchParams?.get("per_page") ?? ITEMS_PER_PAGE);

  const params = new URLSearchParams(searchParams);
  params.set("per_page", per_page.toString());

  const handleSelectedPage = (selected_page: number) => {
    params.set("page", selected_page.toString());
    router.push(`${pathname}?${params.toString()}`);
  };
  const handlePrevPage = () => {
    params.set("page", (current_page - 1).toString());
    router.push(`${pathname}?${params.toString()}`);
  };
  const handleNextPage = () => {
    params.set("page", (current_page + 1).toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 disabled:opacity-25"
          onClick={handlePrevPage}
          disabled={!hasPreviousPage}>
          Previous
        </button>
        <button
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 disabled:opacity-25"
          onClick={handleNextPage}
          disabled={!hasNextPage}>
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing{" "}
            <span className="font-medium">
              {startIndex + (totalResults == 0 ? 0 : 1)}
            </span>{" "}
            to{" "}
            <span className="font-medium">
              {Math.min(current_page * per_page, totalResults)}
            </span>{" "}
            of <span className="font-medium">{totalResults}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination">
            <button
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-25"
              onClick={handlePrevPage}
              disabled={!hasPreviousPage}>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            {/* Current: "z-10 bg-primary text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary", 
            Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => handleSelectedPage(i + 1)}
                className={classNames(
                  "relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold",
                  i + 1 === current_page
                    ? "z-10 bg-primary text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
                )}>
                {i + 1}
              </button>
            ))}

            <button
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-25"
              onClick={handleNextPage}
              disabled={!hasNextPage}>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PaginationControls;
