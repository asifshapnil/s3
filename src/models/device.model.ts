
export interface DeviceDetailModel {
    fullPowerMode?: boolean;
    activePowerControl?: boolean;
    firmwareVersion?: number;
    temperature?: number;
    humidity?: number;
    version?: number;
    messageType?: string;
    occupancy?: boolean;
    stateChanged?: number;
}

export interface DeviceModel {
    deviceId: string;
    deviceType: string;
    deviceName: string;
    groupId: string;
    dataType: string;
    data: DeviceDetailModel[];
    timestamp: number;
}

