import { TouchableOpacity, Text } from "react-native";

interface ButtonProps {
  label: string;             
  onPress: () => void;       
}

export default function ButtonAction({ label, onPress }: ButtonProps) {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={{ padding: 15, backgroundColor: "#fff", margin: 5, borderRadius: 8 }}
    >
      <Text style={{ fontSize: 20 }}>{label}</Text>
    </TouchableOpacity>
  );
}
