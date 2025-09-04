import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useMemo, useState } from "react";

export default function App() {
  const [values, setValues] = useState([10, 50, 300, 500, 10000, 12000]);

  const sum = useMemo(() => {
    console.log("TESTE!");
    return values.reduce((acc, curr) => acc + curr, 0);
  }, [values]);

  const average = useMemo(() => {
    return sum / values.length;
  }, [sum, values.length]);

  const addRandomNumber = () => {
    const random = Math.floor(Math.random() * 500);
    setValues([...values, random]);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 20 }}>
        Cálculos com useMemo
      </Text>

      <Text style={styles.text}>Números: {values.join(", ")}</Text>
      <Text style={styles.text}>Soma: {sum}</Text>
      <Text style={styles.text}>Média: {average.toFixed(2)}</Text>

      <TouchableOpacity
        style={{
          marginTop: 20,
          paddingVertical: 12,
          paddingHorizontal: 18,
          backgroundColor: "#4a90e2",
          borderRadius: 8,
        }}
        onPress={addRandomNumber}
      >
        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
          Adicionar número aleatório
        </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
});
