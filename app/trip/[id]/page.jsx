"use client";
import { useParams, useSearchParams } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import Travel from "@/app/components/travel/travel";
import ModaleTodo from "@/app/components/modaleTodo/modaleTodo";
import { globalContext } from "@/app/(context)/Provider";
import axios from "axios";

const Trip = () => {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const date = searchParams.get("date");
  const [todos, setTodos] = useState([]);
  const [cityDate, setCityDate] = useState(date ? new Date(date) : new Date());
  const [showModal, setShowModal] = useState(false);
  const { setTravelData } = useContext(globalContext);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(`/api/todo?cityId=${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch todos");
        }
        const data = await response.json();

        const sortedTodos = data.data.sort((a, b) => {
          const dateTimeA = new Date(`${a.date}T${a.time}`);
          const dateTimeB = new Date(`${b.date}T${b.time}`);
          return dateTimeA - dateTimeB;
        });

        setTodos(sortedTodos);

        if (sortedTodos.length > 0) {
          setCityDate(new Date(sortedTodos[0].date));
        }
      } catch (error) {
        console.error(error);
      }
    };

    const fetchCityImage = async () => {
      try {
        const response = await axios.get(`https://pixabay.com/api/`, {
          params: {
            key: process.env.NEXT_PUBLIC_PIXABAY_API_KEY,
            q: name,
            image_type: "photo",
            per_page: 3,
          },
        });
        if (response.data.hits.length > 0) {
          setTravelData(prevState => ({
            ...prevState,
            cityImage: response.data.hits[0].webformatURL,
            cityName: name,
            cityDate: cityDate
          }));
        }
      } catch (error) {
        console.error("Errore nel recupero dell'immagine della città:", error);
      }
    };

    if (id) {
      fetchTodos();
    }

    if (name) {
      fetchCityImage();
    }

    setTravelData({
      cityName: name,
      cityDate,
    });
  }, [id, name, cityDate, setTravelData]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Travel todos={todos} onAddTodo={handleOpenModal} />
      {showModal && <ModaleTodo cityId={id} onClose={handleCloseModal} />}
    </div>
  );
};

export default Trip;
