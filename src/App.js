import MoviesList from "./movies";
import { movies } from "./data";
import GenreFilter from "./genreFilter";

const App = () => {
  return(
    <div>
      <MoviesList movies={movies}/>
    </div>
  )
}
export default App;
