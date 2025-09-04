import { useTheme } from "../contexts/ThemeContext";
import { SCREEN_HEIGHT } from "../constants/screenWidth";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";

interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  onAddTask: () => void;
}

export default function Input({ value, onChangeText, onAddTask }: InputProps) {
  const { theme } = useTheme();
  
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
      <View style={{
        padding: 18, 
        borderRadius: 8, 
        flex: 1,
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 4 }, 
        shadowOpacity: 0.35, 
        shadowRadius: 3.84, 
        elevation: 5,
        backgroundColor: theme === 'dark' ? '#333' : '#fff'
      }}>
        <TextInput
          placeholder="Adicionar tarefa"
          placeholderTextColor={theme === 'dark' ? '#aaa' : '#666'}
          value={value}
          onChangeText={onChangeText}
          style={{ 
            color: theme === "dark" ? "#fff" : "#000",
            minWidth: 200
          }}
          onSubmitEditing={onAddTask}
          returnKeyType="done"
        />
      </View>

      
      <TouchableOpacity 
        onPress={onAddTask}
        style={{
          backgroundColor: '#4a90e2',
          padding: 18,
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.35,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}