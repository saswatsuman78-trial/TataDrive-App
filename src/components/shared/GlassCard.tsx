import {
  View,
  Platform,
} from 'react-native';

import { BlurView } from 'expo-blur';

import {
  colors,
  radius,
  spacing,
  shadows,
} from '@/theme';

type Props = {
  children: React.ReactNode;
};

export default function GlassCard({
  children,
}: Props) {
  return (
    <View
  style={{
    overflow: 'hidden',
  }}
>
    <View
      style={[
        {
          borderRadius: radius.lg,

          borderWidth: 1,

          borderColor: colors.glassBorder,

          backgroundColor:
            Platform.OS === 'android'
              ? 'rgba(22,24,33,0.82)'
              : 'transparent',

          overflow: 'hidden',

          padding: spacing.lg,
        },

        shadows.card,
      ]}
    >
      {Platform.OS === 'ios' && (
        <BlurView
          intensity={45}
          tint="dark"
          style={{
            position: 'absolute',

            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
      )}

      {children}
    </View>
    </View>
  );
}