import { useEffect } from 'react';

import {
  useCarStore,
} from '@/store/useCarStore';

export default function useTelemetrySimulation() {
  const {
    battery,

    range,

    charging,

    climateOn,

    driveMode,

    chargeTimeRemaining,

    setBattery,

    setRange,

    setSpeed,

    setPowerOutput,

    setBatteryTemp,

    setVehicleStatus,

    setConnectivity,

    setChargeTimeRemaining,
  } = useCarStore();

  useEffect(() => {
    const interval =
      setInterval(() => {
        if (charging) {
          setVehicleStatus(
            'charging'
          );

          setSpeed(0);

          setPowerOutput(
            Math.floor(
              110 +
                Math.random() *
                  25
            )
          );

          if (battery < 100) {
            setBattery(
              Math.min(
                battery + 1,
                100
              )
            );

            setRange(
              Math.min(
                range + 3,
                520
              )
            );

            const estimatedMinutes =
              Math.max(
                0,
                Math.floor(
                  ((100 -
                    battery) /
                    1.2) *
                    2
                )
              );

            setChargeTimeRemaining(
              estimatedMinutes
            );
          }
        } else {
          setVehicleStatus(
            'ready'
          );

          setChargeTimeRemaining(
            0
          );

          const speedMultiplier =
            driveMode === 'Eco'
              ? 55
              : driveMode ===
                'City'
              ? 85
              : 130;

          setSpeed(
            Math.floor(
              Math.random() *
                speedMultiplier
            )
          );

          const powerMultiplier =
            driveMode === 'Eco'
              ? 28
              : driveMode ===
                'City'
              ? 42
              : 68;

          setPowerOutput(
            Math.floor(
              10 +
                Math.random() *
                  powerMultiplier
            )
          );

          if (battery > 5) {
            const drainRate =
              driveMode === 'Sport'
                ? 2
                : 1;

            setBattery(
              Math.max(
                battery -
                  drainRate,
                5
              )
            );

            setRange(
              Math.max(
                range -
                  (driveMode ===
                  'Sport'
                    ? 5
                    : 2),
                40
              )
            );
          }
        }

        setBatteryTemp(
          climateOn
            ? Math.floor(
                26 +
                  Math.random() *
                    3
              )
            : Math.floor(
                30 +
                  Math.random() *
                    4
              )
        );

        const connectivityChance =
          Math.random();

        if (
          connectivityChance <
          0.92
        ) {
          setConnectivity(
            'connected'
          );
        } else {
          setConnectivity(
            'offline'
          );
        }

        if (battery <= 10) {
          setVehicleStatus(
            'sleeping'
          );
        }
      }, 4000);

    return () =>
      clearInterval(interval);
  }, [
    battery,

    range,

    charging,

    climateOn,

    driveMode,

    chargeTimeRemaining,
  ]);
}