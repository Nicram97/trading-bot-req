export interface AnalyzeResult {
  status: 'INCREASE' | 'DECREASE';
  startTime: number;
  endTime: number;
}
