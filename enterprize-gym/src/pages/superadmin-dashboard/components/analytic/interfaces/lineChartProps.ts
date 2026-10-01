export interface LineChartSeries<TData> {
  key: keyof TData;
  lineClass: string;
  pointClass: string;
}

export interface LineChartProps<TData extends object> {
  data: TData[];
  series: LineChartSeries<TData>[];
}