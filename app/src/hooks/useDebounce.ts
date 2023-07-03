import { useEffect, useState } from 'react';

// https://usehooks-ts.com/react-hook/use-debounce
export const useDebounce = <T>(value: T, delay?: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Usage
// const [value, setValue] = useState<string>('')
// const debouncedValue = useDebounce<string>(value, 500)

// const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//   setValue(event.target.value)
// }

// useEffect(() => {
//   // Do fetch here...
//   // Triggers when "debouncedValue" changes
// }, [debouncedValue])
