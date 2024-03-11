import { useReadCounterI, useWriteCounterDec, useWriteCounterInc } from "./generated";

const Contract = () => {
  //TODO
  //Remove the hardcoded adddress
  const address = import.meta.env.VITE_CONTRACT_ADDRESS ?? "";
  const { data, refetch } = useReadCounterI({ address });
  const { writeContractAsync: counterInc } = useWriteCounterInc();
  const { writeContractAsync: counterDec } = useWriteCounterDec();

  const handleIncrease = async () => {
    try {
      await counterInc({ address });
      await refetch();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDecrease = async () => {
    try {
      const result = await counterDec({ address });
      await refetch();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>{data?.toString()}</div>
      <input
        type="button"
        value="Increase"
        onClick={async () => {
          await handleIncrease();
        }}
      />
      <input
        type="button"
        value="Decrease"
        onClick={async () => {
          await handleDecrease();
        }}
      />
    </div>
  );
};

export default Contract;
