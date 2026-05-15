import {
  Text,
} from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
} from 'react-native-reanimated';

import {
  useEffect,
} from 'react';

import {
  typography,
  colors,
} from '@/theme';

const AnimatedText =
  Animated.createAnimatedComponent(
    Text
  );

type Props = {
  value: number;

  suffix?: string;

  variant?:
    | 'hero'
    | 'xl'
    | 'lg'
    | 'md';
};

export default function AnimatedMetric({
  value,

  suffix = '',

  variant = 'md',
}: Props) {
  const animated =
    useSharedValue(0);

  useEffect(() => {
    animated.value =
      withTiming(value, {
        duration: 800,
      });
  }, [value]);

  const animatedProps =
    useAnimatedProps(() => ({
      text: `${Math.floor(
        animated.value
      )}${suffix}`,
    })) as any;

  const typographyMap = {
    hero: typography.metricHero,

    xl: typography.metricXL,

    lg: typography.metricLg,

    md: typography.metricMd,
  };

  return (
    <AnimatedText
      animatedProps={
        animatedProps
      }
      style={[
        typographyMap[
          variant
        ],

        {
          color:
            colors.textPrimary,
        },
      ]}
    >
      {value}
      {suffix}
    </AnimatedText>
  );
}