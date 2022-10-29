import { Module } from '@nestjs/common';
import { DeviceDetailController } from './device-detail.controller';
import { DeviceDetailService } from './device-detail.service';
import { DeviceDetail } from './device-detail.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DeviceDetail])],
  controllers: [DeviceDetailController],
  providers: [DeviceDetailService],
  exports: [DeviceDetailService]
})
export class DeviceDetailModule {}
