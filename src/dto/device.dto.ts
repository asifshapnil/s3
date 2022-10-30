import { Type } from "class-transformer";
import { IsBoolean, IsDefined, IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";


export class DeviceDetailDTO {
    @IsBoolean()
    @IsOptional()
    fullPowerMode?: boolean;

    @IsBoolean()
    @IsOptional()
    activePowerControl?: boolean;

    @IsNumber()
    @IsOptional()
    firmwareVersion?: number;

    @IsNumber()
    @IsNotEmpty()
    temperature?: number;

    @IsNumber()
    @IsNotEmpty()
    humidity?: number;

    @IsNumber()
    @IsOptional()
    version?: number;

    @IsString()
    @IsOptional()
    messageType?: string;

    @IsBoolean()
    @IsNotEmpty()
    occupancy?: boolean;

    @IsNumber()
    @IsOptional()
    stateChanged?: number;
}

export class DeviceDTO {
    @IsString()
    @IsOptional()
    deviceId: string;

    @IsString()
    @IsOptional()
    deviceType: string;

    @IsString()
    @IsOptional()
    deviceName: string;

    @IsString()
    @IsOptional()
    groupId: string;

    @IsString()
    @IsOptional()
    dataType: string;

    @IsNumber()
    @IsOptional()
    timestamp: number;

    @ValidateNested({ each: true })
    @Type(() => DeviceDetailDTO)
    data: DeviceDetailDTO;
}



