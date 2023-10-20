import IconX from "./iconX";
import Check from "./iconCheck";

const ItemTodo = ({ todosItem, UpdateTodo, DeleteTodo }) => {
  const { id, titulo, estado } = todosItem;

  const completado =
    "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 grid place-items-center";

  const textComplet = "line-through"

  const Incomplet = "inline-block";

  return (
    <article className="flex border-b-2 border-b-gray-600 gap-4 py-4 px-4 dark:bg-gray-800 text-white">
      <button
        className={`h5 w-5 flex-none rounded-full border-2 ${
          estado ? completado : Incomplet}`}

          onClick={() => UpdateTodo(id)}
      >

        {estado && <Check />}
      </button>
      <p className={`text-gray-400 grow dark:text-white ${
        estado && textComplet}`}>{titulo}</p>
      <button onClick={() => DeleteTodo(id)} >
        <IconX  />
      </button>
    </article>
  );
};
export default ItemTodo;
