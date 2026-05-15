import {
  View,
  Text,
} from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
  interpolate,
} from 'react-native-reanimated';

import { useEffect } from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';

import GlassCard from '@/components/shared/GlassCard';

import {
  useCarStore,
} from '@/store/useCarStore';

import {
  colors,
  spacing,
  typography,
  radius,
} from '@/theme';

export default function EnergyFlowCard() {
  const {
    charging,

    powerOutput,

    driveMode,
  } = useCarStore();

  const progress =
    useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, {
        duration: 1800,

        easing: Easing.linear,
      }),

      -1,

      false
    );
  }, []);

  const animatedStyle =
    useAnimatedStyle(() => ({
      transform: [
        {
          translateX:
            interpolate(
              progress.value,
              [0, 1],
              [0, 210]
            ),
        },
      ],

      opacity:
        interpolate(
          progress.value,
          [0, 0.5, 1],
          [0, 1, 0]
        ),
    }));

  const flowColor =
    charging
      ? colors.accentGreen
      : driveMode === 'Sport'
      ? '#FF7849'
      : colors.accentBlue;

  return (
    <GlassCard>
      <Text
        style={[
          typography.metricMd,
          {
            color:
              colors.textPrimary,
          },
        ]}
      >
        Energy Flow
      </Text>

      <Text
        style={[
          typography.body,
          {
            color:
              colors.textSecondary,

            marginTop:
              spacing.xs,
          },
        ]}
      >
        Live drivetrain telemetry
      </Text>

      <View
        style={{
          marginTop: spacing.xxl,

          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: '100%',

            flexDirection: 'row',

            justifyContent:
              'space-between',

            alignItems: 'center',
          }}
        >
          <View
            style={{
              alignItems: 'center',
            }}
          >
            <View
              style={{
                width: 70,
                height: 70,

                borderRadius:
                  radius.full,

                backgroundColor:
                  `${flowColor}22`,

                justifyContent:
                  'center',

                alignItems: 'center',
              }}
            >
              <Ionicons
                name="battery-charging"
                size={34}
                color={flowColor}
              />
            </View>

            <Text
              style={[
                typography.caption,
                {
                  color:
                    colors.textMuted,

                  marginTop:
                    spacing.sm,
                },
              ]}
            >
              Battery
            </Text>
          </View>

          <View
            style={{
              flex: 1,

              height: 4,

              marginHorizontal:
                spacing.lg,

              backgroundColor:
                'rgba(255,255,255,0.06)',

              borderRadius: 999,

              overflow: 'hidden',

              justifyContent:
                'center',
            }}
          >
            <Animated.View
              style={[
                {
                  width: 48,
                  height: 4,

                  borderRadius: 999,

                  backgroundColor:
                    flowColor,
                },

                animatedStyle,
              ]}
            />
          </View>

          <View
            style={{
              alignItems: 'center',
            }}
          >
            <View
              style={{
                width: 70,
                height: 70,

                borderRadius:
                  radius.full,

                backgroundColor:
                  `${flowColor}22`,

                justifyContent:
                  'center',

                alignItems: 'center',
              }}
            >
              <Ionicons
                name={
                  charging
                    ? 'flash'
                    : 'car-sport'
                }
                size={34}
                color={flowColor}
              />
            </View>

            <Text
              style={[
                typography.caption,
                {
                  color:
                    colors.textMuted,

                  marginTop:
                    spacing.sm,
                },
              ]}
            >
              {charging
                ? 'Charging'
                : 'Motor'}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          marginTop: spacing.xxl,

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
            Power Transfer
          </Text>

          <Text
            style={[
              typography.bodySemiBold,
              {
                color:
                  colors.textPrimary,

                marginTop: 4,
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
            Direction
          </Text>

          <Text
            style={[
              typography.bodySemiBold,
              {
                color:
                  flowColor,

                marginTop: 4,
              },
            ]}
          >
            {charging
              ? 'Inbound'
              : 'Outbound'}
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
            Drive Mode
          </Text>

          <Text
            style={[
              typography.bodySemiBold,
              {
                color:
                  colors.textPrimary,

                marginTop: 4,
              },
            ]}
          >
            {driveMode}
          </Text>
        </View>
      </View>
    </GlassCard>
  );
}