import { genres } from "./genre";
import GenreFilter from "./genreFilter";
import "./movies.css";
const MoviesList = ({movies}) => {
  return (
    <div>
        <h1 className="heading">Top 15 Movies of All Time</h1>
        <div className="container">
            <h2>Filter by Genre</h2>
            <GenreFilter genres={genres}/>
        </div>
      <table className="Table">
        <thead>
          <tr>
          <td>Title</td>
          <td>Genere</td>
          <td>Year</td>
          </tr>
        </thead>
        <tbody>
        {
        movies.map((x) => {
          return (
            <tr>
              <td>{x.title}</td>
              <td>{x.genre}</td>
              <td>{x.year}</td>
            </tr>
          );
        })
        }
        </tbody>
      </table>
    </div>
  );
};
export default MoviesList;