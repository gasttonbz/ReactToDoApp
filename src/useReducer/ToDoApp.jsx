
import { AddTodo } from "./AddTodo";
import { ListGroup } from "./ListGroup";
import { useToDo } from "./useToDo";

export const ToDoApp = () => {

  const { todos, onNewTodo, onRemoveTodo, checkToDo, todosPendientes, todosCount } = useToDo();
  
  return (
    <>
      <h1 className="text-center">To Do App</h1>
      <h3 className="text-center">Total: {todosCount} - Pendientes: {todosPendientes}</h3>

      <hr />

      <div className="container-fluid">

        <div className="row">

          <div className="col-7">
            <ListGroup todos={todos} onRemoveTodo={ onRemoveTodo } checkToDo={checkToDo} />
          </div>

          <div className="col-5">
            <h3>Agregar nueva tarea</h3>
            <AddTodo onNewTodo={onNewTodo} />
          </div>

        </div>

      </div>
    </>
  );
};
