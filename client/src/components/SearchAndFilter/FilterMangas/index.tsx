import { useId } from "react";
import { useEffect } from 'react';
import { fetchMangaByGenres, fetchGetGenres } from "../../../features/manga/mangaSlice";
import { useAppDispatch , useAppSelector } from "../../../app/hooks";

const FilterMangas = () => {

  const id = useId();
  const dispatch = useAppDispatch();
  const { genres } = useAppSelector(state => state.mangas);

  useEffect(() => {
    dispatch(fetchGetGenres())
  },[])


  const handleClick = (event: any) => {
    dispatch(fetchMangaByGenres(event.target.innerText))
  }


  return (
    <>
    {
      genres.map( (genre: string) => {
        return (
          <div
            key={`${id}_${genre}`}
            onClick={handleClick}
          >
            {genre}
          </div>
        )
      })
    }
    </>
  )
};

export default FilterMangas;