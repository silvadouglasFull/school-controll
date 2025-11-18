import { ContextProvider as ClassContextProvider } from '@/app/(modules)/class/context/context-provider';
import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <GluestackUIProvider config={config}>
      <ClassContextProvider>
        <Stack>
          <Stack.Screen name="index" options={{ title: 'Home' }} />
          <Stack.Screen name="class/index" options={{ title: 'Turmas' }} />
          <Stack.Screen name="class/new" options={{ title: 'Nova Turma' }} />
          <Stack.Screen name="class/edit/[id]" options={{ title: 'Editar Turma' }} />
        </Stack>
      </ClassContextProvider>
    </GluestackUIProvider>
  );
}
