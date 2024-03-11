import { useReadCounterI, useWriteCounterDec, useWriteCounterInc } from "./generated";

const Contract = () => {
  //TODO
  //Remove the hardcoded adddress
  const address = "0xdc64a140aa3e981100a9beca4e685f962f0cf6c9";
  const { data, refetch } = useReadCounterI({ address });
  const { writeContractAsync: counterInc } = useWriteCounterInc();
  const { writeContractAsync: counterDec } = useWriteCounterDec();

  const handleIncrease = async () => {
    try {
      // Assuming writeContractAsync is a function that initiates the contract interaction.
      const result = await counterInc({ address });
      await refetch();
      console.log(result); // Log or handle the result of the contract write operation.
    } catch (error) {
      console.error(error); // Handle errors appropriately.
    }
  };

  const handleDecrease = async () => {
    try {
      // Assuming writeContractAsync is a function that initiates the contract interaction.
      const result = await counterDec({ address });
      await refetch();
      console.log(result); // Log or handle the result of the contract write operation.
    } catch (error) {
      console.error(error); // Handle errors appropriately.
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
