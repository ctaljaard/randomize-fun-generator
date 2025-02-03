import { motion } from "framer-motion";

interface HistoryProps {
  numbers: number[];
}

export const History = ({ numbers }: HistoryProps) => {
  if (numbers.length === 0) return null;

  return (
    <div className="mt-8">
      <h3 className="text-sm font-medium text-muted-foreground mb-3">History</h3>
      <div className="flex flex-wrap gap-2">
        {numbers.map((number, index) => (
          <motion.div
            key={`${number}-${index}`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="px-3 py-1.5 rounded-full bg-secondary text-sm"
          >
            {number}
          </motion.div>
        ))}
      </div>
    </div>
  );
};