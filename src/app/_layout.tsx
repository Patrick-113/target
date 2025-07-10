import { Stack } from "expo-router";
import { colors } from "@/theme/colors";
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold } from "@expo-google-fonts/inter";
import { Loading } from "@/components/Loading";

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

  return <Stack 
    screenOptions={{
      headerShown: false,
      contentStyle: {
        backgroundColor: colors.white
      }
    }}
  />
}