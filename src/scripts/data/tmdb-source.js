import API_ENDPOINT from '../globals/api-endpoint';

class TMDBSource {
  static async fetchNowPlayingMovies() {
    const response = await fetch(API_ENDPOINT.NOW_PLAYING);
    const responseJSON = await response.json();
    return responseJSON.results;
  }

  static async fetchUpcomingMovies() {
    const response = await fetch(API_ENDPOINT.UPCOMING);
    const responseJSON = await response.json();
    return responseJSON.results;
  }

  static async fetchMovieDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJSON = await response.json();
    return responseJSON;
  }
}

export default TMDBSource;
