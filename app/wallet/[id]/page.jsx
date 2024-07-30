"use client";
import WalletWrapper from "@/app/components/WalletWrapper/WalletWrapper";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import WalletModal from "@/app/components/walletModal/WalletModal";

const Wallet = ({ onAddCost }) => {
  const { id } = useParams();
  const [costs, setCosts] = useState([]);
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
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
      <WalletWrapper cityName={name} list={costs} />
      <button onClick={handleOpenModal}>Add Expense</button>
      {showModal && <WalletModal cityId={id} onClose={handleCloseModal} />}
    </div>
  );
};

export default Wallet;
