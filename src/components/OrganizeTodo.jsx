const TodoOrganize = ({LeftTodo, ClearTodoCompleted}) =>{
    return(
        <>
        <section className="flex justify-between py-4 px-4 text-center bg-white rounded-b-md dark:bg-gray-800">
          <p className="text-gray-400 dark:text-white">Tienes {LeftTodo} tareas pendientes</p>
          <button className="text-gray-400  hover:text-blue-600 dark:text-white" onClick={ClearTodoCompleted}>Quitar tareas completadas</button>
        </section>
        
        </>
    )
}
export default TodoOrganize