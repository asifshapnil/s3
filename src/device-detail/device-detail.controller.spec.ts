import { Test, TestingModule } from '@nestjs/testing';
import { DeviceDetailController } from './device-detail.controller';

describe('Device Detail Controller', () => {
  let controller: DeviceDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeviceDetailController],
    }).compile();

    controller = module.get<DeviceDetailController>(DeviceDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
