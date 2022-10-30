import { Body, Controller, Get, HttpException, HttpStatus, Logger, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { DeviceDTO } from 'src/dto/device.dto';
import { DeviceModel } from 'src/models/device.model';
import { BaseController } from 'src/shared/base-controller';
import { DeviceService } from './device.service';

@Controller('device')
export class DeviceController extends BaseController {
  logger: Logger;

  constructor(public deviceService: DeviceService) {
    super(deviceService);
    this.logger = new Logger;
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async postDevice(@Body() requestData: DeviceDTO): Promise<DeviceModel> {
    this.logger.log('test log');
    try {
      return await this.deviceService.insert(requestData);      
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Something went wrong with the request',
      }, HttpStatus.FORBIDDEN);
    }
  }
}
