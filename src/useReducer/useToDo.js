import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";


export const useToDo = () => {



    const initialState = [];

    const onNewTodo = (newTodo) => {
      const action = {
        type: 'Add todo',
        payload: newTodo,
      };
      dispatch(action);
    };
  
    const onRemoveTodo = (id) => {
      const action = {
        type: 'Remove todo',
        payload: id,
      };
      dispatch(action);
    };
  
    const checkToDo = (id) => {
      const action = {
        type: 'Check todo',
        payload: id,
      };
      dispatch(action);
    };
  
    const init = () => {
      return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])



  return {
    todos,
    onNewTodo,
    onRemoveTodo,
    checkToDo,
    todosCount: todos.length,
    todosPendientes: todos.filter(todo => !todo.done).length,
  }
}
