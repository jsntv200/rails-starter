import { useCallback, useState } from 'react';

export function useToggle<T>(valueA: T, valueB: T): [T, () => void] {
  const [value, setValue] = useState(valueA);

  const handleToggle = useCallback(() => {
    setValue(value !== valueA ? valueA : valueB);
  }, [value, valueA, valueB]);

  return [value, handleToggle];
}
