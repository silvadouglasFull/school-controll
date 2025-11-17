import { ShcoolContextProvider } from '@/app/(modules)/school/context/school-context-provider';
import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <GluestackUIProvider config={config}>
      <ShcoolContextProvider>
        <Stack>
          <Stack.Screen name="index" options={{ title: 'Home' }} />
          <Stack.Screen name="school/index" options={{ title: 'Escolas' }} />
          <Stack.Screen name="school/new" options={{ title: 'Nova Escola' }} />
          <Stack.Screen name="school/edit/[id]" options={{ title: 'Editar Escola' }} />
        </Stack>
      </ShcoolContextProvider>
    </GluestackUIProvider>
  );
}
