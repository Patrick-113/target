import { Stack } from "expo-router";
import { colors } from "@/theme/colors";
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold } from "@expo-google-fonts/inter";
import { Loading } from "@/components/Loading";
import { migrate } from "@/database/migrate";
import { SQLiteProvider } from "expo-sqlite";
import { Suspense } from "react";

export default function Layout() {
  //Carrega as fontes a serem usadas na aplicação
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  //Só permite a renderização do aplicativo caso as fontes tenham sido carregadas
  if(!fontsLoaded){
    return <Loading/>
  }

  return (
    <Suspense fallback={<Loading/>}>
      <SQLiteProvider databaseName="target.db" onInit={migrate} useSuspense>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: colors.white,
            },
          }}
        />
      </SQLiteProvider>
    </Suspense>
  );
}