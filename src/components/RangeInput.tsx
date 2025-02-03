import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface RangeInputProps {
  min: number;
  max: number;
  onMinChange: (value: number) => void;
  onMaxChange: (value: number) => void;
}

export const RangeInput = ({ min, max, onMinChange, onMaxChange }: RangeInputProps) => {
  return (
    <div className="flex gap-4 items-end">
      <div className="flex-1">
        <Label htmlFor="min" className="text-sm text-muted-foreground">
          Minimum
        </Label>
        <Input
          id="min"
          type="number"
          value={min}
          onChange={(e) => onMinChange(parseInt(e.target.value) || 0)}
          className="mt-1.5"
        />
      </div>
      <div className="flex-1">
        <Label htmlFor="max" className="text-sm text-muted-foreground">
          Maximum
        </Label>
        <Input
          id="max"
          type="number"
          value={max}
          onChange={(e) => onMaxChange(parseInt(e.target.value) || 0)}
          className="mt-1.5"
        />
      </div>
    </div>
  );
};