import { create } from 'zustand';

type VehicleStatus =
  | 'ready'
  | 'charging'
  | 'sleeping';

type ConnectivityStatus =
  | 'connected'
  | 'offline';

type DriveMode =
  | 'Eco'
  | 'City'
  | 'Sport';

type CarState = {
  locked: boolean;

  charging: boolean;

  battery: number;

  range: number;

  climateOn: boolean;

  vehicleStatus: VehicleStatus;

  connectivity: ConnectivityStatus;

  driveMode: DriveMode;

  speed: number;

  powerOutput: number;

  batteryTemp: number;

  chargeTimeRemaining: number;

  setBattery: (
    value: number
  ) => void;

  setRange: (
    value: number
  ) => void;

  setSpeed: (
    value: number
  ) => void;

  setPowerOutput: (
    value: number
  ) => void;

  setBatteryTemp: (
    value: number
  ) => void;

  setChargeTimeRemaining: (
    value: number
  ) => void;

  cycleDriveMode: () => void;

  toggleLock: () => void;

  toggleClimate: () => void;

  toggleCharging: () => void;

  setVehicleStatus: (
    status: VehicleStatus
  ) => void;

  setConnectivity: (
    status: ConnectivityStatus
  ) => void;
};

export const useCarStore =
  create<CarState>((set) => ({
    locked: true,

    charging: true,

    battery: 78,

    range: 412,

    climateOn: false,

    vehicleStatus: 'charging',

    connectivity: 'connected',

    driveMode: 'Eco',

    speed: 0,

    powerOutput: 122,

    batteryTemp: 31,

    chargeTimeRemaining: 28,

    setBattery: (value) =>
      set(() => ({
        battery: value,
      })),

    setRange: (value) =>
      set(() => ({
        range: value,
      })),

    setSpeed: (value) =>
      set(() => ({
        speed: value,
      })),

    setPowerOutput: (
      value
    ) =>
      set(() => ({
        powerOutput: value,
      })),

    setBatteryTemp: (
      value
    ) =>
      set(() => ({
        batteryTemp: value,
      })),

    setChargeTimeRemaining:
      (value) =>
        set(() => ({
          chargeTimeRemaining:
            value,
        })),

    cycleDriveMode: () =>
      set((state) => ({
        driveMode:
          state.driveMode ===
          'Eco'
            ? 'City'
            : state.driveMode ===
              'City'
            ? 'Sport'
            : 'Eco',
      })),

    toggleLock: () =>
      set((state) => ({
        locked:
          !state.locked,
      })),

    toggleClimate: () =>
      set((state) => ({
        climateOn:
          !state.climateOn,
      })),

    toggleCharging: () =>
      set((state) => ({
        charging:
          !state.charging,

        vehicleStatus:
          !state.charging
            ? 'charging'
            : 'ready',
      })),

    setVehicleStatus: (
      status
    ) =>
      set(() => ({
        vehicleStatus: status,
      })),

    setConnectivity: (
      status
    ) =>
      set(() => ({
        connectivity:
          status,
      })),
  }));