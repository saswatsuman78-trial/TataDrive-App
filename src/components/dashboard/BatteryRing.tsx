import {
  View,
  Text,
} from 'react-native';

import {
  Canvas,
  Circle,
  SweepGradient,
  vec,
  BlurMask,
} from '@shopify/react-native-skia';

import AnimatedMetric from './AnimatedMetric';

import {
  colors,
  typography,
} from '@/theme';

export default function BatteryRing({
  value,
}: {
  value: number;
}) {
  const size = 220;

  const strokeWidth = 16;

  const radius =
    (size - strokeWidth) / 2;

  const cx = size / 2;

  const cy = size / 2;

  const glowColor =
    value > 60
      ? colors.accentBlue
      : value > 25
      ? '#FFB84D'
      : '#FF5252';

  return (
    <View
      style={{
        width: size,
        height: size,

        justifyContent:
          'center',

        alignItems: 'center',
      }}
    >
      <Canvas
        style={{
          width: size,
          height: size,

          position: 'absolute',
        }}
      >
        <Circle
          cx={cx}
          cy={cy}
          r={radius}
          style="stroke"
          strokeWidth={
            strokeWidth
          }
          color="rgba(255,255,255,0.08)"
        />

        <Circle
          cx={cx}
          cy={cy}
          r={radius}
          style="stroke"
          strokeWidth={
            strokeWidth
          }
        >
          <SweepGradient
            c={vec(cx, cy)}
            colors={[
              glowColor,
              '#5EA2FF',
              glowColor,
            ]}
          />

          <BlurMask
            blur={8}
            style="solid"
          />
        </Circle>
      </Canvas>

      <View
        style={{
          alignItems: 'center',
        }}
      >
        <AnimatedMetric
          value={value}
          suffix="%"
          variant="hero"
        />

        <Text
          style={[
            typography.body,
            {
              color:
                colors.textSecondary,

              marginTop: 2,
            },
          ]}
        >
          Battery
        </Text>
      </View>
    </View>
  );
}