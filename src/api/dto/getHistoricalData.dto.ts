/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class GetHistoricalDataDto {
  @IsString()
  @IsNotEmpty()
  symbol: string;

  @IsNumber()
  @Min(0)
  startTime: number;

  @IsNumber()
  @Min(0)
  stopTime: number;

  @IsNumber()
  @Min(0)
  limit: number;
}
