import { useState } from "react";

export default function useToggleValue(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  // Handle Click Toggle Term
  const handleToggleValue = () => {
    setValue(!value);
  };
  return {
    value,
    handleToggleValue,
  };
}
