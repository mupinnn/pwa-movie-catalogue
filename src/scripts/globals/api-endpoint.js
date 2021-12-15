import CONFIG from './config';

const API_ENDPOINT = {
  NOW_PLAYING: `${CONFIG.BASE_URL}movie/now_playing?api_key=${CONFIG.API_KEY}&language=${CONFIG.DEFAULT_LANG}&page=1`,
  UPCOMING: `${CONFIG.BASE_URL}movie/upcoming?api_key=${CONFIG.API_KEY}&language=${CONFIG.DEFAULT_LANG}&page=1`,
  DETAIL: (id) => `${CONFIG.BASE_URL}movie/${id}?api_key=${CONFIG.API_KEY}`,
};

export default API_ENDPOINT;
