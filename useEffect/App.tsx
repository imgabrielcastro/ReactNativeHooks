import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  ActivityIndicator,
} from "react-native";

export default function App() {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const json = await response.json();
      setData(json);
    } catch (err: any) {
      setError(err.message || "Erro inesperado");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <SafeAreaView style={{ flex: 1, padding: 16, backgroundColor: "#f2f2f7" }}>
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#fff",
              padding: 16,
              borderRadius: 12,
              marginBottom: 12,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.15,
              shadowRadius: 4,
              elevation: 3,
            }}
          >
            <Text style={{ fontSize: 16, color: "#333" }}>{item.title}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
}

function Loader() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
      }}
    >
      <ActivityIndicator size="large" color="#4a90e2" />
      <Text style={{ marginTop: 12, fontSize: 16, color: "#4a90e2" }}>
        Carregando...
      </Text>
    </View>
  );
}

function Error({ message }: { message: string }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          color: "red",
          textAlign: "center",
        }}
      >
        Ocorreu um erro: {message}
      </Text>
    </View>
  );
}
