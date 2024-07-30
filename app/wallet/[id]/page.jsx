"use client";
import { useParams } from "next/navigation";
import { useEffect, useState, useContext } from "react";
import WalletWrapper from "@/app/components/WalletWrapper/WalletWrapper";
import { globalContext } from "@/app/(context)/Provider";

const WalletPage = () => {
const { id } = useParams();
const [costs, setCosts] = useState([]);
const { travelData, setTravelData } = useContext(globalContext);

useEffect(() => {
  const fetchCosts = async () => {
    try {
      const response = await fetch(`/api/cost?cityId=${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch costs");
      }
      const data = await response.json();
      setCosts(data.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (id) {
    fetchCosts();
  }
}, [id]);

return (
  <div>
    <WalletWrapper
      list={costs}
    />
  </div>
);
};

export default WalletPage;
