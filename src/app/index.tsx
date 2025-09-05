import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { router } from 'expo-router';

const schema = z.object({
  phone: z.string().min(8),
  code: z.string().optional(),
});

export default function OTPOnboarding() {
  const { t } = useTranslation();
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const { control, handleSubmit, getValues } = useForm({
    defaultValues: { phone: '', code: '' },
  });

  const onSubmit = handleSubmit(() => {
    const values = getValues();
    const result = schema.safeParse(values);
    if (!result.success) {
      return;
    }
    if (step === 'phone') {
      setStep('otp');
    } else {
      router.replace('/(tabs)/home');
    }
  });

  return (
    <View className="flex-1 justify-center p-4 gap-4">
      {step === 'phone' ? (
        <>
          <Text className="text-lg">{t('enterPhone')}</Text>
          <Controller
            control={control}
            name="phone"
            render={({ field: { onChange, value } }) => (
              <TextInput
                className="border rounded p-2"
                keyboardType="phone-pad"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <Button title={t('sendCode')} onPress={onSubmit} />
        </>
      ) : (
        <>
          <Text className="text-lg">{t('enterOTP')}</Text>
          <Controller
            control={control}
            name="code"
            render={({ field: { onChange, value } }) => (
              <TextInput
                className="border rounded p-2"
                keyboardType="number-pad"
                value={value ?? ''}
                onChangeText={onChange}
              />
            )}
          />
          <Button title={t('verify')} onPress={onSubmit} />
        </>
      )}
    </View>
  );
}
