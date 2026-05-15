import { View } from 'react-native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
  interpolateColor,
} from 'react-native-reanimated';

import {
  useEffect,
} from 'react';

import {
  useCarStore,
} from '@/store/useCarStore';

export default function DashboardBackground() {
  const {
    charging,

    driveMode,

    battery,
  } = useCarStore();

  const animation =
    useSharedValue(0);

  useEffect(() => {
    animation.value =
      withRepeat(
        withTiming(1, {
          duration: charging
            ? 6000
            : 9000,

          easing:
            Easing.inOut(
              Easing.ease
            ),
        }),

        -1,

        true
      );
  }, [charging]);

  const topGlowStyle =
    useAnimatedStyle(() => {
      const backgroundColor =
        interpolateColor(
          animation.value,

          [0, 1],

          driveMode ===
            'Sport'
            ? [
                'rgba(255,90,60,0.16)',
                'rgba(255,120,80,0.08)',
              ]
            : driveMode ===
              'Eco'
            ? [
                'rgba(72,255,163,0.12)',
                'rgba(72,255,163,0.04)',
              ]
            : [
                'rgba(59,139,255,0.14)',
                'rgba(59,139,255,0.05)',
              ]
        );

      return {
        backgroundColor,
      };
    });

  const bottomGlowStyle =
    useAnimatedStyle(() => {
      const backgroundColor =
        interpolateColor(
          animation.value,

          [0, 1],

          battery < 25
            ? [
                'rgba(255,82,82,0.10)',
                'rgba(255,82,82,0.03)',
              ]
            : [
                'rgba(255,255,255,0.03)',
                'rgba(255,255,255,0.01)',
              ]
        );

      return {
        backgroundColor,
      };
    });

  return (
    <>
      <Animated.View
        style={[
          {
            position:
              'absolute',

            top: -120,

            left: -80,

            width: 320,

            height: 320,

            borderRadius: 999,

            opacity: 1,

            filter:
              'blur(120px)',
          },

          topGlowStyle,
        ]}
      />

      <Animated.View
        style={[
          {
            position:
              'absolute',

            bottom: -120,

            right: -80,

            width: 260,

            height: 260,

            borderRadius: 999,

            opacity: 0.8,

            filter:
              'blur(100px)',
          },

          bottomGlowStyle,
        ]}
      />
    </>
  );
}