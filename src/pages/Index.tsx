import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { NumberDisplay } from "@/components/NumberDisplay";
import { RangeInput } from "@/components/RangeInput";
import { History } from "@/components/History";

const Index = () => {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [currentNumber, setCurrentNumber] = useState<number | null>(null);
  const [history, setHistory] = useState<number[]>([]);
  const { toast } = useToast();

  const generateNumber = () => {
    if (min >= max) {
      toast({
        title: "Invalid range",
        description: "Maximum number must be greater than minimum number",
        variant: "destructive",
      });
      return;
    }

    const newNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    setCurrentNumber(newNumber);
    setHistory((prev) => [newNumber, ...prev].slice(0, 10));
  };

  const copyToClipboard = () => {
    if (currentNumber !== null) {
      navigator.clipboard.writeText(currentNumber.toString());
      toast({
        title: "Copied to clipboard",
        description: `Number ${currentNumber} has been copied to your clipboard`,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md space-y-8"
      >
        <div className="text-center space-y-2">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-medium tracking-tight"
          >
            Random Number Generator
          </motion.h1>
          <p className="text-sm text-muted-foreground">
            Generate random numbers within your specified range
          </p>
        </div>

        <NumberDisplay number={currentNumber} />

        <div className="space-y-6">
          <RangeInput
            min={min}
            max={max}
            onMinChange={setMin}
            onMaxChange={setMax}
          />

          <div className="flex gap-3">
            <Button
              onClick={generateNumber}
              className="flex-1 generate-button"
              size="lg"
            >
              Generate
            </Button>
            <Button
              onClick={copyToClipboard}
              variant="secondary"
              size="lg"
              disabled={currentNumber === null}
            >
              Copy
            </Button>
          </div>
        </div>

        <History numbers={history} />
      </motion.div>
    </div>
  );
};

export default Index;