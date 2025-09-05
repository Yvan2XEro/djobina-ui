import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function HomeScreen() {
  const { t } = useTranslation();
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl">{t('home')}</Text>
    </View>
  );
}
