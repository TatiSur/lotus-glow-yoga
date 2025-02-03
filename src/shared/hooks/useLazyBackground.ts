import { useCallback, useEffect, useRef, useState } from 'react';

export const useLazyBackground = () => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [loaded, setLoaded] = useState(false);

  const handleIntersect = useCallback(() => setLoaded(true), []);

  useEffect(() => {
    if (!elementRef.current || loaded) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          handleIntersect();
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [loaded]);

  return { ref: elementRef, loaded };
};
