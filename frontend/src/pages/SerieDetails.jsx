import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import "../styles/serieDetails.scss";

function SerieDetails() {
  const [serie, setSerie] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/series/${id}`)
      .then((response) => {
        setSerie(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [id]);

  return (
    <>
      <Header />
      <Link to="/">Retour</Link>
      {serie && (
        <div className="serie-details">
          <h2 className="serie-details-title">{serie.title}</h2>
          <img
            src={serie.img}
            className="serie-details-img"
            alt={serie.title}
          />
          <p className="serie-details-genre">{serie.genre}</p>
          <p className="serie-details-year">{serie.year}</p>

          <p className="serie-details-description">{serie.description}</p>
          {serie.episodes.map((episode) => (
            <section key={episode.id}>
              <header>
                <span className="serie-details-season-episode">
                  {episode.season}x{episode.episode}
                </span>
                <input
                  type="checkbox"
                  className="serie-details-checkbox"
                  checked={episode.seen}
                />
                <h3 className="serie-details-episode-title">{episode.title}</h3>
              </header>
              <p className="serie-details-episode-description">
                {episode.description}
              </p>
            </section>
          ))}
        </div>
      )}
    </>
  );
}

export default SerieDetails;
