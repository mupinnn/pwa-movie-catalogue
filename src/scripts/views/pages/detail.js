import TMDBSource from '../../data/tmdb-source';
import { createMovieDetailTemplate } from '../templates/template-creator';
import URLParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return `
      <div id="movie" class="movie"></div>
    `;
  },

  async afterRender() {
    const url = URLParser.parseActiveURLWithoutCombiner();
    const movie = await TMDBSource.fetchMovieDetail(url.id);
    const movieContainer = document.getElementById('movie');
    movieContainer.innerHTML = createMovieDetailTemplate(movie);
  },
};

export default Detail;
