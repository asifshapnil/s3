import { Controller, Get } from '@nestjs/common';
import { BaseController } from 'src/shared/base-controller';
import { DeviceService } from './device.service';

@Controller('device')
export class DeviceController extends BaseController {
  constructor(public deviceSaleService: DeviceService) {
    super(deviceSaleService);
  }
}
