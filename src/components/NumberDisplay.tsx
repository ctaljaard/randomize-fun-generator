import { motion } from "framer-motion";

interface NumberDisplayProps {
  number: number | null;
}

export const NumberDisplay = ({ number }: NumberDisplayProps) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="w-full p-8 rounded-2xl bg-secondary/50 backdrop-blur-sm"
    >
      <motion.span
        key={number}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-6xl font-light tracking-tight"
      >
        {number === null ? "—" : number}
      </motion.span>
    </motion.div>
  );
};