import { View, Pressable } from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

import {
  Canvas,
  Circle,
  BlurMask,
} from '@shopify/react-native-skia';

import { colors } from '@/theme';

export default function RenderingTestScreen() {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.bgPrimary,
      }}
    >
      <Pressable
        onPressIn={() => {
          scale.value = withSpring(0.92);
        }}
        onPressOut={() => {
          scale.value = withSpring(1);
        }}
      >
        <Animated.View
          style={[
            {
              width: 140,
              height: 140,
              borderRadius: 32,
              backgroundColor: colors.accentOrange,
            },

            animatedStyle,
          ]}
        />
      </Pressable>

      <Canvas
        style={{
          width: 220,
          height: 220,
          marginTop: 40,
        }}
      >
        <Circle
          cx={110}
          cy={110}
          r={60}
          color={colors.accentBlue}
        >
          <BlurMask
            blur={20}
            style="solid"
          />
        </Circle>
      </Canvas>
    </View>
  );
}