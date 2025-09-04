import { SafeAreaView, Text } from "react-native";
import { useState, useCallback } from "react";
import ButtonAction from "./src/components/ButtonAction";

export default function App() {
  const [valor, setValor] = useState(0);

  const incrementar = useCallback(() => {
    setValor(valor + 1);
  }, [valor]);

  const decrementar = useCallback(() => {
    setValor(valor - 1);
  }, [valor]);

  const resetar = useCallback(() => {
    setValor(0);
  }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#96B09E",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 33, marginBottom: 20 }}>O valor é {valor}</Text>

      <ButtonAction label="Incrementar" onPress={incrementar} />
      <ButtonAction label="Decrementar" onPress={decrementar} />
      <ButtonAction label="Resetar" onPress={resetar} />
    </SafeAreaView>
  );
}
