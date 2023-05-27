import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  // get value from local storage by key
  const item = window.localStorage.getItem(key);

  const [storedValue, setStoredValue] = useState(item ? JSON.parse(item) : initialValue);

  const setValue = (value) => {
    // save state
    setStoredValue(value);

    // save to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
}
