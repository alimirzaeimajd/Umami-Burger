import useCounter from "../hooks/useCounter";

const ForwardCounter = () => {
  const counter = useCounter();
  return <div>{counter}</div>;
};

export default ForwardCounter;
