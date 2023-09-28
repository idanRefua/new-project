import { useRef } from "react";
import { useInView } from "framer-motion";
export default function RightDivAnimation({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div ref={ref}>
      <div
        className={`${
          isInView ? "animate__animated animate__backInRight" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
