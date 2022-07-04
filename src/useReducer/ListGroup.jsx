import { ListItem } from "./ListItem";

export const ListGroup = ({ todos, onRemoveTodo, checkToDo }) => {

  return (
    <ul className="list-group">
        {todos.map(todo => (
            <ListItem key={todo.id} description={todo.description} id={todo.id} done={todo.done} onRemoveTodo={ onRemoveTodo } checkToDo={checkToDo} />
        ))}
    </ul>
  );

};
