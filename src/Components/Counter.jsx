const Counter = ({ counter, setCounter }) => {
  return (
    <div className="btnGroup">
      <button disabled={counter === 0} onClick={() => setCounter(counter - 1)}>
        -
      </button>
      <h5>{counter}</h5>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
};

export default Counter;
