import SerieCard from "./SerieCard";

function SerieList() {
  const shows = [
    {
      id: 1,
      img: "https://www.themoviedb.org/t/p/original/4UZzJ65UxR6AsKL6zjFWNYAKb3w.jpg",
      title: "The walking dead",
      genre: "Horror",
      year: 2010,
      description: "A show about zombies",
      season: 10,
      episodes: 100,
    },
    {
      id: 2,
      img: "https://www.themoviedb.org/t/p/original/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
      title: "Breaking Bad",
      genre: "Drama",
      year: 2008,
      description: "A show about a chemistry teacher",
      season: 5,
      episodes: 62,
    },
    {
      id: 3,
      img: "https://www.themoviedb.org/t/p/original/3YSdxdhhdCDlMs88RhvjhDLX4CA.jpg",
      title: "Game of Thrones",
      genre: "Fantasy",
      year: 2011,
      description: "A show about a fantasy world",
      season: 8,
      episodes: 73,
    },

    {
      id: 4,
      img: "https://www.themoviedb.org/t/p/original/4Tw8TB9ikrcgzJgR0LOvgfnXD74.jpg",
      title: "The Boys",
      genre: "Action",
      year: 2019,
      description: "A show about a group of superheroes",
      season: 2,
      episodes: 16,
    },
  ];

  return (
    <div className="show-list">
      {shows.map((show) => (
        <li key={show.id}>
          <SerieCard show={show} />
        </li>
      ))}
    </div>
  );
}

export default SerieList;
