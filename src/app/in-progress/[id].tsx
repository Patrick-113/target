import { router, useLocalSearchParams} from "expo-router";
import { View } from "react-native";
import { PageHeader } from "@/components/PageHeader";
import { Progress } from "@/components/Progress";
import { List } from "@/components/List";
import { Transaction, TransactionProps } from "@/components/Transaction";
import { TransactionTypes } from "@/utils/TransactionTypes";
import { Button } from "@/components/Button";

const details = {
  current: "R$ 580,00",
  target: "R$ 1.790,00",
  percentage: 25
}

const transactions: TransactionProps[] = [
  {
    id: "1",
    value: "R$ 20,00",
    date: "12/04/25",
    type: TransactionTypes.Output,
  },
  {
    id: "2",
    value: "R$ 300,00",
    date: "12/04/25",
    description: "CDB de 110% no banco XTPO",
    type: TransactionTypes.Input,
  },
];

export default function InProgress(){
  //params recebe o id da rota, escrito no URL usando o hook useLocalSearchParams
  const params = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ flex: 1, padding: 24, gap: 32}}>
      <PageHeader 
        title="Apple Watch"
        rightButton={{
          icon: "edit",
          onPress: () => {}
        }}/>

        <Progress data={details}/>

        <List 
          title="Transações" 
          data={transactions} 
          renderItem={
            ({ item }) => <Transaction data={item} onRemove={() => {}}/>
          }
          emptyMessage="Nenhuma transação. Toque em nova transação para guardar seu primeiro dinheiro aqui."
        />

        <Button title="Nova transação" onPress={() => router.navigate(`/transaction/${params.id}`)}/>
    </View>
  );
}