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
} from 'react-native-reanimated';

import { useEffect } from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';

import GlassCard from '@/components/shared/GlassCard';

import AnimatedPressable from '@/components/shared/AnimatedPressable';

import {
  useCarStore,
} from '@/store/useCarStore';

import {
  colors,
  spacing,
  typography,
  radius,
} from '@/theme';

export default function ClimateCard() {
  const {
    climateOn,

    batteryTemp,

    toggleClimate,
  } = useCarStore();

  const pulse =
    useSharedValue(0.85);

  useEffect(() => {
    if (climateOn) {
      pulse.value = withRepeat(
        withTiming(1, {
          duration: 1800,

          easing:
            Easing.inOut(
              Easing.ease
            ),
        }),

        -1,

        true
      );
    }
  }, [climateOn]);

  const animatedStyle =
    useAnimatedStyle(() => ({
      opacity: climateOn
        ? pulse.value
        : 1,
    }));

  return (
    <AnimatedPressable
      onPress={toggleClimate}
    >
      <GlassCard>
        <View
          style={{
            flexDirection: 'row',

            justifyContent:
              'space-between',

            alignItems: 'center',
          }}
        >
          <View>
            <Text
              style={[
                typography.bodySemiBold,
                {
                  color: climateOn
                    ? colors.accentBlue
                    : colors.textMuted,
                },
              ]}
            >
              Climate Control
            </Text>

            <Text
              style={[
                typography.metricLg,
                {
                  color: climateOn
                    ? colors.accentBlue
                    : colors.textPrimary,

                  marginTop: 10,
                },
              ]}
            >
              {climateOn
                ? 'Cooling'
                : 'Idle'}
            </Text>

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
              Cabin optimized at{' '}
              {batteryTemp}°C
            </Text>
          </View>

          <Animated.View
            style={animatedStyle}
          >
            <View
              style={{
                width: 74,
                height: 74,

                borderRadius:
                  radius.full,

                justifyContent:
                  'center',

                alignItems: 'center',

                backgroundColor:
                  climateOn
                    ? 'rgba(59,139,255,0.14)'
                    : 'rgba(255,255,255,0.05)',
              }}
            >
              <Ionicons
                name="snow"
                size={30}
                color={
                  climateOn
                    ? colors.accentBlue
                    : colors.textMuted
                }
              />
            </View>
          </Animated.View>
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
              Fan Speed
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
              {climateOn
                ? 'Level 3'
                : 'Off'}
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
              Air Quality
            </Text>

            <Text
              style={[
                typography.bodySemiBold,
                {
                  color:
                    colors.accentGreen,

                  marginTop: 6,
                },
              ]}
            >
              Excellent
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
              Cabin Target
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
              22°C
            </Text>
          </View>
        </View>
      </GlassCard>
    </AnimatedPressable>
  );
}