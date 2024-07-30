"use client";
import WalletWrapper from "@/app/components/WalletWrapper/WalletWrapper";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Wallet = ({ onAddCost }) => {
  const { id } = useParams();
  const [costs, setCosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    fetch(`/api/cost?cityId=${id}`)
      .then((res) => res.json())
      .then((data) => setCosts(data.data));
  }, []);
  return (
    <div>
      <WalletWrapper list={costs} />

    </div>
  );
};

export default Wallet;
