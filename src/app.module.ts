import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeviceDetail } from './device-detail/device-detail.entity';
import { DeviceDetailModule } from './device-detail/device-detail.module';
import { Device } from './device/device.entity';
import { DeviceModule } from './device/device.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 's3',
      entities: [
        Device,
        DeviceDetail
      ],
      synchronize: true,
    }),
    DeviceModule,
    DeviceDetailModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
