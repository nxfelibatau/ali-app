import { useEffect, useCallback } from "react";

export const useOutsideClick = (ref, callback) => {
  const handleClickOutside = useCallback(
    (event) => {
      if (ref?.current && !ref.current.contains(event.target)) {
        callback?.(event);
      }
    },
    [ref, callback]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [handleClickOutside]);
};
