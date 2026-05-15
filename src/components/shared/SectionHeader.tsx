import { View, Text } from 'react-native';

import {
  typography,
  colors,
} from '@/theme';

type Props = {
  title: string;

  subtitle?: string;
};

export default function SectionHeader({
  title,
  subtitle,
}: Props) {
  return (
    <View>
      <Text
        style={[
          typography.h2,
          {
            color: colors.textPrimary,
          },
        ]}
      >
        {title}
      </Text>

      {subtitle && (
        <Text
          style={[
            typography.body,
            {
              color: colors.textSecondary,
              marginTop: 4,
            },
          ]}
        >
          {subtitle}
        </Text>
      )}
    </View>
  );
}