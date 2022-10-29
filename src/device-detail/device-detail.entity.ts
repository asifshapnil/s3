import { Device } from 'src/device/device.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';

@Entity()
export class DeviceDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullPowerMode: boolean;

  @Column({nullable:true})
  activePowerControl: boolean;

  @Column({nullable:true})
  firmwareVersion: number;

  @Column({nullable:true})
  temperature: number;

  @Column({nullable:true})
  humidity: number;  

  @Column({nullable:true})
  version: number;  

  @Column({nullable:true})
  messageType: string;  

  @Column({nullable:true})
  occupancy: boolean;  

  @Column({nullable:true})
  stateChanged: number;  

  @ManyToOne(() => Device, (device) => device.details)
  device: Device;
}
