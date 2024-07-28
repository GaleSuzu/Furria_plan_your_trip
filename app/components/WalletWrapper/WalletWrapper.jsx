import WalletCard from "../WalletCard/walletCard";

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
