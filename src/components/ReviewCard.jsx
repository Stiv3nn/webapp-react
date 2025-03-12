const ReviewCard = ({ reviewProp }) => {
  // DESTRUTURIAMO LA PROP
  const { name, vote, text } = reviewProp;
  return (
    <div className="card mb-4">
      <div className="card-body">
        <p className="card-text">{text}</p>
        <strong>{vote}</strong>
        <address>
          <i>{name}</i>
        </address>
      </div>
    </div>
  );
};

export default ReviewCard;
