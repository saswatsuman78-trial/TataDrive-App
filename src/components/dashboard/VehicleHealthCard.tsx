import {
  View,
  Text,
} from 'react-native';

import {
  Canvas,
  Circle,
  BlurMask,
} from '@shopify/react-native-skia';

import Ionicons from '@expo/vector-icons/Ionicons';

import GlassCard from '@/components/shared/GlassCard';

import AnimatedMetric from './AnimatedMetric';

import {
  useCarStore,
} from '@/store/useCarStore';

import {
  colors,
  spacing,
  typography,
} from '@/theme';

export default function VehicleHealthCard() {
  const {
    battery,

    batteryTemp,

    connectivity,
  } = useCarStore();

  const healthScore =
    Math.max(
      72,
      Math.min(
        98,
        battery -
          Math.floor(
            batteryTemp / 4
          ) +
          18
      )
    );

  const statusColor =
    connectivity ===
    'connected'
      ? colors.accentGreen
      : '#FF5252';

  return (
    <GlassCard>
      <View
        style={{
          flexDirection: 'row',

          justifyContent:
            'space-between',

          alignItems: 'center',
        }}
      >
        <View style={{ flex: 1 }}>
          <Text
            style={[
              typography.bodySemiBold,
              {
                color:
                  colors.textMuted,
              },
            ]}
          >
            Vehicle Health
          </Text>

          <View
            style={{
              marginTop:
                spacing.md,

              flexDirection: 'row',

              alignItems:
                'flex-end',
            }}
          >
            <AnimatedMetric
              value={
                healthScore
              }
              suffix="%"
              variant="xl"
            />
          </View>

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
            All systems operating
            normally
          </Text>
        </View>

        <View
          style={{
            width: 90,
            height: 90,

            justifyContent:
              'center',

            alignItems: 'center',
          }}
        >
          <Canvas
            style={{
              width: 90,
              height: 90,

              position:
                'absolute',
            }}
          >
            <Circle
              cx={45}
              cy={45}
              r={18}
              color={statusColor}
            >
              <BlurMask
                blur={18}
                style="solid"
              />
            </Circle>
          </Canvas>

          <Ionicons
            name="shield-checkmark"
            size={34}
            color={statusColor}
          />
        </View>
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
            Connectivity
          </Text>

          <Text
            style={[
              typography.bodySemiBold,
              {
                color:
                  statusColor,

                marginTop: 6,
              },
            ]}
          >
            {connectivity ===
            'connected'
              ? 'Stable'
              : 'Offline'}
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
            Battery Temp
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
            {batteryTemp}°C
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
            Diagnostics
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
            Healthy
          </Text>
        </View>
      </View>
    </GlassCard>
  );
}