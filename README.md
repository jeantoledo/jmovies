# JMovies

Live app: http://jctmovies.s3-website-sa-east-1.amazonaws.com/

A Serverless React app to stay up to date on the movie world.

**Stack:**
- React (Hooks).
- Redux (used to share state between components without using props).
- API gateway (simple way to create http endpoints for a Lambda function).
- AWS Lambda (simple serverless aproach to use, gives all the advantages of serverless).
- Material UI (beautiful and usefull component library).

## scripts

**start app:** `yarn start`

**build static app:** `yarn build`

**testing:** `yarn test`

# AWS Lambda code

```nodejs
var https = require('https');

const getGenres = (callback) => {
    const genresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.MDB_API_KEY}`;

    https.get(genresUrl, (res) => {
        let rawData = '';
        res.on('data', (chunk) => { rawData += chunk; });
        res.on('end', () => {
            const parsedData = JSON.parse(rawData);
            callback(parsedData.genres);
        });
    }).on('error', (e) => {
        callback(Error(e))
    });
};

const movieGenres = (genres, genre_ids) => {
    return genre_ids.map(id => {
        const genre = genres.filter(genre => genre.id === id)[0];
        return genre ? genre.name : '';
    });
}

const formatMovies = (movies, genres) => {
    return movies.map(movie => ({
      title: movie.title,
      backdrop_path: movie.backdrop_path ? `http://image.tmdb.org/t/p/w500${movie.backdrop_path}` : undefined,
      poster_path: movie.poster_path ? `http://image.tmdb.org/t/p/w500${movie.poster_path}` : undefined,
      release_date: movie.release_date,
      genres: movieGenres(genres, movie.genre_ids),
      overview: movie.overview,
    }));
};

exports.handler = function (event, context, callback) {
    const page = event.queryStringParameters ? (event.queryStringParameters.page || 1) : 1;
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.MDB_API_KEY}&page=${page}`;

    getGenres((genres) => {
        console.log(genres);

        https.get(url, (res) => {
            let rawData = '';
            res.on('data', (chunk) => { rawData += chunk; });
            res.on('end', () => {
                const parsedData = JSON.parse(rawData);

                callback(null, {
                    statusCode: 200,
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    },
                    body: JSON.stringify({
                        page: parsedData.page,
                        total_pages: parsedData.total_pages,
                        results: formatMovies(parsedData.results, genres)
                    })
                })
            });
        }).on('error', (e) => {
            callback(Error(e))
        })
    });
}
```
