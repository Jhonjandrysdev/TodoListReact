import ItemTodo from './ItemListaTodos';
const TodoList = ({propsItem, UpdateTodo, DeleteTodo, ClearTodoCompleted}) =>{
    return(
        <>
        <div className="bg-white rounded-t-md mt-7 ">
          {propsItem.map((todos) =>(
              <ItemTodo key={todos.id} todosItem={todos} UpdateTodo={UpdateTodo} DeleteTodo={DeleteTodo} ClearTodoCompleted={ClearTodoCompleted} />
          ))}
      </div>
      </>
    )
}
export default TodoList