import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { GetHistoricalDataDto } from '../../api/dto/getHistoricalData.dto';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { Config } from '../../types/config.interface';
import axios from 'axios';
import * as QueryString from 'node:querystring';
import { Trade } from '../../types/trade.interface';

@Injectable()
export class BinanceService {
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService<Config>,
  ) {}

  /**
   * Call binance API to extract historical trades for given symbol in specific time from start to end
   * @param getHistoricalDataDto : GetHistoricalDataDto - object representing data required for Binance Api to ask for proper resources
   * @returns  - Array of trades
   */
  async getHistoricalData(getHistoricalDataDto: GetHistoricalDataDto) {
    const binanceApi = this.configService.get<string>('BINANCE_API_URL', {
      infer: true,
    });

    if (binanceApi) {
      try {
        const binanceEndpointUrl = `${binanceApi}/aggTrades?${QueryString.encode(
          { ...getHistoricalDataDto },
        )}`;
        const historicalDataReq =
          await this.httpService.axiosRef.get<Trade>(binanceEndpointUrl);

        return historicalDataReq.data;
      } catch (e) {
        if (axios.isAxiosError(e)) {
          console.error(e.message);
          throw e;
        }
        throw new InternalServerErrorException(e);
      }
    }
    throw new NotFoundException(
      'Missing configuration, ensure to provide .env file with proper data',
    );
  }
}
