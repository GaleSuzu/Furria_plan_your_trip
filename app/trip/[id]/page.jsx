"use client";
import { useParams, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Travel from "@/app/components/travel/travel";

const Trip = () => {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const [todos, setTodos] = useState([]);
  const [cityDate, setCityDate] = useState(new Date());

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(`/api/todo?cityId=${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch todos");
        }
        const data = await response.json();
        setTodos(data.data);
        if (data.data.length > 0) {
          setCityDate(new Date(data.data[0].date));
        }
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
      <Travel cityName={name} cityDate={cityDate} todos={todos} />
    </div>
  );
};

export default Trip;
