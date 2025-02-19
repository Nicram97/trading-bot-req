/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export class GetHistoricalDataDto {
  @IsString()
  @IsNotEmpty()
  symbol: string; // Represents symbol of exchanged pair for exmaple BTCUSDT => BASE|QUOTE => 'WhatWasBought|WithWhatWeBought

  @IsNumber()
  @Min(0)
  startTime: number; // start of time aggregation represented by timestamp in milliseconds

  @IsNumber()
  @Min(0)
  endTime: number; // end time of aggregation represented by timestamp in milliseconds

  @IsNumber()
  @Min(1)
  @Max(1000)
  limit = 500; // how many trades to show default 500, max 1000 has to be positive number
}
