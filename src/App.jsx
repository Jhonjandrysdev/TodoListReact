import TodoList from "./components/ListaTodos";
import Cabecera from "./components/Cabecera";
import TodoForm from "./components/FormTodo";
import TodoOrganize from "./components/OrganizeTodo";
import TodoFilter from "./components/TodoFilter";
import { useEffect, useState } from "react";

const ListInicialTodos = JSON.parse(localStorage.getItem("todo")) || []


const App = () => {

  const [todo, setTodo] = useState(ListInicialTodos)

  useEffect(()=>{
    localStorage.setItem("todo", JSON.stringify(todo))
  },)

  const createTodo = (titulo) => {
      const NewTodo = {
        id: Date.now(),
        titulo,
        estado: false
      }
      setTodo([...todo, NewTodo]);
  }

  const UpdateTodo = (id) => {
      setTodo(todo.map(todo => todo.id === id ? {...todo, estado: !todo.estado}: todo))
  }

  const DeleteTodo= (id) =>{
    setTodo(todo.filter((todo) => todo.id !== id));

  }

  const LeftTodo = () =>  todo.filter((todo)=> !todo.estado).length

  const ClearTodoCompleted = () => {
    setTodo(todo.filter((todo) => !todo.estado))
  }

  const [filter, setFilter] =useState("todas")

  const ChangeFilter = (filter) => setFilter(filter)

  const filteredTodos = () =>{

    switch (filter) {
      case "todas":
        return todo;
      case "activas":
        return todo.filter((todo) => !todo.estado)
      case "completadas":
        return todo.filter((todo) => todo.estado)
      
        default:
          return todo
    }
  }


  return (
    <div className="bg-[url('./images/bg-mobile-light.jpg')] bg-no-repeat bg-top bg-gray-400 min-h-screen bg-contain dark:bg-gray-900 dark:bg-[url('./images/bg-mobile-dark.jpg')] md:bg-[url('./images/bg-desktop-light.jpg')] md:dark:bg-[url('./images/bg-desktop-dark.jpg')] ">
      <Cabecera />

      <main className="mx-auto px-4 mt-7 md:max-w-xl">
        <TodoForm propsCreate={createTodo}/>

        <TodoList propsItem={filteredTodos()} DeleteTodo={DeleteTodo} UpdateTodo={UpdateTodo}/>

        <TodoOrganize LeftTodo={LeftTodo()} ClearTodoCompleted={ClearTodoCompleted}/>

        <TodoFilter ChangeFilter={ChangeFilter} />
      </main>

      <footer className="text-center mt-8 dark:text-white">Ordenar Tareas</footer>
    </div>
  );
};

export default App;
