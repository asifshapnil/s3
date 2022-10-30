import { Test, TestingModule } from '@nestjs/testing';
import { DeviceController } from './device.controller';
import { DeviceService } from './device.service';

describe('Device Controller', () => {
  let controller: DeviceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeviceController],
      providers: [
        {
          provide: "DEVICE-SERVICE",
          useClass: DeviceService
        }
      ]
    }).compile();

    controller = module.get<DeviceController>(DeviceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('postDevice', () => {
    it('should return a successfull response', async() => {
      await controller.postDevice({
          deviceId: "ibm-878A66",
          deviceType: "computer1.0.0",
          deviceName: "VN1-1-3",
          groupId: "847b3b2f1b05dc4",
          dataType: "DATA",
          data: {
              fullPowerMode: true,
              activePowerControl: false,
              firmwareVersion: 1,
              temperature: 21,
              humidity: 53,
              occupancy: false
          },
          timestamp: 1629369697
      });
      expect(controller).toBeDefined();
    });
  })
});
