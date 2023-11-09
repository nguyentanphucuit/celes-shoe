import { usePathname, useRouter, useSearchParams } from "next/navigation";

const useURLParams = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  return [router, pathname, searchParams];
};

export default useURLParams;
