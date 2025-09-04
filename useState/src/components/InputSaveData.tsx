import { TextInput, Text, View } from "react-native";

interface InputProps{
    label: any;
    onChangeText: (text: string) => void;
}

export default function InputSave({ label, onChangeText }: InputProps) {
    return (
      <View style={{ display: "flex", flexDirection: "column", padding: 12}}>
        <Text style={{ marginBottom: 5, fontSize: 22, justifyContent: "flex-start"}}>{label}:</Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            padding: 10,
            borderRadius: 8,
            fontSize: 16,
            backgroundColor: "#fff",
            width: 200,
          }}
          onChangeText={onChangeText}
        />
      </View>
    );
  }

