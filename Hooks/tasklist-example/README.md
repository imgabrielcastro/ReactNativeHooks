# 📋 React Native – Task List (Dark/Light Mode)

Este projeto demonstra a criação de uma **Lista de Tarefas em React Native**, utilizando **hooks avançados** para controle de estado, otimização e tema global (dark/light).  

---

## ✨ Funcionalidades

- Adicionar novas tarefas (`useState`)  
- Excluir tarefas da lista (`useCallback`)  
- Cálculo otimizado do total de tarefas (`useMemo`)  
- Alternância entre tema claro e escuro (`useContext`)  
- Adição de tarefas pelo botão ou tecla Enter  
- Layout responsivo com `KeyboardAvoidingView`  

---

## 🛠️ Tecnologias

- **React Native + Expo**  
- Hooks: `useState`, `useCallback`, `useMemo`, `useContext`  
- Estilização com **StyleSheet API**  
- **Vector Icons** para ícones de exclusão  

---

## 📌 Observações

- O uso de **useMemo** garante que o total de tarefas seja recalculado apenas quando a lista muda.  
- **useCallback** evita recriação desnecessária das funções de adicionar e remover tarefas.  
- **useContext** centraliza o tema global, permitindo alternar facilmente entre dark e light mode.  
- Este projeto evolui um exemplo simples de lista, trazendo **componentização e otimização** com hooks.  
