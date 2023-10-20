const TodoFilter = ({ ChangeFilter, filter }) => {
  
  const active = "text-blue-600 hover:text-gray-400 dark:text-white";
  const disactive = "text-gray-600 hover:text-blue-600 dark:text-white";

  return (
    <section className="container mx-auto">
      <div className=" bg-white flex justify-center mt-8 rounded-md p-4 gap-4 dark:bg-gray-800">
        <button
          className={`${filter === "todas" ? active : disactive}`}
          onClick={() => ChangeFilter("todas")}
        >
          Todas
        </button>

        <button
          className={`${filter === "activas" ? active : disactive}`}
          onClick={() => ChangeFilter("activas")}
        >
          Activas
        </button>

        <button
          className={`${filter === "completadas" ? active : disactive}`}
          onClick={() => ChangeFilter("completadas")}
        >
          Completadas
        </button>
      </div>
    </section>
  );
};
export default TodoFilter;
