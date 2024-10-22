const Card = ({ title, text, children }) => {
  //   console.log(props);
  console.log(title, text, children);
  //   const { title, text } = props;
  return (
    <div className="card-container">
      <h3>{title}</h3>
      <p>{text}</p>
      {children}
    </div>
  );
};

export default Card;
