import { ShcoolContextProvider as ClassContextProvider } from '@/app/(modules)/class/context/school-context-provider';
import { ShcoolContextProvider } from '@/app/(modules)/school/context/school-context-provider';
import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <GluestackUIProvider config={config}>
      <ShcoolContextProvider>
        <ClassContextProvider>
          <Stack>
            <Stack.Screen name="index" options={{ title: 'Home' }} />
            <Stack.Screen name="school/index" options={{ title: 'Escolas' }} />
            <Stack.Screen name="school/new" options={{ title: 'Nova Escola' }} />
            <Stack.Screen name="school/edit/[id]" options={{ title: 'Editar Escola' }} />
            <Stack.Screen name="class/index" options={{ title: 'Turmas' }} />
            <Stack.Screen name="class/new" options={{ title: 'Nova Turma' }} />
            <Stack.Screen name="class/edit/[id]" options={{ title: 'Editar Turma' }} />
          </Stack>
        </ClassContextProvider>
      </ShcoolContextProvider>
    </GluestackUIProvider>
  );
}
