import { SafeAreaView, Text } from "react-native";
import { useState } from "react";
import ButtonAction from "./src/components/ButtonAction";
import InputSave from "./src/components/InputSaveData";

export default function App() {
  const [valor, setValor] = useState(0);
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#96B09E",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 33, marginBottom: 20}}>
        O valor é {valor}
      </Text>

      <ButtonAction label="Incrementar" onPress={() => setValor(valor + 1)} />
      <ButtonAction label="Decrementar" onPress={() => setValor(valor - 1)} />
      <ButtonAction label="Resetar" onPress={() => setValor(0)} />

      <InputSave label="E-mail" onChangeText={setMail} />

      <Text style={{ fontSize: 18 }}>
        Valor digitado: {mail}
      </Text>
      
      <InputSave label="Senha" onChangeText={setPassword} />

      <Text style={{ fontSize: 18 }}>
        Valor digitado: {password}
      </Text>
    </SafeAreaView>
  );
}
