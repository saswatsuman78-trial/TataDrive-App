import {
  View,
  Text,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

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

function ControlButton({
  icon,
  label,
  active,
  onPress,
}: {
  icon: any;

  label: string;

  active: boolean;

  onPress: () => void;
}) {
  return (
    <AnimatedPressable
      onPress={onPress}
    >
      <View
        style={{
          width: 82,

          paddingVertical:
            spacing.lg,

          borderRadius:
            radius.lg,

          alignItems: 'center',

          backgroundColor:
            active
              ? 'rgba(59,139,255,0.16)'
              : 'rgba(255,255,255,0.05)',

          borderWidth: 1,

          borderColor: active
            ? 'rgba(59,139,255,0.35)'
            : 'rgba(255,255,255,0.06)',
        }}
      >
        <Ionicons
          name={icon}
          size={22}
          color={
            active
              ? colors.accentBlue
              : colors.textMuted
          }
        />

        <Text
          style={[
            typography.caption,
            {
              color:
                active
                  ? colors.textPrimary
                  : colors.textMuted,

              marginTop: 10,
            },
          ]}
        >
          {label}
        </Text>
      </View>
    </AnimatedPressable>
  );
}

export default function QuickControls() {
  const {
    locked,

    climateOn,

    charging,

    toggleLock,

    toggleClimate,

    toggleCharging,
  } = useCarStore();

  return (
    <View
      style={{
        marginTop: spacing.xl,

        flexDirection: 'row',

        justifyContent:
          'space-between',
      }}
    >
      <ControlButton
        icon={
          locked
            ? 'lock-closed'
            : 'lock-open'
        }
        label="Locked"
        active={locked}
        onPress={toggleLock}
      />

      <ControlButton
        icon="snow"
        label="Climate"
        active={climateOn}
        onPress={toggleClimate}
      />

      <ControlButton
        icon="flash"
        label="Charge"
        active={charging}
        onPress={toggleCharging}
      />

      <ControlButton
        icon="bulb"
        label="Lights"
        active={false}
        onPress={() => {}}
      />
    </View>
  );
}