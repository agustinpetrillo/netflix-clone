import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  return (
    <>
      <div className="inline-block relative p-2 cursor-pointer w-40 sm:w-52 md:w-60 lg:w-72">
        <img
          className="w-full h-auto"
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item?.title}
        />
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100">
          <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center w-full h-full text-center">
            {item?.title}
          </p>
          <p>
            {like ? (
              <FaHeart
                size={20}
                className="absolute top-4 left-4 text-gray-300"
              />
            ) : (
              <FaRegHeart
                size={20}
                className="absolute top-4 left-4 text-gray-300"
              />
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default Movie;
