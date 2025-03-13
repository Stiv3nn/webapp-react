// IMPORTO AXIOS
import axios from "axios";

// USO DI STATE
import { useState } from "react";

const ReviewForm = ({ movie_id, realoadReview }) => {
  const initialValue = { name: "", text: "", vote: 1 };

  // VARIABILE DI STATO PER INFO DEL FORM
  const [formData, setFormData] = useState({ initialValue });

  // FUNZIONE DI CREAZIONE OGGETTO VALORI FROM
  const setFieldValue = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const urlEndpoint = `http://localhost:3000/api/movies/${movie_id}/reviews`;

  // FUNZIONE DI INVIO RICHIESTA AL SUBMIT DEL FORM
  const submitReview = (e) => {
    e.preventDefault();

    axios
      .post(urlEndpoint, formData, {
        headers: { "Content-Type": "application/json" },
      })
      .then(() => {
        setFormData(initialValue);
        realoadReview();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="card">
      <header className="card-header">
        <h5>Add your review</h5>
      </header>
      <div className="card-body">
        <form onSubmit={submitReview}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={setFieldValue}
            />
          </div>
          <div className="form-group">
            <label>Review</label>
            <textarea
              className="form-control"
              name="text"
              value={formData.name}
              onChange={setFieldValue}
            ></textarea>
          </div>
          <div className="form-group">
            <label>Voto</label>
            <input
              type="number"
              min="1"
              max="5"
              className="form-control"
              name="vote"
              value={formData.vote}
              onChange={setFieldValue}
            />
          </div>
          <div className="d-flex justify-content-end pt-3">
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
