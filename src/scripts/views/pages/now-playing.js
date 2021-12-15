import TMDBSource from '../../data/tmdb-source';
import { createMovieItemTemplate } from '../templates/template-creator';

const NowPlaying = {
  async render() {
    return `
      <div class"content">
        <h2 class="content__heading">Now Playing in Cinema</h2>
        <div id="movies" class="movies"></div>
      </div>
    `;
  },

  async afterRender() {
    const movies = await TMDBSource.fetchNowPlayingMovies();
    const moviesContainer = document.getElementById('movies');
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },
};

export default NowPlaying;
