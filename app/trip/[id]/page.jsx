"use client";
import { useParams, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const Trip = () => {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(`/api/todo?cityId=${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch todos");
        }
        const data = await response.json();
        setTodos(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (id) {
      fetchTodos();
    }
  }, [id]);

  return (
    <div>
      <p>City ID: {id}</p>
      <p>City Name: {name}</p>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <p>Date: {new Date(todo.date).toLocaleDateString()}</p>
            <p>Time: {todo.time}</p>
            <p>Place: {todo.place}</p>
            <p>Text: {todo.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trip;
