import {
  View,
  Text,
} from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
} from 'react-native-reanimated';

import { useEffect } from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';

import AnimatedPressable from '@/components/shared/AnimatedPressable';

import {
  useCarStore,
} from '@/store/useCarStore';

import GlassCard from '@/components/shared/GlassCard';

import {
  colors,
  spacing,
  typography,
} from '@/theme';

export default function DriveModeCard() {
  const {
    driveMode,

    cycleDriveMode,
  } = useCarStore();

  const glow =
    useSharedValue(0.85);

  useEffect(() => {
    glow.value = withSequence(
      withTiming(1, {
        duration: 1400,
      }),

      withTiming(0.85, {
        duration: 1400,
      })
    );
  }, [driveMode]);

  const animatedStyle =
    useAnimatedStyle(() => ({
      opacity: glow.value,
    }));

  const modeColorMap = {
    Eco: colors.accentGreen,

    City: colors.accentBlue,

    Sport: '#FF7849',
  };

  const modeIconMap = {
    Eco: 'leaf',

    City: 'navigate',

    Sport: 'flash',
  };

  return (
    <AnimatedPressable
      onPress={cycleDriveMode}
    >
      <GlassCard>
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
                typography.metricLg,
                {
                  color:
                    modeColorMap[
                      driveMode
                    ],

                  marginTop: 6,
                },
              ]}
            >
              {driveMode}
            </Text>

            <Text
              style={[
                typography.body,
                {
                  color:
                    colors.textSecondary,

                  marginTop:
                    spacing.sm,
                },
              ]}
            >
              Adaptive telemetry
              enabled
            </Text>
          </View>

          <Animated.View
            style={animatedStyle}
          >
            <View
              style={{
                width: 72,
                height: 72,

                borderRadius: 999,

                justifyContent:
                  'center',

                alignItems: 'center',

                backgroundColor:
                  `${modeColorMap[driveMode]}22`,
              }}
            >
              <Ionicons
                name={
                  modeIconMap[
                    driveMode
                  ] as any
                }
                size={34}
                color={
                  modeColorMap[
                    driveMode
                  ]
                }
              />
            </View>
          </Animated.View>
        </View>
      </GlassCard>
    </AnimatedPressable>
  );
}