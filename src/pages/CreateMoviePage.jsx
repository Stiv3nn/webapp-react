// IMPORTIAMO PARTE LINK DEL MODULO REACT-ROUTER
import { Link, useNavigate } from "react-router-dom";

// IMPORTO LO USESTATE
import { useState } from "react";
import axios from "axios";

const initialData = {
  title: "",
  director: "",
  image: null,
  abstract: "",
};

const endpointApi = "http://localhost:3000/api/movies";

const CreateMoviePage = () => {
  // CREAZIONE NAVIGAZIONE
  const navigate = useNavigate();
  // CREAZONE DELLA VARIABILE DI STATO
  const [formDataOgj, setFormDataOgj] = useState(initialData);
  const setFieldValue = (e) => {
    // GESTIONE DELLA RACCOLTA DATI DEL FORM
    const { value, name } = e.target;
    if (name === "image")
      setFormDataOgj({ ...formDataOgj, image: e.target.files[0] });
    else setFormDataOgj({ ...formDataOgja, [name]: value });
  };

  const handleSubmit = () => {
    // GESTIONE DELL'INVIO DEL FORM
    e.preventDefault();

    // //CREIAMO UN OGGETTO FORMDATA PER INVIARE I DATI DEL FORM
    // const dataToSend = new FormData();

    // // AGGIUNGIAMO DINAMICAMENTE I DATI DEL FORM ALL'OGGETTO FORMDATA
    // for (const key in formDataOgj) {
    //   dataToSend.append(KeyboardEvent, formDataOgj[key]);
    // }

    // INVIAMO I DATI AL BACKEND CON AXIOS E REINDIRIZZIAMO ALLA HOME
    axios
      .post(endpointApi, formDataOgj, {
        headers: { "Content-Type:": "multipart/form-data" },
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <header className="border-bottom border-1 mb-3">
        <h1>Add a new movie</h1>
      </header>

      <section id="book-form">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>Title:</label>
            <input
              className="form-control"
              name="title"
              type="text"
              value={formDataOgj.title}
              onChange={setFieldValue}
              required
            />
          </div>
          <div className="mb-4">
            <label>Director:</label>
            <input
              className="form-control"
              name="author"
              type="text"
              value={formDataOgj.author}
              onChange={setFieldValue}
              required
            />
          </div>
          <div className="mb-4">
            <label>Image:</label>
            <input
              className="form-control"
              name="image"
              type="file"
              onChange={setFieldValue}
              required
            />
          </div>
          <div className="mb-4">
            <label>Abstract:</label>
            <textarea
              value={formDataOgj.abstract}
              className="form-control"
              name="abstract"
              onChange={setFieldValue}
              required
            ></textarea>
          </div>
          <div className="border-top mb-3 pt-3 d-flex justify-content-between">
            <Link className="btn btn-secondary" to="/">
              Back
            </Link>
            <button className="btn btn-success" type="submit">
              Add Movie
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default CreateMoviePage;
