import useURLParams from "@/hooks/useURLParams";
import useDebounce from "@/hooks/useDebounce";
import { LoadingSpinner } from "./LoadingComp";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SearchBarComp = (props: any) => {
  const { searchQuery, setSearchQuery } = props;
  const [debouncedSearchTerm, loading] = useDebounce(searchQuery, 200) as any;
  const router = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(useSearchParams());

  const handleOnSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedSearchQuery = encodeURI(debouncedSearchTerm);
    if (encodedSearchQuery != "") params.set("q", encodedSearchQuery);
    else params.delete("q");
    params.set("page", "1");
    pathname.includes("search")
      ? router.push(`${pathname}?${params.toString()}`)
      : router.push(`${pathname}/search?q=${encodedSearchQuery}`);
  };
  return (
    <div className="relative ">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <form action="" onSubmit={handleOnSearch}>
        <input
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          id="table-search-users"
          className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search by title, category"
        />
        {loading && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <LoadingSpinner />
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBarComp;
