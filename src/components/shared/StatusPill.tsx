import {
  View,
  Text,
} from 'react-native';

import {
  colors,
  radius,
  spacing,
  typography,
} from '@/theme';

type Props = {
  label: string;

  type?:
    | 'success'
    | 'warning'
    | 'offline';
};

export default function StatusPill({
  label,

  type = 'success',
}: Props) {
  const backgroundMap = {
    success:
      'rgba(0,255,163,0.12)',

    warning:
      'rgba(255,184,0,0.14)',

    offline:
      'rgba(255,82,82,0.14)',
  };

  const colorMap = {
    success:
      colors.accentGreen,

    warning: '#FFB800',

    offline: '#FF5252',
  };

  return (
    <View
      style={{
        alignSelf: 'flex-start',

        paddingHorizontal:
          spacing.lg,

        paddingVertical:
          spacing.sm,

        borderRadius:
          radius.full,

        backgroundColor:
          backgroundMap[type],

        borderWidth: 1,

        borderColor:
          colorMap[type],
      }}
    >
      <Text
        style={[
          typography.bodySemiBold,
          {
            color:
              colorMap[type],
          },
        ]}
      >
        {label}
      </Text>
    </View>
  );
}