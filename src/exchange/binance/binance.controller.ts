import { Body, Controller, Get } from '@nestjs/common';
import { BinanceService } from './binance.service';
import { GetHistoricalDataDto } from '../../api/dto/getHistoricalData.dto';

@Controller('binance')
export class BinanceController {
  constructor(private binanceService: BinanceService) {}

  @Get('getTrades')
  getHello(@Body() getHistoricalDataDto: GetHistoricalDataDto) {
    return this.binanceService.getHistoricalData(getHistoricalDataDto);
  }
}
