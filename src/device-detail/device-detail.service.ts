import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/base-service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeviceDetail } from './device-detail.entity';

@Injectable()
export class DeviceDetailService extends BaseService {
  constructor(
    @InjectRepository(DeviceDetail) public DeviceDetailRepository: Repository<DeviceDetail>,
  ) {
    super(DeviceDetailRepository, []);
  }
  
}
