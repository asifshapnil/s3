import { Body, Controller, Get, Post } from '@nestjs/common';
import { DeviceModel } from 'src/models/device.model';
import { BaseController } from 'src/shared/base-controller';
import { DeviceService } from './device.service';

@Controller('device')
export class DeviceController extends BaseController {
  constructor(public deviceService: DeviceService) {
    super(deviceService);
  }

  @Post()
  async postDevice(@Body() requestData: DeviceModel) {
    return await this.deviceService.insert(requestData);
  }
}
