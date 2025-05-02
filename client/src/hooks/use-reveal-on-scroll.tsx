import { useEffect, useRef, useState } from 'react';

interface UseRevealOnScrollOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useRevealOnScroll<T extends HTMLElement>({
  threshold = 0.1,
  rootMargin = '0px'
}: UseRevealOnScrollOptions = {}) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once the element is visible, stop observing it
          observer.unobserve(currentRef);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}
