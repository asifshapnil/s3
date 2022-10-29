import { Device } from 'src/device/device.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Double,
  ManyToOne,
} from 'typeorm';

@Entity()
export class DeviceDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullPowerMode: Boolean;

  @Column({nullable:true})
  activePowerControl: Boolean;

  @Column({nullable:true})
  firmwareVersion: Double;

  @Column()
  temperature: Double;

  @Column()
  humidity: Double;  

  @Column()
  version: Double;  

  @Column()
  messageType: String;  

  @Column()
  occupancy: Boolean;  

  @Column()
  stateChanged: Number;  

  @ManyToOne((type) => Device, (device) => device.details)
  device: Device;
}
