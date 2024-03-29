import { debounce } from "lodash";
import { useState } from "react";

export default function useOnChange(time) {
  const [value, setValue] = useState("");

  const handleChangeValue = debounce((e) => {
    setValue(e.target.value);
  }, time);

  return [value, handleChangeValue];
}
