const api = "https://api.themoviedb.org/3";

function get(path) {
  return fetch(api + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTM4YTIxNWRkMWUxMTdiNDI2Y2YyN2U0NGRiYTczYSIsInN1YiI6IjYxODU4OTQwZTkzZTk1MDA2MjYwZGIwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aw3UIMzeP6qWngaJ06vX17qkNU3Da5Jb5C2BCXYyMks",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}

export { get };
