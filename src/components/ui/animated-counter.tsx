"use client";

import { useEffect, useState, useRef } from "react";

type AnimatedCounterProps = {
  to: number;
  duration?: number;
};

const AnimatedCounter = ({ to, duration = 1.5 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    const Easing = (t: number) => 1 - Math.pow(1 - t, 3); // easeOutCubic
    const start = 0;
    const end = to;
    const startTime = Date.now();

    const frame = () => {
      const now = Date.now();
      const time = Math.min(1, (now - startTime) / (duration * 1000));
      const eased = Easing(time);
      
      const newCount = Math.round(start + (end - start) * eased);
      setCount(newCount);
      
      if (time < 1) {
        requestAnimationFrame(frame);
      }
    };
    
    requestAnimationFrame(frame);
  }, [to, duration, isInView]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

const useInView = (ref: React.RefObject<HTMLElement>) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if(ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isInView;
};

export default AnimatedCounter;
