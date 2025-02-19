import { AnalyzeResult } from 'src/types/analyze-result';
import { Trade } from '../types/trade.interface';

/**
 * This strategy represents what kind of "contract" each possible exchange analyzer should follow { if in the future a) multiple strategies were to be included b) new exchanges implemented it would allow them to follow the same path
 * for example if we were to introduce coinbase or other exchange we could access data different way however to calculate profit we would follow strategey implmentation}
 */
export interface ExchangeStrategy {
  execute(trades: Trade[]): Promise<AnalyzeResult>;
}
