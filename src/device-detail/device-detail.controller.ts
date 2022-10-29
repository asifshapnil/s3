import { Controller, Get } from '@nestjs/common';
import { BaseController } from 'src/shared/base-controller';
import { DeviceDetailService } from './device-detail.service';

@Controller('device-detail')
export class DeviceDetailController extends BaseController {
  constructor(public deviceDetailService: DeviceDetailService) {
    super(deviceDetailService);
  }
}
