import { motion } from "framer-motion";
import LogoSieteV from "./LogoSieteV";

export function LogoSpring({ size = 190, className }) {
  return (
    <motion.div
      className={className}
      style={{
        display: "inline-block",
        width: size,
        height: "auto",
        cursor: "pointer",
      }}
      initial={{ scaleY: 1, scaleX: 1 }}
      animate={{
        scaleY: [1, 0.7, 1.1, 0.95, 1],
        scaleX: [1, 1.12, 0.95, 1.03, 1],
        transition: {
          duration: 1.2,
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 12,
          type: "spring",
          stiffness: 300,
        },
      }}
    >
      <LogoSieteV style={{ width: size, height: "auto" }} />
    </motion.div>
  );
}
