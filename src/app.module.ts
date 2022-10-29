import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
      ],
      synchronize: true,
    }),
    DeviceModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
