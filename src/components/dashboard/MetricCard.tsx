import { View, Text } from 'react-native';

import GlassCard from '@/components/shared/GlassCard';
import AnimatedMetric from './AnimatedMetric';

import {
  colors,
  spacing,
  typography,
} from '@/theme';

type Props = {
  value: number;
  label: string;
  unit?: string;
};

export default function MetricCard({
  value,
  label,
  unit,
}: Props) {
  return (
    <GlassCard>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}
        >
        <AnimatedMetric
        value={Number(value)}
        variant="xl"
        />

          {unit && (
            <Text
              style={[
                typography.bodyMedium,
                {
                  color: colors.textSecondary,
                  marginLeft: 6,
                  marginBottom: 8,
                },
              ]}
            >
              {unit}
            </Text>
          )}
        </View>

        <Text
          style={[
            typography.body,
            {
              color: colors.textSecondary,
              marginTop: spacing.xs,
            },
          ]}
        >
          {label}
        </Text>
      </View>
    </GlassCard>
  );
}