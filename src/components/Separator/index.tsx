import { ColorValue, View } from "react-native";

import { styles } from "./style";

export function Separator({ color }: {color: ColorValue}){
  return <View style={[styles.container, {backgroundColor: color}]}/>
}