import { Injectable } from '@nestjs/common';
import { GetHistoricalDataDto } from '../../api/dto/getHistoricalData.dto';

@Injectable()
export class BinanceService {
  constructor() {}

  getHistoricalData(getHistoricalDataDto: GetHistoricalDataDto) {
    return 'Hello';
  }
}
