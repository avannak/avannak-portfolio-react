declare module 'react-intersection-observer' {
    import { RefObject } from 'react';
  
    interface InViewProps {
      threshold?: number | number[];
      root?: Element | null;
      rootMargin?: string;
      triggerOnce?: boolean;
    }
  
    export interface IntersectionObserverEntry {
      readonly intersectionRatio: number;
      readonly isIntersecting: boolean;
      readonly rootBounds: DOMRect | null;
      readonly target: Element;
      readonly time: number;
    }
  
    export interface IntersectionObserver {
      readonly thresholds: ReadonlyArray<number>;
      readonly root: Element | null;
      readonly rootMargin: string;
      readonly thresholds: ReadonlyArray<number>;
      readonly disconnect: () => void;
      readonly observe: (target: Element) => void;
      readonly unobserve: (target: Element) => void;
    }
  
    export function useInView(options?: InViewProps): [RefObject<Element>, boolean, IntersectionObserverEntry | undefined];
  }