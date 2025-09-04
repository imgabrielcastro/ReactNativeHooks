import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../contexts/ThemeContext";
import { Switch } from "react-native";
import VStack from "./Stacks/VStack";
import HStack from "./Stacks/HStack";
import TaskList from "./TaskList";
import { initialTasks } from "../data/task";
import { useCallback, useMemo, useState } from "react";
import { Task } from "../data/task";
import Input from "./Input";
import { KeyboardAvoidingView } from "react-native";
import { Platform } from "react-native";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const handleDeleteTask = useCallback((id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }, []);

  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = useCallback(() => {
    if (newTask.trim() === "") return;

    const newTaskItem: Task = {
      id: Date.now(),
      title: newTask,
    };

    setTasks((prevTasks) => [...prevTasks, newTaskItem]);
    setNewTask("");
  }, [newTask]);

  const totalTasks = useMemo(() => tasks.length, [tasks]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={0}
    >
      <SafeAreaView
        style={[
          { flex: 1 },
          theme === "dark" ? styles.darkBackground : styles.lightBackground,
        ]}
      >
        <StatusBar style={theme === "dark" ? "light" : "dark"} />
        <VStack style={{ padding: 12 }}>
          <HStack style={{ alignItems: "center", gap: 12 }}>
            <Switch
              value={isDark}
              onValueChange={toggleTheme}
              thumbColor={isDark ? "#fff" : "#000"}
              ios_backgroundColor={"gray"}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
            />

            <Text
              style={{
                color: theme === "dark" ? "#fff" : "#000",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                fontSize: 22,
              }}
            >
              Task List
            </Text>
          </HStack>
          <Text
            style={{
              color: theme === "dark" ? "#fff" : "#000",
              justifyContent: "flex-end",
              fontSize: 16,
              paddingTop: 20,
            }}
          >
            Total de tarefas: {totalTasks}
          </Text>
        </VStack>

        <VStack style={{ padding: 12, height: "85%" }}>
          <TaskList tasks={tasks} onDelete={handleDeleteTask} />
        </VStack>

        <View
          style={{
            padding: 12,
            position: "absolute",
            bottom: 30,
            left: 0,
            right: 0,
            backgroundColor: theme === "dark" ? "#121212" : "#f5f5f5",
            borderTopWidth: 1,
            borderTopColor: theme === "dark" ? "#333" : "#ddd",
          }}
        >
          <Input
            value={newTask}
            onChangeText={setNewTask}
            onAddTask={handleAddTask}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  lightBackground: { backgroundColor: "#f5f5f5" },
  darkBackground: { backgroundColor: "#121212" },
});
