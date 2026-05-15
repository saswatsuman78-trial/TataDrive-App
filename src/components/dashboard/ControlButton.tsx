import {
  View,
  Text,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import AnimatedPressable from '@/components/shared/AnimatedPressable';

import {
  colors,
  radius,
  spacing,
  typography,
} from '@/theme';

type Props = {
  icon: any;

  label: string;

  active?: boolean;

  onPress?: () => void;
};

export default function ControlButton({
  icon,
  label,
  active = false,
  onPress,
}: Props) {
  return (
    <AnimatedPressable onPress={onPress}>
      <View
        style={{
          width: 88,

          paddingVertical: spacing.md,

          borderRadius: radius.lg,

          alignItems: 'center',

          justifyContent: 'center',

          backgroundColor: active
            ? 'rgba(59,139,255,0.18)'
            : colors.cardPrimary,

          borderWidth: 1,

          borderColor: active
            ? 'rgba(59,139,255,0.35)'
            : colors.glassBorder,
        }}
      >
        <Ionicons
          name={icon}
          size={24}
          color={
            active
              ? colors.accentBlue
              : colors.textSecondary
          }
        />

        <Text
          style={[
            typography.caption,
            {
              color: active
                ? colors.textPrimary
                : colors.textSecondary,

              marginTop: spacing.sm,
            },
          ]}
        >
          {label}
        </Text>
      </View>
    </AnimatedPressable>
  );
}