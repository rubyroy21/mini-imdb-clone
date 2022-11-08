import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../card/Card";
import "./MovieList.css";

export const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=dd730ba2f12ddffcde45fe49b6bf599b&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="movie__list">
        <h2 className="list__title">
          {(type ? type : "POPULAR").toUpperCase()}
        </h2>
        <div className="list__cards">
          {movieList.map((movie) => (
            <Card movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};
