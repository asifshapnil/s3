import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { DeviceDTO } from 'src/dto/device.dto';
import { DeviceModel } from 'src/models/device.model';
import { BaseController } from 'src/shared/base-controller';
import { DeviceService } from './device.service';

@Controller('device')
export class DeviceController extends BaseController {
  constructor(public deviceService: DeviceService) {
    super(deviceService);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async postDevice(@Body() requestData: DeviceDTO): Promise<DeviceModel> {
    return await this.deviceService.insert(requestData);
  }
}
