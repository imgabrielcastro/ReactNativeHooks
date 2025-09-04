export interface Task {
  id: number;
  title: string;
}

export const initialTasks: Task[] = [
  { id: 1, title: "Estudar React Native" },
  { id: 2, title: "Criar componente Button" },
  { id: 3, title: "Implementar Input controlado" },
  { id: 4, title: "Criar TaskItem e TaskList" },
  { id: 5, title: "Adicionar tema Dark/Light com useContext" },
  { id: 6, title: "Adicionar função de adicionar tarefa com useCallback" },
  { id: 7, title: "Adicionar função de deletar tarefa com useCallback" },
  { id: 8, title: "Calcular total de tarefas com useMemo" },
];
