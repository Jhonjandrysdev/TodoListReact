import { useState } from "react"

const TodoForm = ({propsCreate}) =>{

    const [infoTitulo, setInfoTitulo] = useState("")

    const handleSubmitAddTodo = (e) =>{
      
      e.preventDefault()
      console.log(infoTitulo);
      
      if (!infoTitulo.trim()) {
        alert("Escribe una tarea")
        setInfoTitulo("")
      }else
      {
        propsCreate(infoTitulo)
        setInfoTitulo("")
      }
    }

    return(
        <form onSubmit={handleSubmitAddTodo} className="bg-white rounded-md overflow-hidden py-3 items-center gap-4 flex px-4 mt-7 dark:bg-gray-800">
        <span className="rounded-full border-2 w-5 h-5 inline-block "></span>
        <input
          type="text"
          name=""
          id=""
          value={infoTitulo}
          onChange={(e)=> setInfoTitulo(e.target.value)}
          placeholder="Crea una nueva tarea"
          className="w-full text-gray-400 outline-none dark:bg-gray-800"
        />
      </form>
    )
}
export default TodoForm