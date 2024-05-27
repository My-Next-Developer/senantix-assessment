import { useEffect, useMemo, useRef, useState } from "react";
import { Cell, Pie, PieChart } from "recharts";
export type SpeedometerProps = {
  min?: number;
  max?: number;
  label: string;
  unit?: string;
  value: number;
};

export const Speedometer = ({
  min = 0,
  max = 100,
  label,
  unit,
  value,
}: SpeedometerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const height = width ? width / 2 : 0;

  const data = useMemo(
    () => [
      { name: "completed", value: value - min, color: "var(--accent)" },
      { name: "incomplete", value: max - value, color: "var(--border)" },
    ],
    [value, min, max]
  );

  useEffect(() => {
    if (containerRef.current) {
      const { width } = containerRef.current.getBoundingClientRect();
      setWidth(width);
    }
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <PieChart width={width} height={height}>
        <Pie
          cx="50%"
          cy="100%"
          innerRadius={height - 30}
          outerRadius={height - 10}
          data={data}
          dataKey="value"
          nameKey="name"
          startAngle={180}
          endAngle={0}
        >
          {data.map((entry, index) => (
            <Cell key={`key-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 font-semibold">
        {label}: {value}
        {unit}
      </div>
    </div>
  );
};
