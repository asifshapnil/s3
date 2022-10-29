import { DeviceDetail } from 'src/device-detail/device-detail.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';

@Entity()
export class Device {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  deviceId: string;

  @Column({nullable:true})
  deviceType: string;

  @Column({nullable:true})
  deviceName: string;

  @Column()
  groupId: string;

  @Column()
  dataType: string; 
  
  @OneToMany((type) => DeviceDetail, (details) => details.device)
  details: Device[];
}
