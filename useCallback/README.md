# React Native – useCallback Example (Contador Otimizado)

Este projeto demonstra o uso do hook `useCallback` no React Native para **memorizar funções** e evitar re-renderizações desnecessárias em componentes filhos.

---

## Funcionalidades

- Criação de um **contador simples** com incremento, decremento e reset.  
- Uso de `useCallback` para memorizar as funções `incrementar`, `decrementar` e `resetar`.  
- Componente filho (`ButtonAction`) que recebe funções como props sem causar re-render desnecessário.  
- Demonstração prática da importância de memorizar funções em listas ou componentes otimizados.

---

## Tecnologias

- React Native  
- Hooks: `useState`, `useCallback`  
- Componentização com props  
- Estilização inline simples

---

## Observações

- `useCallback` é útil quando funções são passadas para **componentes filhos** que usam `React.memo`.  
- Neste exemplo, mesmo sem `memo`, já dá para entender o padrão de otimização.  
- O código é uma evolução do contador feito anteriormente, agora **mais performático**.
