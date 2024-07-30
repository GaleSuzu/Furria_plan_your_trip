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
<<<<<<< HEAD
      <div>
        {showModal && (
          <WalletModal
            cityDate={cityDate}
            cityId={id}
            onClose={handleCloseModal}
          />
        )}
      </div>
=======

>>>>>>> 75a529f48c9a00033dc92b299dadf9e73a052322
    </div>
  );
};

export default Wallet;
