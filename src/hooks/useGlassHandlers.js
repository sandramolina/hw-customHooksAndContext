import { useState } from 'react';

export const useGlassHandlers = () => {
  const [glasses, setGlasses] = useState(0);
  const handleUpdate = (updateAmount) => {
    if (glasses + updateAmount < 0) {
      setGlasses(0);
    } else {
      setGlasses(parseInt(glasses + updateAmount));
    }
  };

  const handleEmpty = () => {
    setGlasses(0);
  };
  return { glasses, handleUpdate, handleEmpty };
};
