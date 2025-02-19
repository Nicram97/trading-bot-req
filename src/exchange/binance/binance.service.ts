import { Injectable } from '@nestjs/common';

@Injectable()
export class BinanceService {
  constructor() {}

  getHistoricalData() {
    return 'Hello';
  }
}
