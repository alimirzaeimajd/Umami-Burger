import useCounter from "../hooks/useCounter";

const BackwardCounter = () => {
  const counter = useCounter(false);
  return <div>{counter}</div>;
};

export default BackwardCounter;
