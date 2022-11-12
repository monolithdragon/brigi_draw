import { useCallback, useState } from 'react';

export const useToggle = (defaultValue?: boolean): [boolean, () => void] => {
  const [value, setValue] = useState(!!defaultValue);

  const toggle = useCallback(() => setValue((prev) => !prev), []);

  return [value, toggle];
};
