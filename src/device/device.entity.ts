import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
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
}
