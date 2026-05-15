import {
  View,
  Text,
  Image,
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

import AmbientGlow from '@/components/shared/AmbientGlow';

import GlassCard from '@/components/shared/GlassCard';

import {
  useCarStore,
} from '@/store/useCarStore';

import {
  colors,
  radius,
  spacing,
  typography,
} from '@/theme';

export default function VehicleHero() {
  const {
    vehicleStatus,

    charging,
  } = useCarStore();

  const float =
    useSharedValue(0);

  useEffect(() => {
    float.value = withRepeat(
      withTiming(1, {
        duration: charging
          ? 2600
          : 3400,

        easing: Easing.inOut(
          Easing.ease
        ),
      }),

      -1,

      true
    );
  }, [charging]);

  const animatedStyle =
    useAnimatedStyle(() => ({
      transform: [
        {
          translateY:
            interpolate(
              float.value,
              [0, 1],
              [5, -5]
            ),
        },
      ],
    }));

  const statusColorMap = {
    ready:
      colors.accentGreen,

    charging:
      colors.accentBlue,

    sleeping:
      colors.textMuted,
  };

  const statusLabelMap = {
    ready:
      'Vehicle Ready',

    charging:
      'Charging Active',

    sleeping:
      'Vehicle Sleeping',
  };

  return (
    <View
      style={{
        marginTop: spacing.lg,

        marginBottom:
          spacing.xxl,

        alignItems: 'center',
      }}
    >
      <AmbientGlow
        color={
          statusColorMap[
            vehicleStatus
          ]
        }
        size={
          charging
            ? 220
            : 180
        }
      />

      <Animated.View
        style={animatedStyle}
      >
        <View
          style={{
            width: 320,

            height: 220,

            borderRadius:
              radius.xl,

            overflow: 'hidden',

            justifyContent:
              'center',

            alignItems: 'center',

            backgroundColor:
              'rgba(22,24,33,0.88)',
          }}
        >
          <Image
            source={require('@/assets/images/nexon-ev.png')}
            resizeMode="contain"
            style={{
              width: '92%',

              height: '92%',
            }}
          />
        </View>
      </Animated.View>

      <View
        style={{
          position: 'absolute',

          bottom: -18,
        }}
      >
        <GlassCard>
          <View
            style={{
              flexDirection: 'row',

              alignItems: 'center',
            }}
          >
            <View
              style={{
                width: 10,
                height: 10,

                borderRadius: 999,

                backgroundColor:
                  statusColorMap[
                    vehicleStatus
                  ],

                marginRight:
                  spacing.sm,
              }}
            />

            <Text
              style={[
                typography.bodySemiBold,
                {
                  color:
                    colors.textPrimary,
                },
              ]}
            >
              {
                statusLabelMap[
                  vehicleStatus
                ]
              }
            </Text>
          </View>
        </GlassCard>
      </View>
    </View>
  );
}