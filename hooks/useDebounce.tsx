import { useEffect, useState } from "react";

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
      setLoading(false);
    }, delay);

    return () => {
      setLoading(true);
      clearTimeout(handler);
    };
  }, [value, delay]);

  return [debouncedValue, loading];
};

export default useDebounce;
