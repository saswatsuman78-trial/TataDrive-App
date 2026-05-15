import {
  useEffect,
} from 'react';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  Easing,
} from 'react-native-reanimated';

type Props = {
  children: React.ReactNode;

  delay?: number;
};

export default function FadeSlideIn({
  children,
  delay = 0,
}: Props) {
  const opacity =
    useSharedValue(0);

  const translateY =
    useSharedValue(24);

  useEffect(() => {
    opacity.value = withDelay(
      delay,

      withTiming(1, {
        duration: 700,

        easing: Easing.out(
          Easing.cubic
        ),
      })
    );

    translateY.value = withDelay(
      delay,

      withTiming(0, {
        duration: 700,

        easing: Easing.out(
          Easing.cubic
        ),
      })
    );
  }, []);

  const animatedStyle =
    useAnimatedStyle(() => ({
      opacity: opacity.value,

      transform: [
        {
          translateY:
            translateY.value,
        },
      ],
    }));

  return (
    <Animated.View
      style={animatedStyle}
    >
      {children}
    </Animated.View>
  );
}