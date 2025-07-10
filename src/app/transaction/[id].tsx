import { Text, View, Button} from "react-native";
import { useLocalSearchParams, router} from "expo-router";

export default function Transaction(){
  //params recebe o id da rota, escrito no URL usando o hook useLocalSearchParams
  const params = useLocalSearchParams<{id: string}>();

  return(
    <View style={{ flex: 1, justifyContent: "center"}}>
      <Text>ID: {params.id}</Text>

      <Button title="Voltar" onPress={() => router.back()}/>
    </View>
  )
}