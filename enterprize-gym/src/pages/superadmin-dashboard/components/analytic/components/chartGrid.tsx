import Classes from "../style/analytic.module.css";

interface ChartGridProps {
  width: number;
  height: number;
  horizontalLines?: number;
  verticalLines?: number;
}

export default function ChartGrid({
  width,
  height,
  horizontalLines = 6,
  verticalLines = 6,
}: ChartGridProps) {
  return (
    <>
      {/* Horizontal lines */}
      {Array.from(
        { length: horizontalLines },
        (_, index) => {
          const y =
            4 +
            (index / (horizontalLines - 1)) *
              (height - 8);

          return (
            <line
              key={`horizontal-${index}`}
              x1="4"
              y1={y}
              x2={width - 4}
              y2={y}
              className={Classes.chartGridLine}
            />
          );
        }
      )}

      {/* Vertical lines */}
      {Array.from(
        { length: verticalLines },
        (_, index) => {
          const x =
            4 +
            (index / (verticalLines - 1)) *
              (width - 8);

          return (
            <line
              key={`vertical-${index}`}
              x1={x}
              y1="4"
              x2={x}
              y2={height - 4}
              className={Classes.chartGridLine}
            />
          );
        }
      )}
    </>
  );
}