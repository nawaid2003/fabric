import React, { useState, useEffect, useRef } from "react";

const ScrollVisibility = ({ children, threshold = 0.8}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 2s" }}
    >
      {children}
    </div>
  );
};

export default ScrollVisibility;
