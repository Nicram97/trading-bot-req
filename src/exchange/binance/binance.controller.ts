import { Controller, Get } from '@nestjs/common';
import { BinanceService } from './binance.service';

@Controller('binance')
export class BinanceController {
  constructor(private binanceService: BinanceService) {}

  @Get('hello')
  getHello() {
    return this.binanceService.getHistoricalData();
  }
}
