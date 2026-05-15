import {
  View,
  Text,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import GlassCard from '@/components/shared/GlassCard';

import {
  useCarStore,
} from '@/store/useCarStore';

import {
  colors,
  spacing,
  typography,
  radius,
} from '@/theme';

function StatusItem({
  icon,
  label,
  value,
  active,
}: {
  icon: any;

  label: string;

  value: string;

  active: boolean;
}) {
  return (
    <View
      style={{
        flexDirection: 'row',

        alignItems: 'center',

        justifyContent:
          'space-between',

        marginBottom:
          spacing.md,
      }}
    >
      <View
        style={{
          flexDirection: 'row',

          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: 36,
            height: 36,

            borderRadius:
              radius.full,

            justifyContent:
              'center',

            alignItems: 'center',

            marginRight:
              spacing.md,

            backgroundColor:
              active
                ? 'rgba(72,255,163,0.12)'
                : 'rgba(255,82,82,0.12)',
          }}
        >
          <Ionicons
            name={icon}
            size={18}
            color={
              active
                ? colors.accentGreen
                : '#FF5252'
            }
          />
        </View>

        <View>
          <Text
            style={[
              typography.bodySemiBold,
              {
                color:
                  colors.textPrimary,

                fontSize: 13,
              },
            ]}
          >
            {label}
          </Text>

          <Text
            style={[
              typography.caption,
              {
                color:
                  colors.textMuted,

                marginTop: 2,
              },
            ]}
          >
            {value}
          </Text>
        </View>
      </View>

      <View
        style={{
          width: 8,
          height: 8,

          borderRadius: 999,

          backgroundColor:
            active
              ? colors.accentGreen
              : '#FF5252',
        }}
      />
    </View>
  );
}

export default function SystemStatusCard() {
  const {
    connectivity,

    climateOn,

    charging,

    locked,

    driveMode,
  } = useCarStore();

  return (
    <GlassCard>
      <View>
        <Text
          style={[
            typography.metricMd,
            {
              color:
                colors.textPrimary,
            },
          ]}
        >
          Vehicle Systems
        </Text>

        <Text
          style={[
            typography.body,
            {
              color:
                colors.textSecondary,

              marginTop:
                spacing.xs,

              marginBottom:
                spacing.lg,
            },
          ]}
        >
          Live vehicle diagnostics
        </Text>

        <StatusItem
          icon="wifi"
          label="Connectivity"
          value={
            connectivity ===
            'connected'
              ? 'Vehicle Online'
              : 'Vehicle Offline'
          }
          active={
            connectivity ===
            'connected'
          }
        />

        <StatusItem
          icon="snow"
          label="Climate System"
          value={
            climateOn
              ? 'Cooling Active'
              : 'Climate Idle'
          }
          active={climateOn}
        />

        <StatusItem
          icon="flash"
          label="Charging System"
          value={
            charging
              ? 'Charging Active'
              : 'Vehicle Driving'
          }
          active={charging}
        />

        <StatusItem
          icon={
            locked
              ? 'lock-closed'
              : 'lock-open'
          }
          label="Vehicle Security"
          value={
            locked
              ? 'Vehicle Locked'
              : 'Vehicle Unlocked'
          }
          active={locked}
        />

        <StatusItem
          icon="speedometer"
          label="Drive Mode"
          value={`${driveMode} Mode`}
          active
        />
      </View>
    </GlassCard>
  );
}