import {
  Canvas,
  Circle,
  BlurMask,
} from '@shopify/react-native-skia';

type Props = {
  color: string;

  size?: number;
};

export default function AmbientGlow({
  color,
  size = 220,
}: Props) {
  return (
    <Canvas
      style={{
        position: 'absolute',

        width: size,
        height: size,
      }}
    >
      <Circle
        cx={size / 2}
        cy={size / 2}
        r={size / 4}
        color={color}
      >
        <BlurMask
          blur={60}
          style="solid"
        />
      </Circle>
    </Canvas>
  );
}