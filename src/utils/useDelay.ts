import { useEffect } from "react";

export function useDelay(delay: number, callback: () => void) {
  useEffect(() => {
    const timeoutId = setTimeout(callback, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [delay, callback]);
}
