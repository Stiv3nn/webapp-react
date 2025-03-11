const ReviewCard = () => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <p className="card-text">Testo della recensione</p>
        <strong>Vote: voto recensione</strong>
        <address>
          <i>By nome del recensore</i>
        </address>
      </div>
    </div>
  );
};

export default ReviewCard;
