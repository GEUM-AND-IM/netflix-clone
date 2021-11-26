import { useState } from "react";

const useSlider = () => {
  const [index, setIndex] = useState<number>(0);
  const [leaving, setLeaving] = useState<boolean>(false);

  const offset = 6;

  return {
    index,
    leaving,
    offset,
    setLeaving,
    setIndex,
  };
};

export default useSlider;
