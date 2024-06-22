import React, { useState, useEffect, useRef } from "react";

const TransFormImage = ({ children, threshold = 0 }) => {
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const shouldBeVisible = rect.top >= threshold;
        setIsVisible(shouldBeVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateX(0px) rotate(-20deg) translateZ(0)"
          : "translateX(0px) rotate(20deg) translateZ(0)",

        transition: "opacity 0.3s, transform 0.3s",
      }}
    >
      {children}
    </div>
  );
};

export default TransFormImage;
