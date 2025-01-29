import { useEffect, useState } from "react";

export const useDebounce = (value: string, timeOut: number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handle = setTimeout(() => {
      setDebounceValue(value);
    }, timeOut);

    return () => {
      clearTimeout(handle);
    };
  }, [value, timeOut]);

  return debounceValue;
};
