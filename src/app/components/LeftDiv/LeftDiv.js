import { useRef } from "react";
import { useInView } from "framer-motion";

export default function LeftDiv({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div ref={ref}>
      <div
        className={`${isInView ? "animate__animated animate__backInLeft" : ""}`}
      >
        {children}
      </div>
    </div>
  );
}
