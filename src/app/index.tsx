import { fontFamily } from "@/theme/fontFamily";
import { router } from "expo-router";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{fontFamily: fontFamily.bold}}>Olá, Expo Router</Text>

      <Button title="Nova Meta" onPress={() => router.navigate("/target")} />
      <Button title="Transação" onPress={() => router.navigate("/transaction/142")}/>
      <Button title="Progresso" onPress={() => router.navigate("/in-progress/12")}/>
    </View>
  );
}