import React, { useEffect, useRef } from "react";

export default function Observer({ setActiveSection, children }) {
  const ref = useRef(null);

  const activeSection = (entries) => {
    if (entries[0].isIntersecting) {
      setActiveSection(entries[0].target.children[0].id);
    }
  };

  const options = { threshold: 0.3 };

  useEffect(() => {
    const observer = new IntersectionObserver(activeSection, options);
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return <div ref={ref}>{children}</div>;
}
