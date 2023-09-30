import React, { useState, useEffect } from "react";
import {
  PlusCircleIcon,
  TrashIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewTodo,
  getAllTodos,
  toggleTodoCompleted,
  updateTodo, // Import the updateTodo actiond
  deleteTodo,
} from "../../redux/actions/Index";

const Home: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [editing, setEditing] = useState<any>(null); 
  const dispatch = useDispatch();

  const todos = useSelector((state: any) => state.todos);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response: any = await getAllTodos();
        dispatch(response);
      } catch (error) {
        console.error("Error while fetching todos:", error);
      }
    };

    fetchTodos();
  }, [dispatch]);

  const handleToggleComplete = async (index: number) => {
    try {
      const res: any = await toggleTodoCompleted(todos[index]._id);
      dispatch(res);
    } catch (error) {
      console.error("Error while toggling todo completion:", error);
    }
  };

  const handleEditTask = (index: number) => {
    setEditing({ text: todos[index].data, index });    
  };

  const handleSaveTask = async (index: number) => {
    try {
      const editedText = editing?.text || "";
      const res: any = await updateTodo(todos[index]._id, editedText);
      dispatch(res);
      setEditing(null);
    } catch (error) {
      console.error("Error while saving todo:", error);
    }
  };

  const handleDeleteTask = async (index: number) => {
    try {
      const todoIdToDelete = todos[index]._id;
      const res: any = await deleteTodo(todoIdToDelete);
      dispatch(res);
    } catch (error) {
      console.error("Error while deleting todo:", error);
    }
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (task.trim()) {
        // Check if the task is not empty before adding
        const response: any = await addNewTodo(task);
        await dispatch(response);
        setTask("");
      }
    } catch (error) {
      console.error("Error while adding todo:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <form className="space-y-6" onSubmit={onFormSubmit}>
        <div>
          <label
            htmlFor="text"
            className="block text-lg font-semibold text-gray-900"
          >
            Add Task
          </label>
          <div className="relative mt-2 flex rounded-md shadow-sm">
            <input
              id="text"
              name="text"
              placeholder="Enter your Task Name"
              type="text"
              autoComplete="text"
              required
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="block w-full rounded-md border border-gray-300 py-3 px-4 pr-10 text-gray-900 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm sm:leading-5"
            />
            {task.trim() && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <PlusCircleIcon onClick={() => setTask("")} />
              </div>
            )}
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <button
                type="submit"
                className="h-10 w-10 text-indigo-600 hover:text-indigo-800 cursor-pointer"
              >
                <PlusCircleIcon />
              </button>
            </div>
          </div>
        </div>
      </form>

      <div className="mt-5">
        <h2 className="text-xl font-semibold text-gray-900">Active Todos</h2>
        <ul className="mt-2">
          {todos.map((todo: any, index: number) => (
            <li
              key={todo._id}
              className={`flex items-center justify-between mt-2 p-3 rounded-md bg-gray-200 hover:bg-gray-300 hover:cursor-pointer {todo.done && !editing ? "line-through text-gray-400" : ""}
              `}
            >
              {editing && editing.index === index ? (
                <input
                  type="text"
                  value={editing.text}
                  onChange={(e) =>
                    setEditing({ ...editing, text: e.target.value })
                  }
                  className={`w-full border-gray-300 focus:ring-1 focus:ring-indigo-600 focus:border-indigo-600`}
                />
              ) : (
                <span
                  className={`py-2 pl-3 hover:cursor-pointer ${
                    todo.done ? "line-through text-gray-400" : ""
                  }`}
                  onClick={() => handleToggleComplete(index)}
                >
                  {todo.data}
                </span>
              )}
              <div className="flex space-x-2 py-1 px-2">
                {editing && editing.index === index ? (
                  <button
                    className="text-green-600 hover:text-green-800 ml-4"
                    onClick={() => handleSaveTask(index)}
                  >
                    Save
                  </button>
                ) : (
                  <>
                    <button
                      className="text-blue-600 hover:text-blue-800"
                      onClick={() => handleEditTask(index)}
                    >
                      <PencilIcon className="h-6 w-6" />
                    </button>
                    <div className="relative">
                      <button
                        className="text-red-600 hover:text-red-800"
                        onClick={() => handleDeleteTask(index)}
                      >
                        <TrashIcon className="h-6 w-6" />
                      </button>
                    </div>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
