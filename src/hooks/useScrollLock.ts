import { useEffect } from "react";

/**
 * Locks body scroll when `locked` is true.
 * Safely restores overflow on cleanup to prevent conflicts
 * when multiple components (e.g., Navbar + Chat) both need scroll lock.
 */
export const useScrollLock = (locked: boolean) => {
  useEffect(() => {
    if (!locked) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [locked]);
};

export default useScrollLock;
