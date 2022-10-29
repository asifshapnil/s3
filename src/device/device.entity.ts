import { DeviceDetail } from 'src/device-detail/device-detail.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Device {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  deviceId: string;

  @Column({ nullable: true })
  deviceType: string;

  @Column({ nullable: true })
  deviceName: string;

  @Column({ nullable: true })
  groupId: string;

  @Column({ nullable: true })
  dataType: string;

  @Column({ nullable: true })
  timestamp: number;

  @OneToOne(() => DeviceDetail, {cascade: true, eager: true})
  @JoinColumn()
  data: DeviceDetail
}
