import React, { useCallback } from "react";
import { FlatList } from "react-native";
import TaskItem from "./TaskItem";
import { Task } from "../data/task";
import { Text } from "react-native";

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
}

export default function TaskList({ tasks, onDelete }: TaskListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <TaskItem task={item} onDelete={onDelete} />}
      ListEmptyComponent={() => (
        <Text style={{ textAlign: "center", color: "#999", marginTop: 20 }}>
          Nenhuma tarefa adicionada ainda.
        </Text>
      )}
    />
  );
}
