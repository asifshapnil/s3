import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/base-service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Device } from './device.entity';

@Injectable()
export class DeviceService extends BaseService {
  constructor(
    @InjectRepository(Device) public deviceRepository: Repository<Device>,
  ) {
    super(deviceRepository, ['data']);
  }
  
}
