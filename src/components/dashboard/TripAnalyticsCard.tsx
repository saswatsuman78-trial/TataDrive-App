import {
  View,
  Text,
} from 'react-native';

import {
  Canvas,
  Path,
  Skia,
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

export default function TripAnalyticsCard() {
  const {
    driveMode,

    speed,

    battery,
  } = useCarStore();

  const efficiency =
    driveMode === 'Eco'
      ? 94
      : driveMode === 'City'
      ? 81
      : 63;

  const tripDistance =
    Math.max(
      18,
      Math.floor(
        (100 - battery) *
          1.8
      )
    );

  const path = Skia.Path.Make();

  path.moveTo(0, 100);

  path.cubicTo(
    40,
    20,
    90,
    130,
    150,
    52
  );

  path.cubicTo(
    210,
    0,
    250,
    110,
    320,
    40
  );

  const graphColor =
    driveMode === 'Eco'
      ? colors.accentGreen
      : driveMode === 'City'
      ? colors.accentBlue
      : '#FF7849';

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
            Trip Efficiency
          </Text>

          <View
            style={{
              marginTop:
                spacing.sm,

              flexDirection: 'row',

              alignItems:
                'flex-end',
            }}
          >
            <AnimatedMetric
              value={
                efficiency
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
                  spacing.sm,
              },
            ]}
          >
            Optimized for{' '}
            {driveMode} mode
          </Text>
        </View>

        <View
          style={{
            width: 64,
            height: 64,

            borderRadius: 999,

            justifyContent:
              'center',

            alignItems: 'center',

            backgroundColor:
              `${graphColor}22`,
          }}
        >
          <Ionicons
            name="analytics"
            size={28}
            color={graphColor}
          />
        </View>
      </View>

      <View
        style={{
          marginTop:
            spacing.xl,

          marginBottom:
            spacing.lg,
        }}
      >
        <Canvas
          style={{
            width: '100%',
            height: 120,
          }}
        >
          <Path
            path={path}
            color={graphColor}
            style="stroke"
            strokeWidth={4}
            strokeCap="round"
          >
            <BlurMask
              blur={10}
              style="solid"
            />
          </Path>
        </Canvas>
      </View>

      <View
        style={{
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
            Avg Speed
          </Text>

          <Text
            style={[
              typography.bodySemiBold,
              {
                color:
                  colors.textPrimary,

                marginTop: 4,
              },
            ]}
          >
            {speed} km/h
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
            Distance
          </Text>

          <Text
            style={[
              typography.bodySemiBold,
              {
                color:
                  colors.textPrimary,

                marginTop: 4,
              },
            ]}
          >
            {tripDistance} km
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
            Recovery
          </Text>

          <Text
            style={[
              typography.bodySemiBold,
              {
                color:
                  colors.accentGreen,

                marginTop: 4,
              },
            ]}
          >
            +12%
          </Text>
        </View>
      </View>
    </GlassCard>
  );
}