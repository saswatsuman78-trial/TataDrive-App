import {
  View,
  Text,
} from 'react-native';

import { useEffect } from 'react';

import {
  Canvas,
  Circle,
  BlurMask,
} from '@shopify/react-native-skia';

import Ionicons from '@expo/vector-icons/Ionicons';

import Animated, {
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';

import GlassCard from '@/components/shared/GlassCard';

import AnimatedMetric from './AnimatedMetric';

import {
  useCarStore,
} from '@/store/useCarStore';

import {
  colors,
  spacing,
  typography,
} from '@/theme';

export default function ChargingCard() {
  const pulse =
    useSharedValue(0);

  const {
    charging,

    powerOutput,

    batteryTemp,

    chargeTimeRemaining,
  } = useCarStore();

  useEffect(() => {
    pulse.value = withRepeat(
      withTiming(1, {
        duration: 2200,

        easing: Easing.inOut(
          Easing.ease
        ),
      }),

      -1,

      true
    );
  }, []);

  const energyRings = [1, 2];

  return (
    <GlassCard>
      <View
        style={{
          overflow: 'hidden',
        }}
      >
        <View
          style={{
            flexDirection: 'row',

            alignItems: 'center',

            justifyContent:
              'space-between',
          }}
        >
          <View>
            <Text
              style={[
                typography.bodySemiBold,
                {
                  color: charging
                    ? colors.accentGreen
                    : colors.textMuted,
                },
              ]}
            >
              {charging
                ? 'Charging Active'
                : 'Vehicle Active'}
            </Text>

            <View
              style={{
                marginTop:
                  spacing.md,

                flexDirection: 'row',

                alignItems:
                  'flex-end',
              }}
            >
              <AnimatedMetric
                value={
                  powerOutput
                }
                suffix="kW"
                variant="xl"
              />
            </View>

            <Text
              style={[
                typography.body,
                {
                  color:
                    colors.textSecondary,

                  marginTop:
                    spacing.md,
                },
              ]}
            >
              {charging
                ? `${chargeTimeRemaining} mins until 100%`
                : 'Realtime Energy Usage'}
            </Text>
          </View>

          <View
            style={{
              width: 100,
              height: 100,

              justifyContent:
                'center',

              alignItems: 'center',
            }}
          >
            <Canvas
              style={{
                width: 100,
                height: 100,

                position:
                  'absolute',
              }}
            >
              {energyRings.map(
                (ring) => (
                  <Circle
                    key={ring}
                    cx={50}
                    cy={50}
                    r={
                      18 +
                      ring * 10
                    }
                    color={
                      charging
                        ? 'rgba(72,255,163,0.08)'
                        : 'rgba(59,139,255,0.08)'
                    }
                  >
                    <BlurMask
                      blur={8}
                      style="solid"
                    />
                  </Circle>
                )
              )}

              <Circle
                cx={50}
                cy={50}
                r={18}
                color={
                  charging
                    ? colors.accentGreen
                    : colors.accentBlue
                }
              >
                <BlurMask
                  blur={18}
                  style="solid"
                />
              </Circle>
            </Canvas>

            <Ionicons
              name={
                charging
                  ? 'flash'
                  : 'speedometer'
              }
              size={30}
              color={
                charging
                  ? colors.accentGreen
                  : colors.accentBlue
              }
            />
          </View>
        </View>

        <View
          style={{
            marginTop: spacing.xl,

            paddingTop:
              spacing.lg,

            borderTopWidth: 1,

            borderTopColor:
              'rgba(255,255,255,0.06)',

            flexDirection: 'row',

            justifyContent:
              'space-between',
          }}
        >
          <View>
            <Text
              style={[
                typography.caption,
                {
                  color:
                    colors.textMuted,
                },
              ]}
            >
              Current
            </Text>

            <Text
              style={[
                typography.bodySemiBold,
                {
                  color:
                    colors.textPrimary,

                  marginTop: 6,
                },
              ]}
            >
              {powerOutput} kW
            </Text>
          </View>

          <View>
            <Text
              style={[
                typography.caption,
                {
                  color:
                    colors.textMuted,
                },
              ]}
            >
              Battery Temp
            </Text>

            <Text
              style={[
                typography.bodySemiBold,
                {
                  color:
                    colors.textPrimary,

                  marginTop: 6,
                },
              ]}
            >
              {batteryTemp}°C
            </Text>
          </View>

          <View>
            <Text
              style={[
                typography.caption,
                {
                  color:
                    colors.textMuted,
                },
              ]}
            >
              Charger
            </Text>

            <Text
              style={[
                typography.bodySemiBold,
                {
                  color:
                    colors.textPrimary,

                  marginTop: 6,
                },
              ]}
            >
              {charging
                ? 'DC Fast'
                : 'Driving'}
            </Text>
          </View>
        </View>
      </View>
    </GlassCard>
  );
}