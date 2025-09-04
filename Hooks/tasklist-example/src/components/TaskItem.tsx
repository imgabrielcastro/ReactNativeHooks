import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Task } from "../data/task";
import { useTheme } from "../contexts/ThemeContext";
import Icon from "react-native-vector-icons/FontAwesome";

interface TaskItemProps {
  task: Task;
  onDelete: (id: number) => void;
}

export default function TaskItem({ task, onDelete }: TaskItemProps) {
  const { theme } = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme === "dark" ? "#484D50" : "#fff",
          borderColor: theme === "dark" ? "#121212" : "#fff",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.15,
          shadowRadius: 3.84,
          elevation: 5,
        },
      ]}
    >
      <Text
        style={[styles.text, { color: theme === "dark" ? "#fff" : "#000" }]}
      >
        {task.title}
      </Text>
      <TouchableOpacity onPress={() => onDelete(task.id)}>
        <Icon
          name="trash"
          size={24}
          color={theme === "dark" ? "#fff" : "#000"}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
  },
  text: {
    fontSize: 14,
    flex: 1,
  },
  delete: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
