import axios from 'axios';

const moviesUrl = 'https://1a9vfqo243.execute-api.us-west-2.amazonaws.com/movies/upcoming?page=';

class MovieService {
  async upcoming(page = 1) {
    const response = await axios.get(moviesUrl + page);
    return response.data;
  }
}

export default MovieService;
