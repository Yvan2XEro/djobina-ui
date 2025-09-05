import { View, Text, Button } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useColorScheme } from 'nativewind';
import i18n from '../../i18n';

export default function ProfileScreen() {
  const { t } = useTranslation();
  const { colorScheme, setColorScheme } = useColorScheme();

  const toggleTheme = () =>
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');

  const toggleLanguage = () => {
    const next = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(next);
  };

  return (
    <View className="flex-1 items-center justify-center gap-4">
      <Text className="text-xl">{t('profile')}</Text>
      <Button title={t('toggleTheme')} onPress={toggleTheme} />
      <Button title={t('toggleLanguage')} onPress={toggleLanguage} />
    </View>
  );
}
