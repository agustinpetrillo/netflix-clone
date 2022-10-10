import axios from "axios";
// import Image from "next/image";
import { useEffect, useState } from "react";
import requests from "../requests";
import Row from "../components/Row";

const FirstSection = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <>
      <div className="w-full text-white min-h-screen">
        <div className="absolute w-full h-[650px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-[650px] object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-1/4 pt-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border border-gray-300 py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
        <Row rowID="1" title="UpComing" fetchURL={requests.requestUpcoming} />
        <Row rowID="2" title="Popular" fetchURL={requests.requestPopular} />
        <Row rowID="3" title="Trending" fetchURL={requests.requestTrending} />
        <Row rowID="4" title="Top Rated" fetchURL={requests.requestTopRated} />
        <Row rowID="5" title="Horror" fetchURL={requests.requestHorror} />
      </div>
    </>
  );
};

export default FirstSection;
