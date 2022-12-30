import {
  Controller,
  Get,
  Logger,
  UnsupportedMediaTypeException,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private logger = new Logger(AppController.name)
    
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    this.logger.log(AppController.name);
    throw new UnsupportedMediaTypeException();
  }
}
