import WalletCard from "../walletCard/walletCard";

const WalletWrapper = ({ list = [] }) => {
  return (
    <>
      {list.map((cost, index) => (
        <WalletCard key={index} cost={cost} />
      ))}
    </>
  );
};

export default WalletWrapper;
