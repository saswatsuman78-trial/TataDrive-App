import { View } from 'react-native';

import ScreenContainer from '@/components/shared/ScreenContainer';

import SectionHeader from '@/components/shared/SectionHeader';

import MetricCard from '@/components/dashboard/MetricCard';

import StatusPill from '@/components/shared/StatusPill';

import BatteryRing from '@/components/dashboard/BatteryRing';

import VehicleHero from '@/components/dashboard/VehicleHero';

import QuickControls from '@/components/dashboard/QuickControls';

import ChargingCard from '@/components/dashboard/ChargingCard';

import DriveModeCard from '@/components/dashboard/DriveModeCard';

import VehicleHealthCard from '@/components/dashboard/VehicleHealthCard';

import TripAnalyticsCard from '@/components/dashboard/TripAnalyticsCard';

import SystemStatusCard from '@/components/dashboard/SystemStatusCard';

import ClimateCard from '@/components/dashboard/ClimateCard';

import EnergyFlowCard from '@/components/dashboard/EnergyFlowCard';

import FadeSlideIn from '@/components/animations/FadeSlideIn';

import useTelemetrySimulation from '@/hooks/useTelemetrySimulation';

import {
  useCarStore,
} from '@/store/useCarStore';

import {
  spacing,
} from '@/theme';

export default function HomeScreen() {
  const {
    battery,

    range,

    connectivity,

    speed,
  } = useCarStore();

  useTelemetrySimulation();

  return (
    <ScreenContainer>
      <View
        style={{
          padding: spacing.lg,

          paddingBottom:
            spacing.xxxxl,
        }}
      >
        <FadeSlideIn delay={0}>
          <SectionHeader
            title="Tata Drive"
            subtitle="Vehicle Overview"
          />
        </FadeSlideIn>

        <FadeSlideIn delay={120}>
          <View
            style={{
              marginTop: spacing.md,
            }}
          >
            <StatusPill
              label={
                connectivity ===
                'connected'
                  ? 'Vehicle Connected'
                  : 'Vehicle Offline'
              }
              type={
                connectivity ===
                'connected'
                  ? 'success'
                  : 'offline'
              }
            />
          </View>
        </FadeSlideIn>

        <FadeSlideIn delay={220}>
          <View
            style={{
              marginTop: spacing.lg,

              alignItems: 'center',
            }}
          >
            <BatteryRing
              value={battery}
            />
          </View>
        </FadeSlideIn>

        <FadeSlideIn delay={320}>
          <VehicleHero />
        </FadeSlideIn>

        <FadeSlideIn delay={420}>
          <QuickControls />
        </FadeSlideIn>

        <FadeSlideIn delay={520}>
          <View
            style={{
              marginTop: spacing.lg,
            }}
          >
            <ChargingCard />
          </View>
        </FadeSlideIn>

        <FadeSlideIn delay={620}>
          <View
            style={{
              marginTop: spacing.lg,
            }}
          >
            <EnergyFlowCard />
          </View>
        </FadeSlideIn>

        <FadeSlideIn delay={720}>
          <View
            style={{
              marginTop: spacing.lg,
            }}
          >
            <DriveModeCard />
          </View>
        </FadeSlideIn>

        <FadeSlideIn delay={820}>
          <View
            style={{
              marginTop: spacing.lg,
            }}
          >
            <ClimateCard />
          </View>
        </FadeSlideIn>

        <FadeSlideIn delay={920}>
          <View
            style={{
              marginTop: spacing.xl,
            }}
          >
            <TripAnalyticsCard />
          </View>
        </FadeSlideIn>

        <FadeSlideIn delay={1020}>
          <View
            style={{
              marginTop: spacing.xl,
            }}
          >
            <VehicleHealthCard />
          </View>
        </FadeSlideIn>

        <FadeSlideIn delay={1120}>
          <View
            style={{
              marginTop: spacing.xl,

              flexDirection: 'row',

              gap: spacing.md,
            }}
          >
            <View style={{ flex: 1 }}>
              <MetricCard
                value={range}
                unit="KM"
                label="Estimated Range"
              />
            </View>

            <View style={{ flex: 1 }}>
              <MetricCard
                value={battery}
                unit="%"
                label="Battery"
              />
            </View>
          </View>
        </FadeSlideIn>

        <FadeSlideIn delay={1220}>
          <View
            style={{
              marginTop: spacing.lg,
            }}
          >
            <MetricCard
              value={speed}
              unit="KM/H"
              label="Current Speed"
            />
          </View>
        </FadeSlideIn>

        <FadeSlideIn delay={1320}>
          <View
            style={{
              marginTop: spacing.xl,
            }}
          >
            <SystemStatusCard />
          </View>
        </FadeSlideIn>
      </View>
    </ScreenContainer>
  );
}